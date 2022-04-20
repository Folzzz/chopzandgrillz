import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'

// import './findus.css'

const FindUs = () => (
  <section className='app__bg app__wrapper section__padding' id='contact'>

    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lodge way, Kingston street Alabama</p>
        <p className="p__cormorant" style={{ color: '#dcca87', margin: '2rem 0rem'}}>Opening Hours</p>
        <p className="p__opensans">Mon -Fri: 10:00am - 02:00pm</p>
        <p className="p__opensans">Sat - Sun:  12:00pm - 04:00pm</p>
      </div>
      <button className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.grills2} alt="contact" />
    </div>
  </section>
);

export default FindUs;
