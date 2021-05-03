import React from 'react';
import Button from '../widgets/Button';

const PlansItem = ({title, features}) => {
  return (
    <div className="PlansItem">
      <h5 className="PlansItem__title">{title}</h5>
      <ul className="PlansItem__list">
        {features.map(feature =>(
          <li className="PlansItem__list--feature">
            {feature}
          </li>
        ))}
      </ul>
      <a href="/#contacto" className="PlansItem__Button">
        <Button>Más info!</Button>
      </a>
    </div>
  )
}

export default PlansItem;
