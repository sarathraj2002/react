import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      

  <Navbar/>
  
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
      </Routes>
       
       
    </>
  )
}

export default App
