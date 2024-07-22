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
    {/* <img src="..." class="card-img-top" alt="..."> */}
    <div className="card-body">
      {/* <img class="card-img-top">{img}</img> */}
      <figure>
        <img src={img} className="card-img-top imgCard" alt={nombre} />
      </figure>
      <h5 className="card-title">{nombre}</h5>
      <p className="card-text">${valor}</p>
      <Link to={`/detalle/${id}`}>
        <button type="button" className="btn btn-primary">Ver detalle</button>
    </Link>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    <BotonAgregarCarrito />
    </div>
  </div>
</div>
  

  )
}

export default Item


{/* <div key={id} className='card'>
<h3 className='nombre'>{nombre}</h3>
<p className='valor'>${valor}</p> */}
{/* <p className='caracteristicas'>{caracteristicas}</p> */}
{/* <BotonAgregarCarrito/>
<Link to={`/detalle/${id}`}>
  <button className='verDetalle'>Ver detalle</button>
</Link>
<button type="button" className="btn btn-primary">Primary</button>


</div> */}

