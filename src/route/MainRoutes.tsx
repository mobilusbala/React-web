import * as React from 'react';
import { Route, Routes, RoutesProps } from 'react-router-dom';
import { Home } from '../pages';
import Login from '../pages/Login';
import { Logout } from '../pages/Logout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';



const MainRoutes = () => {

 return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/topics' element={<Login/>} />
            <Route path='/settings' element={<Logout/>} />
        </Routes>
  )
};

export default MainRoutes;
