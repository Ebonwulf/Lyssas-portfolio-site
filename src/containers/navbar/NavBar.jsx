import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <header className='navbar'>
        <div className='navbar__image'></div>
        <nav>
          <Link className='navbar__item' to={'/'}>
            Home
          </Link>
          <Link className='navbar__item' to={'/about'}>
            About
          </Link>
          <Link className='navbar__item' to={'/projects'}>
            Projects
          </Link>
          <Link className='navbar__item' to={'/contact'}>
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
