'use client'
import React, { useState } from 'react';
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='Menu'>
      <img src="./images/logo/logo.png" alt="Logo"></img>
      <img onClick={toggleMenu} src="./images/logo/hamburger.png" alt="Menu" />
      <div className={showMenu ? 'Menu_hamburger show' : 'Menu_hamburger'}>
        <div onClick={toggleMenu} className='closed_menu'><img src="./images/logo/close.png"></img></div>
        <p>PRÉSENTATION</p>
        <p>PRESTATIONS & SERVICES</p>
        <p>LA TEAM</p>
        <p>RÉSERVATIONS</p>
        <p>CONTACT</p>
      </div>
    </div>
  );
}

export default Header;
