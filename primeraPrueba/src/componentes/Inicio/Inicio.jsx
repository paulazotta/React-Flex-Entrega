import React, {useState} from 'react'
import Filter from '../Filter/Filter';

function Inicio() {
  const [filterState, setFilterState] = useState("taller");
 
  return (
    <div>
       <Filter filterState={filterState} setFilterState={setFilterState}/>
      <h3>Descubrí todos los equipos en la sección de productos</h3>
      <img src="../Productos/assets/MD_808Pro" alt="Imagen de referencia" />
      
    </div>
  )
}

export default Inicio
