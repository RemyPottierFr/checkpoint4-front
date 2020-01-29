import React from 'react';
import './Artists.css';
import Slider from "react-slick";

export default function Artists() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="Artists">
      <p className="Artists__title">Our company</p>
      <Slider {...settings} className="Artists__slider">
        <div>
          <img src="/images/elChovito.jpg" className="Artists__slider-image" />
          <div className="Artists__slider--desc">
            <p></p>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  )
}
