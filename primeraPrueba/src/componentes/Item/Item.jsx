// Va a mostrar un item en particular
// por props tiene que recibir producto y valor


import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import './Item.css'


function Item({nombre, valor, index}) {
  
  return (
    <div key={index} className='card'>
          <h3 className='nombre'>{nombre}</h3>
          <p className='valor'>${valor}</p>
          <BotonAgregarCarrito/>

        </div>
  )
}

export default Item
