import React from 'react';
import brandImage from '../assets/img/Helix-blanco.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Navbar/>

      <section id="inicio" className="background-cover">
        <h1 className="font-weight-bold">
          <span className="typed"></span> 
        </h1>

        <span>Tu futuro ahora</span>

        <div>
          <a href="#servicios" className="btn">Servicios</a>
          <a href="#contacto" className="btn">Contacto</a>
        </div>
        
      </section>
    </header>
  )
}

export default Header;
