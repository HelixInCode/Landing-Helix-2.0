import React from 'react';

const CounterItem = ({name, amount, children}) => {
  return (
    <div className="CounterItem">
      {children}
      <span className="CounterItem__amount" data-cantidad-total="800">{amount}</span>
      <span className="CounterItem__name">{name}</span>
    </div>
  )
}

export default CounterItem;
