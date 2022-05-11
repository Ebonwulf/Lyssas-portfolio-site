import React from 'react';
import LinkComponent from '../../components/LinkComponent/LinkComponent';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <header className='navbar'>
        <div className='navbar__image'></div>
        <nav>
          <LinkComponent linkText={'Home'} />
          <LinkComponent linkText={'About'} />
          <LinkComponent linkText={'Projects'} />
          <LinkComponent linkText={'Contact'} />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
