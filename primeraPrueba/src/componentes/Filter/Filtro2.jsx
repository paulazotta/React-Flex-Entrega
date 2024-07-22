import React, { useState } from 'react'

function Filtro2() {
    const [categoria, setCategoria] = useState({
        taller: false,
        particular: false,
    });
    const [datosFiltrados, setDatosFiltrados] = useState([]);

   
    const handleOnCheckbox = (e) =>{
        setCategoria({
            ...categoria,
            [e.target.value] : e.target.checked,
        })
    }
  return (
    <>
      <div className='check-box-container'>
            <h4>Tipo de cliente</h4>
            <div className='input-box'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                name='cliente'
                value= 'Taller mecánico'
                id='taller'
                />
                <label htmlFor='taller'>Taller mecánico</label>
            </div>
            <div className='input-box'>
                <input 
                onChange={handleOnCheckbox}
                type='checkbox'
                name='cliente'
                value= 'Particular'
                id='particular'
                />
                <label htmlFor='particular'>Particular</label>
            </div>

      </div>
    </>
  )
}

export default Filtro2
