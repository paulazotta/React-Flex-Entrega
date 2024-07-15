import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import BotonPrueba from './componentes/BotonPrueba/BotonPrueba'



function App() {
  const [count, setCount] = useState(0)

  return (
      
      <div>
        <NavBar></NavBar>
        {/* <h1>Ecommerce</h1> */}
        <ItemListConteiner usuario="profe" />
        <BotonPrueba textoBoton={false}/>
      </div>
    
  )
}

export default App
