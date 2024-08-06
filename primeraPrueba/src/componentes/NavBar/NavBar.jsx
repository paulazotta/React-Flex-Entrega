import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from '../Inicio/Inicio';
import { useAppContext } from '../Context/Context';

function NavBar() {
  const {carrito} = useAppContext();
  return (

  <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Inicio" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link> 
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
    </nav>
</div>
  )
}

export default NavBar

