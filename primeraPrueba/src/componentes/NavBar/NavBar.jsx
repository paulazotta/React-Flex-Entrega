import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function NavBar() {
  return (
    <nav className='navBar'>
      <ul className='lista'>
        <li className='item'><a href="" className='enlaces'>Hola</a></li>
        <li className='item'><a href=""className='enlaces'>Estoy</a></li>
        <li className='item'><a href=""className='enlaces'>Probando</a></li>
      </ul>
        <CartWidget className='cartWidget'/>
    </nav>
  )
}

export default NavBar
