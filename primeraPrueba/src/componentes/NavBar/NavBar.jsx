import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className='navBar'>
        <ul className='lista'>
                <li className='item'>
                  {/* <Link to="/inicio"className='enlaces'>Inicio</Link> */}
                    <a href="" className='enlaces'>Inicio</a>
                </li>
                <li className='item'>
                  <Link to="/contacto" className='enlaces'>Contacto</Link> 
                    {/* <a href=""className='enlaces'>Contacto</a> */}
                 </li>
                <li className='item'>
                  <Link to="/productos"className='enlaces'>Productos</Link>
                  {/* <a href=""className='enlaces'>Productos</a> */}
                </li>
        </ul>
                <CartWidget/>
        </nav>
    </div>
  )
}

export default NavBar
