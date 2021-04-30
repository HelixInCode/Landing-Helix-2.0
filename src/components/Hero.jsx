import React from 'react'
import Button from '../widgets/Button';

const Hero = () => {
  return (
    <section id="inicio" className="Hero">
      <div className="Hero__container">
        
        <h1 className="Hero-title">
          <span className="Hero-title__main typed">Web Design</span>
          <span className="Hero-title__secondary">Tu futuro ahora</span>
        </h1>
        
        <div className="Hero-buttons">
          
          <a href="#servicios">
            <Button color="dark">Servicios</Button>
          </a>
          <a href="#contacto">
            <Button>Contacto</Button>
          </a>
        </div>
        
      </div>
    </section>
  )
}

export default Hero;
