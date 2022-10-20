import React, {useState, useEffect} from 'react';
import './home.css';

import {search} from '../../api/api'



const Home = () => {
 
  const [state, setState] = useState();
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

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    // const test = await search(`${city} ${usState}`);
    // setState(test);
  }

  useEffect(()=>{
    console.log(state)
  },[state]);

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
         <input type ="submit" value="SUBMIT" className ='submitBtn' />
        </form>
      
      <div>
        {state && state.current.temp_f}
        {state && state.current.wind_mph}
        {state && state.current.feelslike_f}
      </div>
      
      
     </div>
       
      
    </div>




  );



}


export default Home;
