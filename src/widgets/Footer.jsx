import React from 'react';
import brandImage from '../assets/img/Helix-blanco.svg';

const Footer = () => {
  return (
    <div className="Footer page-footer">
      
      <div className="contenedor-medio text-center text-md-center">
        <div id="logo-footer" className="mx-auto">
          <a className="navbar-brand" href="#">
            <img src={brandImage} alt="Logo Helix Intelligence Code"/>
          </a>
        </div>
        <div id="servicios-footer">
          <div>
            <h4>Servicios</h4>
          </div>  
          <ul>
            <li>
              <a href="#Landing">Diseño Web</a>
            </li>
            <li>
              <a href="#Ecommerce">E-Commerce</a>
            </li>
            <li>
              <a href="#Marketing">Marketing Digital</a>
            </li>
            <li>
              <a href="#Analitica">Analitica Web</a>
            </li>
            <li>
              <a href="#Community">Community Manager</a>
            </li>
          </ul>
            
        </div>
        <div id="contacto-footer">
          <div>
            <h4>Contacto</h4>
          </div>
          <ul className="contenido-contacto">
            <li>
              <i className="far fa-envelope"></i>
              <span> info@helixincode.com</span>
            </li>

            <li>
              <i className="fab fa-facebook-square"></i>
              <span>facebook.com/helixincode.ar</span>
            </li>

            <li>
              <i className="fab fa-instagram fa-1x"></i>
              <span>instagram.com/helix_in_code</span>
            </li>

          </ul> 
        </div>
      </div>

      <div className="copyright">
        <span>© 2020 Copyright: <a href="index">helixincode.com</a></span>
      </div>
    </div>
  )
}

export default Footer;
