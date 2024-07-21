// Va a mostrar un item en particular
// por props tiene que recibir producto y valor


import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import './Item.css'
import { Link } from 'react-router-dom';

function Item({nombre, valor, id}) {
  
  return (
    <div key={id} className='card'>
          <h3 className='nombre'>{nombre}</h3>
          <p className='valor'>${valor}</p>
          {/* <p className='caracteristicas'>{caracteristicas}</p> */}
          <BotonAgregarCarrito/>
          <Link to={`/detalle/${id}`}>
            <button>Ver detalle</button>
          </Link>
    </div>
  )
}

export default Item
