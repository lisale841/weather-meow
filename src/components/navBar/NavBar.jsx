import React from 'react';
import './navBar.css';
import {Link, Outlet} from "react-router-dom";

const NavBar = () => {
  return(
    <div className ='navBar'>
      <li>
        <Link className ='navBtnSpacing' to ="/">
          <div className ='navCircle'>
          <img src ={require('../../images/home.png')} alt='homeIcon' className= 'homeBtn'/>
          </div>
        </Link>
      </li>
      <li>
        <Link className ='navBtnSpacing' to ="/currentWeather">
          <div className ='navCircle'>
          <img src ={require('../../images/pawLogo.jpg')} alt='pawIcon' className= 'homeBtn'/>
          </div>
        </Link>
      </li>
        <Outlet />

    </div>



  );



}


export default NavBar;