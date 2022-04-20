import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants';

import './Navbar.css';

const Menu = ({ specificClass }) => (
  <>
    <ul className={specificClass}>
      <li className='p__opensans'>
        <a href="#home">Home</a>
      </li>
      <li className='p__opensans'>
        <a href="#about">About</a>
      </li>
      <li className='p__opensans'>
        <a href="#menu">Menu</a>
      </li>
      <li className='p__opensans'>
        <a href="#award">Accolades</a>
      </li>
      <li className='p__opensans'>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>

      <nav className='app__navbar'>

        <div className="app__navbar-logo">
          <p className='app__navbar-logo_p'> <span className='app__navbar-logo-effect1'>chopz</span>N<span className='app__navbar-logo-effect2'>grillz</span></p>
        </div>

        <Menu specificClass='app__navbar-links'/>

        <div className="app__navbar-login">
          <a href="#login" className='p__opensans'>Specials</a>
          <div />
          <a href="/" className='p__opensans'>Place Order</a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
          {
            toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                <Menu specificClass='app__navbar-smallscreen_links'/>
              </div>
            )
          }
          
        </div>

      </nav>

    </div>
  )
};

export default Navbar;
