import React, { useRef, useState } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Gallery.css';

const imagesArray = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04 ];

const Gallery = () =>{ 
  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef();

  const handleScroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  
  return (
    <section className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>One night the previous summer, I’d driven to meet a friend at an art gallery in Hollywood, my first visit to a gallery in years.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>

          {
            imagesArray.map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index}`}>
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon' />
              </div>
            ))
          }

        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => handleScroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => handleScroll('right')} />
        </div>

      </div>
    </section>
  )
};

export default Gallery;
