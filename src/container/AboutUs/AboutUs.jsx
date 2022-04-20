import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className="app__aboutus-overlay flex__center">
      <img src={images.cg2} alt="letter g" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className="p__opensans">One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knifefork2sm} alt="knife and fork" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img' />
        <p className="p__opensans">Where else can you get western food of such quality and sincerity behind all the preparation in a casual setting? At Chops and Grills</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
