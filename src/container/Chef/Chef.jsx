import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chefgirl} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title='Word From The Kitchen' />
      <h1 className="headtext__cormorant">Our Believe</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Somewhere between Iron chef and Top chef, eating has become a game you can win, both as skilled cook and as outspoken critic.</p>
        </div>
        <p className="p__opensans">And one trend in particular: I don't even know what to make it, but on the menu at the bottom they are listing the chef, the sous chef, the pastry chef, and the forager.</p>
      </div>
      <div className="app__chef-sign">
        <p>Ari Queen</p>
        <p className="p__opensans">Chef &amp; Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
