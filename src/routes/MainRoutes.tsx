import * as React from 'react';
import { Route, Routes, RoutesProps } from 'react-router-dom';
import Login from '../pages/Login';
import { Logout } from '../pages/Logout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import PrivateRoutes from './PrivateRoutes';



const MainRoutes = () => {

  return (
    <Routes>
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignIn />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Route>
    </Routes>
  )
};

export default MainRoutes;
