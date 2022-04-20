import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="laurel" />
    <div className="app__laurela_awards-card_content">
      <p className="p__cormorant" style={{ color: '#dcca87' }}>
        {title}
      </p>
      <p className="p__cormorant">
        {subtitle}
      </p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='award'>

    <div className="app__wrapper_info">
      <SubHeading title='Awards / Recognition' />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {
          data.awards.map((award, i) => (
            <AwardCard award={award} key={award.title} />
          ))
        }
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>

  </div>
);

export default Laurels;
