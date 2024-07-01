import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function NavBar() {
  return (
    <nav className='navBar'>
      <ul className='lista'>
            <li className='item'><a href="" className='enlaces'>Inicio</a></li>
            <li className='item'><a href=""className='enlaces'>Contacto</a></li>
            <li className='item'><a href=""className='enlaces'>Productos</a></li>
      </ul>
            <CartWidget/>
    </nav>
  )
}

export default NavBar
