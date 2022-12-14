import React from 'react';
import './favorites.css';
import './../home/home.css';
import {useNavigate } from "react-router-dom";
import useFavoritesStore from '../../hooks/useFavoritesStore';


const Favorites = () => {
  const {getFavorites} = useFavoritesStore();

  const navigate = useNavigate();

  const handleClick = event => {
    console.log(event.currentTarget.id);
    navigate('/'+ event.currentTarget.id);
    
    
    console.log('/' + event.currentTarget.id)

  };

  function totalFavoritesShown() {
  let totalFavorites = getFavorites();
   if(totalFavorites == null) {
   return  ( <div className = 'favoritesBox'>
     NO PURR-TY WEATHER TRACKED
   </div>)
  } else {
     return totalFavorites.map((favorites, index) =>
   
    <div className ='favoritesBox' key={index} id={favorites.location.name} onClick= {handleClick}>
      {favorites.location.name} 
      <br/>
      {favorites.location.region}
    </div>
  ); 
  
}

}


  
  return(
    <div className = 'homeBackground'>
     <div className= 'row rowSpacing'>
         <div className= 'locationText textStyle favoritesText'>
         YOUR MEOW LIST
         </div>
        <div >
      {totalFavoritesShown()}
        </div>
    
      </div>   
    </div>




  );



}


export default Favorites;
