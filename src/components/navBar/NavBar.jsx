import React from 'react';
import './navBar.css';
import {useNavigate, Outlet} from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  onclick = path => {
    navigate(path)
  }
  return(
    <div className ='navBar'>
      <li>
        <button className ='navBtnSpacing' onClick={() => onclick('/')}>
          <div className ='navCircle'>
          <img src ={require('../../images/home.png')} alt='homeIcon' className= 'homeBtn'/>
          </div>
        </button>
      </li>
      <li>
        <button className ='navBtnSpacing' onClick={() => onclick("/currentWeather")} >
          <div className ='navCircle'>
          <img src ={require('../../images/pawLogo.jpg')} alt='pawIcon' className= 'homeBtn'/>
          </div>
        </button>
      </li>
        <Outlet />

    </div>



  );



}


export default NavBar;