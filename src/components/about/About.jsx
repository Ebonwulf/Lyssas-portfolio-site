import React from 'react';
import NavBar from '../../containers/navbar/NavBar';
import './About.scss';

const About = () => {
  return (
    <div className='about-page'>
      <NavBar />
      <main className='about-page__main'>
        <h1 className='about-page__heading'>All about me</h1>
        <div className='about-page__text-box'>
          <h2>General Knowledge</h2>
          <p>
            I'm a hard working person and I am always eager for a challenge. I
            have a great many hobbies, including: knitting, leatherwork,
            embroidery and jigsaw puzzles - just to name a few. I love reading,
            playing computer games with my friends and baking with my children
            in my spare time.
          </p>
          <h2>Experience</h2>
          <p>
            I am currently part of a full-time, 12-week Software Development
            program at _nology, gaining hands-on experience in: JavaScript
            (ES6), React, figma, SCSS, HTML, Java and more. I have also studied
            several Udemy online courses including: 2D game development using C#
            with unity, compTia A+ and Python.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
