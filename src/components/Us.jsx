import React from 'react';

const Us = () => {
  return (
    <section id="nosotros" className="Us">
      <div className="Us__description py-5">
        <h2 className="Us__description--title">HELIX INTELLIGENCE CODE </h2>
        <p className="Us__description--paragraph">Somos  un equipo conformado por programadores y creativos diseñadores que trabajan en conjunto para acercar a los emprendedores a la transformación digital de sus ideas mediante tendencias tecnológicas.</p>
        <p className="Us__description--paragraph">Sabemos que el futuro es ahora, por lo que nuestros esfuerzos se enfocan en crear soluciones para nuestros clientes por medio de metodologías digitales, lo que nos permite expandir la publicidad y la comunicación de sus productos y servicios con el resto del mundo.</p>
        <p className="Us__description--paragraph">Diseñamos paginas web adaptadas a las exigencias de nuestros clientes, con integración de redes sociales, diseño responsivo, backend personalizado, mantenimiento profesional y mas.</p>
      </div>

      <div className="Us__cover">
        <img className="Us__cover--image" src="https://i.imgur.com/LyXR8hl.jpg" alt="laptopImage-background"/>
      </div>
    </section>
  )
}

export default Us;
