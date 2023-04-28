import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'


function Header(props) {
  return (
      <header className='header'>
          <img className='header__image' src={logo} alt='logo' />
          <h1 className='header__title'> New Social Network</h1>

          <div className='header__auth'>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            
          </div>
      </header>
    
  );
}

export default Header;