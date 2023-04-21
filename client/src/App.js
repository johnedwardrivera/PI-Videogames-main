import './App.css';
import LandingPage from './components/LandingPage/LandingPage' 
import HomePage from './components/Home/HomePage'
import DetailPage from './components/DetailPage/DetailPage' 
import Createvideogame from './components/Createvideogame/Createvideogame'
import { Routes, Route, } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<LandingPage/>}></Route> 
      <Route path='/homepage' element = {<HomePage/>}></Route> 
      <Route path='/gamedetail/:id' element= {<DetailPage/>}></Route> 
      <Route path='/create' element= {<Createvideogame/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
