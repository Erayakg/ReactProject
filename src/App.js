import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import User from "./components/user/User"
import Navbar from './components/navbar/Navbar';
function App() {
  return (
  <div>
    <Navbar></Navbar>
    <Routes>

      <Route exact path="/"element={< Home/>} ></Route>
      <Route exact path='/users/:userId' element={<User/>}></Route>


      </Routes>

  </div>
  );
}

export default App;
