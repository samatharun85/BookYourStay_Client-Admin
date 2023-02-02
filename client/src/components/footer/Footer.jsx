import "./footer.css";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="footerbg">
    <div className="mail">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Apartments</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">About Us</li>
          <Link to="privacypolicy"><li className="fListItem">Privacy Policies</li></Link>
          <li className="fListItem">Careers</li>
         <Link to="/termsandconditions"><li className="fListItem">Terms & conditions</li></Link> 
        </ul>
      </div>
    </div>
    <div className="fText">© Copyright 2023 BookYourStay - All Rights Reserved</div>
    </div>

  );
};

export default Footer;
