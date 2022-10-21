import './App.css';
import './Styles.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {search} from './api/api';
import Header from './components/header/Header'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Weather from './components/weather/Weather'
import Favorites from './components/favorites/Favorites'
import React, { useState} from 'react';

function App() {

  // const test = search('westminster ca');
  const [state, setState] = useState({});

  return (
    <div className="container">
      <Header/>
      <Router>
        <NavBar/>
         <Routes>
          <Route path ='/' element={<Home setState={setState}/>}/>
          <Route path = '/currentWeather' element={<Weather state={state}/>}/>
          <Route path = '/favorites' element={<Favorites/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
