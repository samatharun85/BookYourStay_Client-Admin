import {
  faBed,
  faCalendarDays,
  faPerson,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { format } from "date-fns";
import {  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext.js";
import { useEffect } from "react";
import axios from "axios";


const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [formError,setFromerror] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [users,setUsers]=useState([])
  const [text,setText]=useState("")
  const [suggestions,setSuggestions]=useState([])
  useEffect(()=>{
    const loadUsers=async()=>{
      const response=await axios.get("http://localhost:8000/api/hotels")
      setUsers(response.data)
    }
    loadUsers()
  },[])

  const onSuggesHandler=(text)=>{
    setDestination(text)
    setSuggestions([])
  }
  
  const onChangeHandler=(text)=>{
    let matches=[]
    if (text.length>0){
      matches=users.filter((user)=>{
        const regex=new RegExp(`${text}`,"gi")
        return user.city.match(regex)
      })
    }
    setSuggestions(matches)
    setText(text)
  }
  let all=[]
  {all=suggestions.map((e)=>{
     return `${e["city"]}`
  }
  )}
  let final=[...new Set(all)]

  
    

  const navigate = useNavigate();


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const {dispatch}=useContext(SearchContext)

  const handleSearch = () => {
    if(destination==='')
    {
      setFromerror(true);
    }
    else{
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
    navigate("/hotels", { state: { destination, dates, options } });
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Take your vacation Now 
            </h1>
            <p className="headerDesc">
              Find your perfect place to Stay ! Experience the real Vacation with perfect bed and the nature !
            </p>
            <div>
            <div className="headerSearch">
              <div className="city-search">
                <div>
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                </div>

                <div className="abc">
                    <input
                      type="text"
                      value={destination}
                      placeholder="Search here to stay!"
                      className="headerSearchInput"
                      onChange={(e) => { setDestination(e.target.value); 
                        setFromerror(false);onChangeHandler(e.target.value)}}
                    />
                    <div className="bcd">
                    {final && final.map((sugg,i)=>
                    <div className="suggestion" onClick={()=>onSuggesHandler(sugg)} key={i}> <FontAwesomeIcon icon={faMapMarker} className="hi"/>{sugg}</div>
                    )}
                    </div>
                </div>
                {
                  formError && <p className='city-error'>Please enter city name</p>
                }
              </div>
             
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
           
            </div>
            
          </>
        )}
      </div>
      
    </div>
  );
};

export default Header;
