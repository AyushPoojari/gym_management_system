import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import media1 from './images/media1.png';
import media2 from './images/media2.png';
import media3 from './images/media3.png';


function Slider() {
  return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={media2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Sweat It Out</h1>
          <p>At gold's gym</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={media1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Gold's Gym App</h1>
          <p>Download Now from Playstore.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={media3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Start your journey now</h3>
          <p>
            Exclusive Offers! 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;