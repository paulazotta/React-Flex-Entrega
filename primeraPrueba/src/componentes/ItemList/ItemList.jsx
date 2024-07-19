// Acá se va a renderizar la lista de todos los items 
// Vamos a pasar todos los productos 
// Acá vamos a crear las cards

import React from 'react';
import Item from '../Item/Item';



const ItemList = ({productos}) => {  
  return (
    <div>
    {
        productos.map((el, index)=>{
            return (
                <Item key={index} nombre={el.nombre} valor={el.valor} />
            )  
        })

    }
</div>
  )
}

export default ItemList

