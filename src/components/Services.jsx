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
                  
      </div>
    </section>
  )
}

export default Services
