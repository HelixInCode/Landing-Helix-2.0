import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
      
      <nav className="Footer__nav">
        
        <Link to="/" className="Footer__nav--brand-image">
          <img src="https://i.imgur.com/NP5G2lV.png" alt="Logo Helix Intelligence Code"/>
        </Link>
        
        <div className="Footer-section">
          <h4 className="Footer-section__title">Servicios</h4>
          <ul className="Footer-section__list">
            <li className="Footer-section__list--item">
              <a href="#Landing">Diseño Web</a>
            </li>
            <li className="Footer-section__list--item">
              <a href="#Ecommerce">E-Commerce</a>
            </li>
            <li className="Footer-section__list--item">
              <a href="#Marketing">Marketing Digital</a>
            </li>
            <li className="Footer-section__list--item">
              <a href="#Analitica">Analitica Web</a>
            </li>
            <li className="Footer-section__list--item">
              <a href="#Community">Community Manager</a>
            </li>
          </ul>
            
        </div>
        
        <div className="Footer-section one-column">
          <h4 className="Footer-section__title">Contacto</h4>
          <ul className="Footer-section__list">
            
            <li className="Footer-section__list--item">
              <i className="far fa-envelope"></i>
              <span> info@helixincode.com</span>
            </li>

            <li className="Footer-section__list--item">
              <i className="fab fa-facebook-square"></i>
              <span>facebook.com/helixincode.ar</span>
            </li>

            <li className="Footer-section__list--item">
              <i className="fab fa-instagram fa-1x"></i>
              <span>instagram.com/helix_in_code</span>
            </li>
          </ul> 
        </div>
      </nav>

      <div className="Footer__copyright">
        <span>© 2021 Copyright: <Link to="/">helixincode.com</Link></span>
      </div>
    </div>
  )
}

export default Footer;
