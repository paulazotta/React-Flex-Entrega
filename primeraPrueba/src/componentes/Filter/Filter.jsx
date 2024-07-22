import React from 'react'

function Filter({filterState, setFilterState}) {
    
    function handleFilter(e){
        e.preventDefault()
        console.log("cambio", e.target.value)
        //e.target es para ver a cuál de todos estás apuntando. El "value" es por las opciones que puse abajo
        setFilterState(e.target.value)
    }
  return (
    <select onChange={handleFilter} id="filter" value={filterState}>
        <option value="general">Tipo de cliente</option>
        <option value="taller">Taller mecánico</option>
        <option value="particular">Particular</option>
    </select>
  )
}

export default Filter

