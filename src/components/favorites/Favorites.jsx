import React from 'react';
import './favorites.css';
import './../home/home.css';

import useFavoritesStore from '../../hooks/useFavoritesStore';


const Favorites = () => {
  const {getFavorites} = useFavoritesStore();

  // console.log('getFavorites', getFavorites());
  // console.log(state);

  function totalFavoritesShown() {
  let totalFavorites = getFavorites();
   if(totalFavorites == null) {
   return  ( <div className = 'favoritesBox'> No Purr-ty Locations Tracked
   </div>)
  } else {
 console.log ('favorites:',totalFavorites);
 
  
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
