import React from "react"
import ItemList from "../ItemList/ItemList"

const ItemListConteiner = ({productos}) =>{

  return(
    <>
      {
        productos.length === 0?
        <p>Cargando...</p>
        :
        <ItemList productos={productos} />
      }
    </>
  )  
}
    

    
export default ItemListConteiner

   