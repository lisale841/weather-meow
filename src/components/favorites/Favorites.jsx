import React from 'react';
import './favorites.css';
import './../home/home.css';

import useFavoritesStore from '../../hooks/useFavoritesStore';


const Favorites = () => {
  const {getFavorites} = useFavoritesStore();
  function totalFavoritesShown() {
  let totalFavorites = getFavorites();
   if(totalFavorites == null) {
   return  ( <div className = 'favoritesBox'> No Purr-ty Weather Tracked
   </div>)
  } else {
     return totalFavorites.map((favorites, index) =>
    <div className ='favoritesBox' key={index} >
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
