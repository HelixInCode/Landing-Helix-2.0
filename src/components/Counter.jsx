import React from 'react';
import CounterItem from './CounterItem';
import Code from './icons/Code';
import SuccesIcon from './icons/SuccessIcon';
import Clock from './icons/Clock';
import Mate from './icons/Mate';
import Arepa from './icons/Arepa';

const Counter = () => {
  return (
    <section className="Counter">
      <div className="Counter__container">
        
        <CounterItem name="Líneas de Código" amount={0}>
          <Code className="CounterItem__icon"/>
        </CounterItem>
        
        <CounterItem name="Proyectos Terminados" amount={0}>
          <SuccesIcon className="CounterItem__icon"/>
        </CounterItem>
        
        <CounterItem name="Horas de Trabajo" amount={0}>
          <Clock className="CounterItem__icon"/>
        </CounterItem>
        
        <CounterItem name="Mates" amount={0}>
          <Mate className="CounterItem__icon"/>
        </CounterItem>
        
        <CounterItem name="Arepas" amount={0}>
          <Arepa className="CounterItem__icon"/>
        </CounterItem>
      </div>
      <div className="Counter__overlay"></div>
    </section>
  )
}

export default Counter;