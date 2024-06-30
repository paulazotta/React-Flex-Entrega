import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'




function App() {
  const [count, setCount] = useState(0)

  return (
      
      <div>
        <NavBar></NavBar>
        <ItemListConteiner greeting={'Bienvenidos'} />
        <h1>Hola mundo</h1>
      </div>
    
  )
}

export default App
