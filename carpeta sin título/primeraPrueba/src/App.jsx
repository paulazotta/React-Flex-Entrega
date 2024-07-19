import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import BotonPrueba from './componentes/BotonPrueba/BotonPrueba'
import fetchData from './componentes/Productos/fetchData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
      
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/lista" element={<p>Funciona</p>}></Route>

            
          </Routes>
        </BrowserRouter>
      </div>
    
  )
}

export default App
