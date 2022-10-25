import React, {useState, useEffect} from 'react';
import './weather.css';
import useFavoritesStore from '../../hooks/useFavoritesStore';



const Weather = ({state}) => {
 
  console.log('state',state);
  const {setFavorites} = useFavoritesStore();

  const addToFavorites = () => {
    setFavorites(state);    
  };

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
         <button className='addBtn' onClick={addToFavorites}>
         ➕</button>
        
    
      </div>   
    </div>




  );



}


export default Weather;
