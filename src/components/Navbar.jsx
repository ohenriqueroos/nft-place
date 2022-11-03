import React from 'react';
import './Navbar.css';

import Logo from '../img/logo.svg';

const Navbar = () => {
  return ( 
    <div className="navbar-container">
      <a href="#">
        <img src={Logo} alt="" />
      </a>
      <div className="navbar-links">
        <a href="#">Início</a>
        <a href="#">NFTs</a>
        <a href="#">Sobre</a>
      </div>
      <button className="btn-primary">Entrar</button>
    </div>
   );
}
 
export default Navbar;