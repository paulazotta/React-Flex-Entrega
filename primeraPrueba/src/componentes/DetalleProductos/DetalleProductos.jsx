import React from 'react'

import './DetalleProductos.css'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'

function DetalleProductos({id, nombre, caracteristicas}) {
    
  return (
    <div>
      <div key={id} className='card'>
          <h3 className='nombreProducto'>{nombre}</h3>
          <p className='caracteristicas'>{caracteristicas}</p>
          {/* <p className='caracteristicas'>{caracteristicas}</p> */}
          <BotonAgregarCarrito/>
          

        </div>
    </div>
  )
}

export default DetalleProductos
