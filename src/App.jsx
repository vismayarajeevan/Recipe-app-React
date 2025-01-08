import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Favourite from './Pages/Favourite'
import Ingrediants from './Pages/Ingrediants'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/details' element={<Ingrediants/>}/>
     </Routes>
        
    </>
  )
}

export default App
