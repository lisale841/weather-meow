import './App.css';
import './Styles.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {search} from './api/api';
import Header from './components/header/Header'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Weather from './components/weather/Weather'

function App() {

  // const test = search('westminster ca');

  return (
    <div className="container">
      <Header/>
      <Router>
        <NavBar/>
         <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path = '/currentWeather' element={<Weather/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
