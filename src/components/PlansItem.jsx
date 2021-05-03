import React from 'react';
import Button from '../widgets/Button';

const PlansItem = () => {
  return (
    <div className="PlansItem">
      <h5 className="PlansItem__title">Plan Básico</h5>
      <ul className="PlansItem__list">
        <li className="PlansItem__list--feature">
          Landing Page
        </li>
        <li className="PlansItem__list--feature">
          Optimización Web
        </li>
        <li className="PlansItem__list--feature">
          Redes Sociales
        </li>
        <li className="PlansItem__list--feature">
          Soporte
        </li>
      </ul>
      <a href="/#contacto" className="PlansItem__Button">
        <Button>Lo Quiero!</Button>
      </a>
    </div>
  )
}

export default PlansItem;
