import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <header className='navbar'>
        <img
          className='navbar__image'
          src={'../../assets/images/portfolio-banner-bats.jpg'}
          alt='Banner bats'
        />
        <nav>
          <div className='navbar__links'>Home</div>
          <div className='navbar__links'>About</div>
          <div className='navbar__links'>Projects</div>
          <div className='navbar__links'>Contact</div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
