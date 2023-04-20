import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
        <li><NavLink to="/home" activeClassName="active">Acerca de</NavLink></li>
        <li><NavLink to="/chat" activeClassName="active">Servicios</NavLink></li>
        <li><NavLink to="/buy" activeClassName="active">Contacto</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavComponent;
