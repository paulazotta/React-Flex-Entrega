import React from 'react'

import './DetalleProductos.css'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import 'bootstrap/dist/css/bootstrap.min.css'

function DetalleProductos({id, img, nombre, caracteristicas}) {
    
  return (
    <div>
        <div key={id} className="card mb-3, cardDetalle">
            <div className="row g-0">
            <div className="col-md-4">
             {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
             </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{caracteristicas}</p>
                <img src={img} className="card-img-top imgCard" alt={nombre} />
                
                
                {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                <BotonAgregarCarrito/>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DetalleProductos
