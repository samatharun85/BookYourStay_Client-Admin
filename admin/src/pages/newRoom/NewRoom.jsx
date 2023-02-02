import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId,setHotelId]=useState(undefined)
  const [rooms,setRooms]=useState([])
  const navigate=useNavigate()

  const {data, loading}=useFetch("/hotels")

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick= async e=>{
    e.preventDefault()
    //console.log("hotelId",hotelId)
    const roomNumbers=rooms.split(",").map((room)=>({number:room}))
    try{
      await axios.post(`/rooms/${hotelId}`,{...info,roomNumbers,hotelId})
      alert("Added Successfully")
      navigate(-1)
    }catch(err){
      alert("Please fill all the fields..!")
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {
        /* <Navbar /> */
        }
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>

              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange} />
                </div>
              ))}
              <div className="formInput">
                  <label>Rooms</label>
                  <textarea onChange={e=>setRooms(e.target.value)} placeholder="Give comma between room numbers"/>
                </div>
              <div className="formInput">
                  <label>Choose a Hotel</label>
                  <select id="hotelId" onChange={e=>setHotelId(e.target.value)}>
                    <option>Hotels</option>
                    {loading? "Loading...": data && data.map(hotel=>(
                      <option key={hotel?._id} value={hotel?._id}>{hotel?.name}</option>
                    ))}
                  </select>
                </div>
              <button onClick={handleClick}>ADD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
