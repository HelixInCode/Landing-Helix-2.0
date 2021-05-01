import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({title, image, description}) => {
  return (
    <Link to="/" className="ServiceItem">
      <img className="ServiceItem__cover" src={image} alt={`${title}-image`}/>
      <div className="ServiceItem__summary">
        <h3 className="ServiceItem__summary--title">{title}</h3>
        <p className="ServiceItem__summary--description">{description}</p>
      </div>
      <div className="ServiceItem__frame"></div>
      {/* <span className="ServiceItem__button">Toca para ver</span> */}
    </Link>
  )
}

export default ServiceItem
