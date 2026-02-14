import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import LovePage from './LovePage'


const Routess = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default Routess