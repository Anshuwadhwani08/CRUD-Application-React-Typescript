import React from 'react';
import './App.css';
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import {Fragment} from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Adduser from './Components/Adduser/Adduser';
import Edituser from './Components/Edituser/Edituser';


function App() {
  return (
    <>
    <BrowserRouter>
    <Fragment>
    <Navbar />
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/Adduser' element={<Adduser/>}/>
    <Route  path='/Edituser/:id' element={<Edituser/>}/>
    </Routes>
    </Fragment>
    </BrowserRouter>
    </>
  );
}

export default App;
