import React, { useState, useEffect } from 'react';
import './Artists.css';
import Slider from "react-slick";
import axios from 'axios';

export default function Artists() {
  const [artists, setArtists] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    axios.get("/api/v1/artists")
      .then(res => setArtists(res.data))
  }, [])

  return (
    <div className="Artists">
      <p className="Artists__title">Our company</p>
      <Slider {...settings} className="Artists__slider">
        {
          artists && artists.map((artist => (
            <div className="Artists__slide" key={artist.name}>
              <img src={`/images/artists/${artist.image}.jpg`} className="Artists__slider-image" alt="Portait of an artist" />
              <div className="Artists__slider--desc">
                <p className="Artists__slider--desc-title">{artist.name}, {artist.age} yo</p>
                <div className="Slider__desc-type">
                  <img src={`/icons/${artist.type}.png`} className="Desc__type-icon" alt="Icon of artist" />
                  <span className="Desc__type-text">It's a/an <span>{artist.type}</span></span>
                </div>
                <p className="Slider__desc--text">{artist.description}</p>
              </div>
            </div>
          )
          ))
        }
      </Slider>
    </div>
  )
}
