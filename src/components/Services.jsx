import React, {useState} from 'react';
import initialState from '../initialState'
import Title from '../widgets/Title';
import ServiceItem from './ServiceItem';

const Services = () => {
  const [services] = useState(initialState.services)
  return (
    <section id="servicios" className="Services">

      <Title  
        inner="Servicios"
        className="Services__title"
      />

      <div className="Services__list">
          
        {services.map(item => (
          <ServiceItem {...item} key={item.id}/>
        ))}
                  
      </div>
    </section>
  )
}

export default Services
