import React from 'react'

import './DetalleProductos.css'
import BotonAgregarCarrito from '../BotonAgregarCarrito/BotonAgregarCarrito'
import 'bootstrap/dist/css/bootstrap.min.css'

function DetalleProductos({id, nombre, caracteristicas}) {
    
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
//style={{max-width: "540px"}}
    //   <div key={id} className='card2'>
    //       <h3 className='nombreProducto'>{nombre}</h3>
    //       <p className='caracteristicas'>{caracteristicas}</p>
          {/* <p className='caracteristicas'>{caracteristicas}</p> */}
    //       <BotonAgregarCarrito/>
          

    //     </div>