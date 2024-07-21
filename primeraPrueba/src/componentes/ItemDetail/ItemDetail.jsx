import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item';
import DetalleProductos from '../DetalleProductos/DetalleProductos';

const ItemDetail = ({productos}) => {
    const {id} = useParams();

    const [productoSeleccionado, setProductoSeleccionado] = useState({})
    useEffect(()=>{
        const findProduct = productos.find(el => el.id ===  parseInt(id))
       setProductoSeleccionado(findProduct)
    },[])
    
  return (
    <div>
        {/* <p>
            Detalle del componente {productoSeleccionado.nombre}
        </p> */}
        <DetalleProductos  key={productoSeleccionado.id} id={productoSeleccionado.id} nombre={productoSeleccionado.nombre} caracteristicas={productoSeleccionado.caracteristicas}/>
    </div>
  )
}

export default ItemDetail
