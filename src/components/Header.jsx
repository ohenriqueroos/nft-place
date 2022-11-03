import React from 'react';
import './Header.css';

import Navbar from './Navbar';
import Statue from '../img/estatua.png';

const Header = () => {
  return ( 
    <div className="header-container">
      <Navbar />
      <div className="header">
        <div className="header-action">
          <h1>Suas NFTs em um só lugar.</h1>
          <div className="header-register">
            <span>Cadastre-se e comece <strong>hoje</strong> a sua coleção.</span>
            <button className="btn-primary">Cadastre-se</button>
          </div>
        </div>
        <div className="header-picture">
          <img src={Statue} alt="" />
        </div>
      </div>
    </div>
   );
}
 
export default Header;