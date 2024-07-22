import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import fetchProductos from './componentes/Productos/fetchProductos'
import Filter from './componentes/Filter/Filter'
import BotonAgregarCarrito from './componentes/BotonAgregarCarrito/BotonAgregarCarrito'
import ItemDetail from './componentes/ItemDetail/ItemDetail'
import DetalleProductos from './componentes/DetalleProductos/DetalleProductos'
import Contacto from './componentes/Contacto/Contacto'
import Inicio from './componentes/Inicio/Inicio'
import Error404 from './componentes/Error404/Error404'
import Filtro2 from './componentes/Filter/Filtro2'

// Dolar blue a través de una API. Traigo la info y la pongo en la variable dolarBlue. 
//   fetch("https://dolarapi.com/v1/dolares/blue")
//   .then(response => response.json())
//   .then(data => {
//   let dolarBlue = {
//     venta: data.venta
//   }
//   console.log(dolarBlue)
// });

function App() {
 
  const [productos, setProductos] = useState ([])
    useEffect(()=>{
    fetchProductos()
    .then (response => setProductos (response))
    .catch (err=> console.error(err)
    )
    }, [])

  return (
      
      <div>  
        <BrowserRouter>
          <NavBar></NavBar>
          <Filtro2/>
          <Routes>
            <Route path="" element={<Inicio/>}></Route>
            <Route path="/inicio" element={<Inicio/>}></Route>
            <Route path='/prueba' element={<p>Etiqueta de prueba</p>} ></Route>
            <Route path='/contacto' element={<Contacto/>} ></Route>
            <Route path='/productos' element={<ItemListConteiner productos= {productos} />} ></Route>
            <Route path="/detalle/:id" element={<ItemDetail productos= {productos}/>}></Route>
            <Route path="*" element={<Error404 />} ></Route>
          </Routes>

        </BrowserRouter>
      </div> 
  )
}

export default App
