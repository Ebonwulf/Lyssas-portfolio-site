import React from 'react';
import './Contact.scss';
import kitty from '../../assets/images/icons8-github.gif';
import linkedIn from '../../assets/images/linkedin-icon-19.png';
import email from '../../assets/images/email.png';

const Contact = () => {
  return (
    <div className='contacts-page'>
      <h1>Contact me</h1>
      <div className='contacts-page__container'>
        <div className='contacts-page__div'>
          <a
            className='contacts-page__links'
            href='https://github.com/Ebonwulf'>
            <img src={kitty} alt='' />
          </a>
          <p className='contacts-page__para'>
            Find more of my work here on GitHub, just click on the kitty!
          </p>
        </div>
        <div className='contacts-page__div'>
          <a
            className='contacts-page__links'
            href='https://www.linkedin.com/in/lyssa-jean-corlett-5a3805204/'>
            <img src={linkedIn} alt='' />
          </a>
          <p className='contacts-page__para'>
            LinkedIn: Click the image to see my profile
          </p>
        </div>
        <div className='contacts-page__div'>
          <a className='contacts-page__links' href='lussa@hotmail.co.uk'>
            <img src={email} alt='' />
          </a>
          <p className='contacts-page__para'>
            Email: lussa@hotmail.co.uk Or just click the envelope
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
