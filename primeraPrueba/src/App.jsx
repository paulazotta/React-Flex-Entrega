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
    // .finally(()=>{
    //   console.log("estos son tus productos")
    // })
    )
    }, [])

    const [filterState, setFilterState] = useState("taller");
   
  
  return (
      
      <div>
        
        {/* <ItemListConteiner productos= {productos} /> */}
        <Filter filterState={filterState} setFilterState={setFilterState}/>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/prueba' element={<p>Etiqueta de prueba</p>} ></Route>
            <Route path='/contacto' element={<BotonAgregarCarrito/>} ></Route>
            <Route path='/productos' element={<ItemListConteiner productos= {productos} />} ></Route>
            <Route path="/detalle/:id" element={<ItemDetail productos= {productos}/>}></Route>
            {/* <Route path="*" element={<NotFound />} ></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    
  )
}

export default App
