import React from 'react';
import './weather.css';




const Weather = ({state}) => {

  console.log(state);
  return(
    <div className = 'homeBackground'>
     <div className= 'row rowSpacing'>
      <div className= 'locationText textStyle'>
        Westminster <br/>
        California 
      </div>
      <div className='circle'>
        <img src ={require('../../images/sunny-cat.jpg')} alt='cat-doodle' className= 'imagesCircle'/>
      </div>
      <div className ='logoFont'>
        WEATHER-MEOW
      </div>
      <div>
        {state && state?.current?.temp_f}
        {state && state?.current?.wind_mph}
        {state && state?.current?.feelslike_f}
      </div>
      
     </div>
       
      
    </div>




  );



}


export default Weather;
