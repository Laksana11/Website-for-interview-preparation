import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Interviews from '../pages/Interviews/Interviews'


import {Routes, Route} from 'react-router-dom'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/interviews" element={<Interviews/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
 

  </Routes>
}

export default Routers