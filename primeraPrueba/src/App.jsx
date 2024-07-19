import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import BotonPrueba from './componentes/BotonPrueba/BotonPrueba'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import fetchProductos from './componentes/Productos/fetchProductos'






function App() {
 
  const [productos, setProductos] = useState ([])
    useEffect(()=>{
    fetchProductos()
    .then (response => setProductos (response))
    .catch (err=> console.error(err)
    // .finally(()=>{
    //   console.log("estos son tus productos")
    // })
    )
    }, [])

  
  return (
      
      <div>
        
        {/* <h1>Ecommerce</h1> */}
        {/* <ItemListConteiner usuario="profe" /> */}
        {/* <BotonPrueba textoBoton={false}/> */}
        <BrowserRouter>
          <NavBar></NavBar>
          <ItemListConteiner productos= {productos} />
          <Routes>
            {/* <Route path="/lista" element={<p>Funciona</p>}>
              
            </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    
  )
}

export default App
