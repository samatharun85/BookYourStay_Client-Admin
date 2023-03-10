import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Datatable = ({columns}) => {
  const location=useLocation()
  const path=location.pathname.split("/")[1]
  const [list,setList]=useState([])
  const {data}=useFetch(`/${path}`)

  useEffect(()=>{
    setList(data)
  },[list,data,path])
  console.log("path:",path)

  const handleDelete = async(id) => {
    try{
      await axios.delete(`/${path}/${id}`)
      alert('Deleted successfully')
      setList(list.filter((item)=> item._id!==id))
    }catch(err){
      console.log(err)
    }
  };
  const handleDeleteRooms = async(id,hotelId)=>{

    try{
      await axios.delete(`/rooms/${hotelId}/${id}`)
      setList(list.filter((item)=> item._id!==id))
    }
    catch(err){
      console.log(err)
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => {
                if(path==="rooms")
                {
                    handleDeleteRooms(params.row._id,params.row.hotelId);
                }
                else{
                  handleDelete(params.row._id)
                }
                }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add new {path}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=>row._id}
      />
    </div>
  );
};

export default Datatable;
