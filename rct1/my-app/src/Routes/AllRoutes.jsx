
import { Route, Routes } from "react-router-dom";
import Camera from "../pages/Camera"
import Home from "../pages/Home"
import Television from "../pages/Television"

import React from 'react'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home />} ></Route>
       <Route path='/camera' element={<Camera/>}></Route>
       <Route path='/televison' element={<Television/>}></Route>
    </Routes>
  )
}

export default AllRoutes