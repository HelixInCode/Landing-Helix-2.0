import React from 'react'

const CounterItem = () => {
  return (
    <div className="CounterItem">
      <img className="CounterItem__icon" src="src/assets/img/arepa.svg" alt="arepa helix"/>
      <span className="CounterItem__amount" data-cantidad-total="800">0</span>
      <span className="CounterItem__name">Arepas</span>
    </div>
  )
}

export default CounterItem;
