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
        <CounterItem Icon={Code} name="Líneas de Código" amount={5580}/>
        <CounterItem Icon={SuccesIcon} name="Proyectos Terminados" amount={85}/>
        <CounterItem Icon={Clock} name="Horas de Trabajo" amount={3840}/>
        <CounterItem Icon={Mate} name="Mates" amount={3500}/>
        <CounterItem Icon={Arepa} name="Arepas" amount={800}/>
      </div>
      <div className="Counter__overlay"></div>
    </section>
  )
}

export default Counter;