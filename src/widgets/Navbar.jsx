import React from 'react'
import {Link} from 'react-router-dom'
import brandImage from '../assets/img/Helix-blanco.svg'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/" className="Navbar__brand-icon">
        <img className="Navbar__brand-icon--image" src={brandImage} alt="Logo Helix Intelligence Code"/>
      </Link>

      <ul className="Navbar__links">
        <li className="Navbar__links--item">
          <a href="#inicio">
            <span>Inicio</span>
          </a>
        </li>
        <li className="Navbar__links--item">
          <a href="#servicios">
            <span>Servicios</span>
          </a>
        </li>
        <li className="Navbar__links--item">
          <a href="#nosotros">
            <span>Quiénes Somos</span>
          </a>
        </li>
        <li className="Navbar__links--item">
          <a href="#portafolio">
            <span>Portafolio</span>
          </a>
        </li>
        <li className="Navbar__links--item">
          <a href="#planes">
            <span>Planes</span>
          </a>
        </li>
        <li className="Navbar__links--item">
          <a href="#contacto">
            <span>Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
