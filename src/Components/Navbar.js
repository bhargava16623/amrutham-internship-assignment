import React from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div id='navbar'>
        <a href='/'>
            <img src={logo} alt="logo" />
        </a>
      <div id="nav-part2">
           <h2><a href="/">Home</a></h2>
           <h2><a href="/">Find Doctors</a></h2>
           <h2><a href="/">About us</a></h2>
       </div>
       <div id="nav-part3">
           <button>Login</button>
           <button>Sign-up</button>
        </div>
        <h3><FontAwesomeIcon icon={faBars} /></h3>
    </div>
  )
}

export default Navbar;