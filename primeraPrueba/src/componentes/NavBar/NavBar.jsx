import React from 'react';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <nav className='NavBar'>
      <ul>
        <li className='Lista'><a href="" className='enlaces'>Hola</a></li>
        <li className='Lista'><a href=""className='enlaces'>Estoy</a></li>
        <li className='Lista'><a href=""className='enlaces'>Probando</a></li>
      </ul>
        <CartWidget className='cartWidget'/>
    </nav>
  )
}

export default NavBar
