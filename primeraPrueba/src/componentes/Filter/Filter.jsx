import React, {useState, useEffect} from 'react'
import './Filtro.css';

function Filter({filterState, setFilterState}) {

    function handleFilter(e){
        e.preventDefault()
        console.log("cambio", e.target.value)
        //e.target es para ver a cuál de todos estás apuntando. El "value" es por las opciones que puse abajo
        setFilterState(e.target.value)
    }
   
  return (
    <div>
    <select onChange={handleFilter} id="filter" value={filterState}>
        <option value="general">Todos</option>
        <option value="taller">Taller mecánico</option>
        <option value="particular">Particular</option>
    </select>
  
    </div>
  )
}

export default Filter

