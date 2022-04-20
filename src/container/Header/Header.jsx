import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <>
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='A Taste Of Satisfaction' />
        <h1 className="app__header-h1">Small Chops and Grills At It's Best</h1>
        <p className="p__opensans" style={{ margin: `2rem 0`}}>Chopz n grillz is a finger food outlet catering for indoor and outdoor events .We provide freshly made and health consuming small chops and all types of grill.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.grills1} alt="header" />
      </div>

    </div>
  </>
);

export default Header;
