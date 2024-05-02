import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import NavBar from './Components/NavBar'

function App() {
 

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<Home/>}></Route>
        <Route path= "/about" element={<About/>}></Route>
        <Route path= "/products" element={<Products/>}></Route>

      </Routes>
        
  </>
  )
}

export default App
