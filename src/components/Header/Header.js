import React from 'react';
import logo from '../../images/logo.png'


function Header() {
  return (
      <header className='header'>
          <img className='header__image' src={logo} alt='logo' />
          <h1 className='header__title'> New Social network</h1>
      </header>
    
  );
}

export default Header;