import React from 'react'
import { useState } from 'react'

function BotonPrueba() {
    // useState
    const [comprar, cancelar] = useState(true)

    // Ternario
    const textoBoton = comprar ?  'Confirmar compra' : 'Cancelar compra'
    
    // Agrego la actualización del estado
    const handleClick = () => {
        cancelar (!comprar)
    }
  return (
    <div>
      <button onClick={handleClick}>
        {textoBoton}
      </button>
    </div>
  )
}

export default BotonPrueba
