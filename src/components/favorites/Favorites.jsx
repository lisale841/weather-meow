import React from 'react';
import './favorites.css';
import './../home/home.css';

import useFavoritesStore from '../../hooks/useFavoritesStore';


const Favorites = () => {
  const {getFavorites} = useFavoritesStore();

  console.log('getFavorites', getFavorites());
  // console.log(state);

  let totalFavorites = getFavorites();

  if(totalFavorites == null) {
   console.log('no purr-ty locations found')
  } else {
 console.log ('favorites:',totalFavorites);
  }

  
  return(
    <div className = 'homeBackground'>
     <div className= 'row rowSpacing'>
         <div className= 'locationText textStyle favoritesText'>
         YOUR MEOW LIST
         </div>
        <div className = 'favoritesBox'>
          <div>

          </div>
        </div>
    
      </div>   
    </div>




  );



}


export default Favorites;
