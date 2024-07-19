import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function NavBar() {
  return (
    <div>
        <nav className='navBar'>
        <ul className='lista'>
                <li className='item'><a href="" className='enlaces'>Inicio</a></li>
                <li className='item'><a href=""className='enlaces'>Contactos</a></li>
                <li className='item'><a href=""className='enlaces'>Productos</a></li>
        </ul>
                <CartWidget/>
        </nav>
    </div>
  )
}

export default NavBar
