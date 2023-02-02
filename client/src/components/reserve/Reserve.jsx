import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch.js";
import { useState } from "react";
import { useContext } from "react";                                                                                         
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data } = useFetch(`/hotels/room/${hotelId}`);
  const {dates}=useContext(SearchContext)
   
  const getDatesInRange=(startDate,endDate)=>{
    const start= new Date(startDate)
    const end= new Date(endDate)
    const date=new Date(start.getTime())

    const dates=[]
    while (date<=end){
      dates.push(new Date(date).getTime())
      date.setDate(date.getDate()+1)
    }
    return dates
   }
   const navigate=useNavigate()
   const [isSelected,setIsSelected]=useState(false)

   const alldates= getDatesInRange(dates[0]?.startDate,dates[0]?.endDate)

   const isAvailable=(roomNumber)=>{
      const isFound=roomNumber.unavailableDates.some((date)=>
        alldates.includes(new Date(date).getTime())
        )
      return !isFound
   }

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
      
    setSelectedRooms(
      checked ? [...selectedRooms, value] : selectedRooms.filter((item)=> item!==value)
    );
  };

  
  const handleClick= async()=>{
    if (isSelected===false) alert("Please select atleast one room to reserve!")
    else{

      try{
        await Promise.all(
          selectedRooms.map(roomId=>{
          const res=axios.put(`/rooms/availability/${roomId}`, {
            dates:alldates
          })
          return res.data
          }))
          setOpen(false)
          alert("Booking Successful!")
          navigate("/")
      }catch(err){
  
      }
    }
}

useEffect(()=>{
  const submit=async()=>{
    if (selectedRooms.length===0){
      setIsSelected(false)
    }
    else{
      setIsSelected(true)
    }
  }
  submit()
})

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select Rooms:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">Max People : {item.maxPeople}</div>
              <div className="rPrice"> ₹ {item.price}</div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room">
                    <label> {roomNumber.number} </label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                    
                  </div>
                ))}
                </div>
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">Reserve Now!</button>
      </div>
    </div>
  );
};

export default Reserve;
