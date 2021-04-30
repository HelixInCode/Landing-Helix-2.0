import React from 'react'

const Hero = () => {
  return (
    <section id="inicio" className="Hero">
      <div className="Hero__container">
        
        <h1 className="Hero__container--title">
          <span>Web Design</span>
          {/* <span className="typed"></span>  */}
          <span>Tu futuro ahora</span>
        </h1>
        
        <div className="Hero__container--buttons">
          <a href="#servicios" className="btn">Servicios</a>
          <a href="#contacto" className="btn">Contacto</a>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
