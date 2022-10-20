import React from 'react';
import './weather.css';



const Weather = () => {
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

      
     </div>
       
      
    </div>




  );



}


export default Weather;
