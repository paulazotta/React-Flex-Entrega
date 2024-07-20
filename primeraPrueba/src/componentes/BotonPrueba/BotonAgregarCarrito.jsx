import React from 'react'
import { useState } from 'react'

function BotonAgregarCarrito() {
    // useState
    const [agregar, quitar] = useState(true)

    // Ternario
    const textoBoton = agregar ?  'Agregar al carrito' : 'Quitar del carrito'
    
    // Agrego la actualización del estado
    const handleClick = () => {
        quitar (!agregar)
    }
  return (
    <div>
      <button onClick={handleClick}>
        {textoBoton}
      </button>
    </div>
  )
}

export default BotonAgregarCarrito
