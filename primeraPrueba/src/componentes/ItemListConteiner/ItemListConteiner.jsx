import React from "react"
import ItemList from "../ItemList/ItemList"

const ItemListConteiner = ({productos, filtro}) =>{
  const filtrarProductos = (productos, filtro) =>{
    if (filtro ===  "todos"){
      return productos;
    } else {
      return productos.filter((producto) => producto.categoria === filtro)
    }
  }
  const productosFiltrados = filtrarProductos (productos, filtro);
  return(
    <>
      {
        productos.length === 0?
        <p>Cargando...</p>
        :
        <ItemList productos={productosFiltrados} />
      }
    </>
  )  
}

    

    
export default ItemListConteiner

   