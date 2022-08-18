import React from 'react';
import './Contact.scss';
import kitty from '../../assets/images/icons8-github.gif';
import linkedIn from '../../assets/images/linkedin-icon-19.png';
import email from '../../assets/images/email.png';

const Contact = () => {
  return (
    <div className='contacts-page'>
      <main className='contacts-page__main'>
        <h1>Contact me</h1>
        <div className='contacts-page__container'>
          <div className='contacts-page__links'>
            <img src={kitty} />
          </div>
          <p className='contacts-page__para'>
            Find more of my work here on GitHub, just click on the kitty!
          </p>
          <div className='contacts-page__links'>
            <img src={linkedIn} />
          </div>
          <p className='contacts-page__para'>
            LinkedIn: Click the image to see my profile
          </p>
          <div className='contacts-page__links'>
            <img src={email} />
          </div>
          <p className='contacts-page__para'>
            Email: lussa@hotmail.co.uk Or just click the envelope
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
