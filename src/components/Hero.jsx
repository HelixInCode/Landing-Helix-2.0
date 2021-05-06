import React, {useRef, useEffect} from 'react'
import Typed from 'typed.js'
import {options} from '../utils/typed';
import Button from '../widgets/Button';

const Hero = () => {
  const titleTyped = useRef(null)
  
  useEffect(() => {
    var typed = new Typed(titleTyped.current, options);
  }, [])
  
  return (
    <section id="inicio" className="Hero">
      <div className="Hero__container">
        <h1 className="Hero-title">
          <span className="Hero-title__main">
            <span ref={titleTyped}></span> 
          </span>
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
