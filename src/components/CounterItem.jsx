import React from 'react';
import CountUp from 'react-countup';

const CounterItem = ({name, amount, Icon}) => {
  return (
    <div className="CounterItem">
      <Icon className="CounterItem__icon"/>
      <span className="CounterItem__amount">
        <CountUp end={amount} duration={3} delay={.5}/>
      </span>
      <span className="CounterItem__name">{name}</span>
    </div>
  )
}

export default CounterItem;
