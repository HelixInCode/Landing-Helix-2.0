import React from 'react';
import {Link} from 'react-router-dom'
import Briefcase from '../components/icons/Briefcase';
import Envelope from '../components/icons/Envelope';
import EnvelopeOpen from '../components/icons/EnvelopeOpen';
import Handshake from '../components/icons/Handshake';
import Home from '../components/icons/Home';
import IdCard from '../components/icons/IdCard';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/" className="Navbar__brand-icon">
        <img 
          className="Navbar__brand-icon--image" 
          src="https://i.imgur.com/NP5G2lV.png" 
          alt="Helix-Intelligence-Code-Logo"
        />
      </Link>

      <ul className="Navbar__links">
        <NavbarItem
          inner="Inicio" 
          Icon={Home}
        />
        <NavbarItem
          inner="Servicios" 
          Icon={Handshake}
        />
        <NavbarItem
          inner="Nosotros" 
          Icon={IdCard}
        />
        <NavbarItem
          inner="Portafolio" 
          Icon={EnvelopeOpen}
        />
        <NavbarItem
          inner="Planes" 
          Icon={Briefcase}
        />
        <NavbarItem
          inner="Contacto" 
          Icon={Envelope}
        />
      </ul>
    </nav>
  )
}

export default Navbar;
