import { LOGO_URL } from "../utils/constants";
import { useState, } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");

  //if no dependcies array that means useEffect is called on every render
  //if depedcies array is empty = []=>useEffect is called on initial render and just once
  //if depencies array is [btnNameReact] = > called everytime btnNameReact is updated 
  // useEffect(() => {
  //   console.log("useEffect called");
  // },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li><Link to= "/Contact">  Contact Us </Link> </li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
