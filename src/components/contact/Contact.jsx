import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contacts-page'>
      <NavBar />
      <main className='contacts-page__main'>
        <h1>Contact me</h1>
        <div className='contacts-page__container'>
          <div className='contacts-page__links'></div>
          <p className='contacts-page__para'>
            Find more of my work here on GitHub, just click on the kitty!
          </p>
          <div className='contacts-page__links'></div>
          <p className='contacts-page__para'>
            LinkedIn: Click the image to see my profile
          </p>
          <div className='contacts-page__links'></div>
          <p className='contacts-page__para'>
            Email: lussa@hotmail.co.uk Or just click the envelope
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
