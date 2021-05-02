import React from 'react'
import {Link} from 'react-router-dom'

const NavbarItem = ({inner, Icon, children}) => {
  return (
    <li className="NavbarItem">
      <a className="NavbarItem__link" href={`/#${inner.toLowerCase()}`}>
        <Icon className="NavbarItem__link--icon"/>
        <span className="NavbarItem__link--inner">{inner}</span>
      </a>
    </li>
  )
}

export default NavbarItem;
