import React, {useState, useEffect} from 'react';
import './home.css';

import {search} from '../../api/api'
import { Link, Routes, Route, useNavigate, Navigate } from 'react-router-dom';



const Home = ({setState}) => {
 
  
  const [city, setCity] = useState('');
  const [usState, setUsState] = useState('');
  console.log('city:', city);
  console.log('state:', usState);
  
 
  const handleCityChange = (event) => {
    setCity (event.target.value);
  };

  const handleUsStateChange = (event) => {
    setUsState (event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const test = await search(`${city} ${usState}`);
    setState(test);
    navigate('/currentWeather');
  }

  // const test = search('westminster ca');
  return(
    <div className = 'homeBackground'>
     <div className= 'row rowSpacing'>
       <div className='circle'>
          <img src ={require('../../images/cat-doodle.png')} alt='cat-doodle' className= 'imagesCircle'/>
       </div>
       <div className ='logoFont'>
        WEATHER-MEOW
       </div>
        <form onSubmit= {handleSubmit}> 
         <label>
          <input 
          type ='text' 
          name='city' 
          placeholder='city' 
          value= {city} 
          onChange ={handleCityChange} 
          /> <br/>
         </label>  
         <label>
          <input 
          type ='text' 
          name='state' 
          placeholder='state' 
          value= {usState}
          onChange={handleUsStateChange}
          /> <br/>
         </label>   
         <input 
         type = "submit" 
         value="SUBMIT" 
         className ='submitBtn' />
        </form>
    
      
      
     </div>
       
      
    </div>




  );



}


export default Home;
