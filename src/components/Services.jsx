import React, {useState} from 'react';
import initialState from '../initialState'
import ServiceItem from './ServiceItem';

const Services = () => {
  const [services] = useState(initialState.services)
  return (
    <section id="servicios" className="Services">

      <div className="Services__title">
        <h2>Servicios</h2>
        <hr style={{backgroundColor: "#fff", width: "100px", height: "1px"}}/>
      </div>

      <div className="Services__list">
          
        {services.map(item => (
          <ServiceItem {...item} key={item.id}/>
        ))}
                  
        {/* <a id="Ecommerce" href="planes#Ecommerce" className="img-container">
          <img src="src/assets/img/E-commerce.jpg" alt="E-commerce Helix" className="img-fluid"/>
          <div>
            <h3>E-commerce</h3>
            <span>Te ayudamos a llevar tu negocio a la web para que lo gestiones de manera online. Acompañandote en el proceso del mismo y dandote soporte con lo que necesites</span>
            <span>Toca para ver</span>
          </div>
        </a> */}

        {/* <a id="Landing" href="planes#Landing" className="img-container">
          <img src="src/assets/img/Diseno.jpg" alt="Diseño Helix" className="img-fluid"/>
          <div>
            <h3>Diseño Web</h3>
            <span>Mejoramos la prescencia de tu idea en la internet. Creamos tu web con diseños modernos y adaptables a diversos dispositivos, dandote soporte para el desarrollo de la misma</span>
            <span>Toca para ver</span>
          </div>
        </a>

        <a id="Marketing" href="planes#Marketing" className="img-container">
          <img src="src/assets/img/Marketing.jpg" alt="Marketing Helix" className="img-fluid"/>
          <div>
            <h3>Marketing Digital</h3>
            <span>Hacemos tu web más conocida con la ayuda de las redes sociales. Dandote mayor visualización y promoción en las mismas mediante estrategias comunicativas</span>
            <span>Toca para ver</span>
          </div>
        </a>

        <a id="Community" href="planes#Community" className="img-container">
          <img src="src/assets/img/community-manager.jpg" alt="Community Manager Helix" className="img-fluid"/>
          <div>
            <h3>Community Manager</h3>
            <span>Te ayudamos a gestionar tus medios de comunicación, para potenciar tus ventas y expandir tu área</span>
            <span>Toca para ver</span>
          </div>
        </a>

        <a id="Analitica" href="planes#Analitica" className="img-container">
          <img src="src/assets/img/Analitica-web.jpg" alt="Analitica Web Helix" className="img-fluid"/>
          <div>
            <h3>Analítica Web</h3>
            <span>Analizamos la cantidad y calidad de visitas que posee tu web, así como el público potencial en ella; para aumentar la visualizacion en la misma</span>
            <span>Toca para ver</span>
          </div>
        </a> */}
      </div>
    </section>
  )
}

export default Services
