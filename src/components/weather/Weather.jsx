import React from 'react';
import './weather.css';




const Weather = ({state}) => {
 
  console.log(state);
  return(
    <div className = 'homeBackground'>
     <div className= 'row rowSpacing'>
         <div className= 'locationText textStyle'>
          {state && state?.location?.name}<br/>
          {state && state?.location?.region}
         </div>
         <div className='circleWeather'>
           <img src ={require('../../images/sunny-cat.jpg')} alt='cat-doodle' className= 'imagesCircle'/>
         </div>
         <div className ='logoFont'>
            WEATHER-MEOW 🐾
         </div>
         <div className ='tempText textStyle'>
           {state && state?.current?.temp_f}°
         </div>
         <div className ='logoFont'>
           {state && state?.current?.condition?.text}
           <img src = {state && state?.current?.condition?.icon} alt='weatherIcon' />
         </div>
         <button className='addBtn'>
         ➕</button>
        
    
      </div>   
    </div>




  );



}


export default Weather;
