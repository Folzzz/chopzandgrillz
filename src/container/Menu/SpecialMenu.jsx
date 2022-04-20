import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>

    <div className="app__specialMenu-title">
      <SubHeading title='Menu Specific For You' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Chops &amp; Pasteries</p>
        <div className="app__specialMenu-menu_items">
          {
            data.chops.map(( chop, i ) => (
              <MenuItem key={chop.title + i} title={chop.title} price={chop.price} tags={chop.tags} />
            ))
          }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.grilling} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Grills &amp; Extras</p>
        <div className="app__specialMenu-menu_items">
          {
            data.grills.map(( grill, i ) => (
              <MenuItem key={grill.title + i} title={grill.title} price={grill.price} tags={grill.tags} />
            ))
          }
        </div>
      </div>

    </div>
    
    <div style={{ marginTop: '15px',}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
