import React from 'react';

import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Lodge way, Kingston street Alabama</p>
        <p className="p__opensans">+234 (0)81 1975 0870</p>
        <p className="p__opensans">+234 (0)81 1975 0870</p>
      </div>

      <div className="app__footer-links_logo">

        <p className='app__navbar-logo_p' style={{ marginBottom: '0.75rem' }}> <span className='app__navbar-logo-effect1'>chopz</span>N<span className='app__navbar-logo-effect2'>grillz</span></p>
        <p className='p__opensans'>There is freedom when the entire being, the superficial as well as the hidden, is purged of the past.</p>
        <img src={images.spoon} classNmae='spoon__img' style={{ marginTop: 15 }} alt="spoon" />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>

      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">10:00am - 02:00pm</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">12:00pm - 04:00pm</p>
      </div>

    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> 2022 ChopsNGrills. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
