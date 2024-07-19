// Va a mostrar un item en particular
// por props tiene que recibir producto y valor


import React from 'react'

function Item({nombre, valor, index}) {
  return (
    <div key={index} >
          <h3>{nombre}</h3>
          <p>${valor}</p>
          <button>Agregar</button>

        </div>
  )
}

export default Item
