import React from 'react';
import './favorites.css';
import './../home/home.css';




const Favorites = () => {
 
  // console.log(state);
  return(
    <div className = 'homeBackground'>
     <div className= 'row rowSpacing'>
         <div className= 'locationText textStyle favoritesText'>
         YOUR MEOW LIST
         </div>
         <div className='circleWeather'>
           <img src ={require('../../images/sunny-cat.jpg')} alt='cat-doodle' className= 'imagesCircle'/>
         </div>
         <div className ='logoFont'>
            WEATHER-MEOW
         </div>
    
      </div>   
    </div>




  );



}


export default Favorites;
