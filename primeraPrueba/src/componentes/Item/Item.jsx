// Va a mostrar un item en particular
// por props tiene que recibir producto y valor


import React from 'react'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import './Item.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



function Item({img, nombre, valor, id}) {
  
  return (
    <div className='cardContainer'>
        <div key={id} className="card"> 
        <div className="card-body">
          <img src={img} className="card-img-top imgCard" alt={nombre} />
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">USD{valor}</p>
          <Link to={`/detalle/${id}`}>
            <button type="button" className="btn btn-primary">Ver detalle</button>
          </Link>
          <BotonAgregarCarrito/>
        </div>
      </div>
    </div>
      

  )
}

export default Item


