import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const { user, dispatch}=useContext(AuthContext)
  const navigate = useNavigate();
  
  const handleLogout =e=>{
    e.preventDefault()
    dispatch({type:"LOGOUT"})
    alert("Logged Out Successfully..")
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
      <div>
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
          <span className="logo"><b>B</b>ook<b>Y</b>our<b>S</b>tay  </span>
        </Link>
      </div>
      
        {user?
        ( <div className="middle"> 
         <img src={user.img} alt="Hi"/>  {user.username} <button className="navButton" onClick={handleLogout} >Logout</button> 
         </div> )
         :(<div className="navItems">
          <Link to="/register" className="navButton">Register</Link>
          <Link to="/login" className="navButton">Login</Link>
        </div>)
        }
      </div>
    </div>
  )
}

export default Navbar