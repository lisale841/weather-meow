const useFavoritesStore  =  () => {

  const key = 'favorites';

  const setFavorites = ( value) => {
    const data = localStorage.getItem(key);
    let parsedData;
    if (data) {
      parsedData = JSON.parse(data);
    } else {
      parsedData = [];
    }

    parsedData.push(value);
    localStorage.setItem(key, JSON.stringify(parsedData));
  }

  const getFavorites = () => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  const removeFavorite = (index) => {
    const data = localStorage.getItem(key);
    const parsedData = JSON.parse(data);

    parsedData.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(parsedData));
  }

  return {setFavorites, getFavorites, removeFavorite};
}

export default useFavoritesStore;