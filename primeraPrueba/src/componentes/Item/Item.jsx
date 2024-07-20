// Va a mostrar un item en particular
// por props tiene que recibir producto y valor


import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'



function Item({nombre, valor, index}) {
  
  return (
    <div key={index} >
          <h3>{nombre}</h3>
          <p>${valor}</p>
          <BotonAgregarCarrito/>

        </div>
  )
}

export default Item
