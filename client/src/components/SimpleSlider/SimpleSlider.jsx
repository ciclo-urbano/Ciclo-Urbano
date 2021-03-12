import './SimpleSlider.css';
import BikeCard from '../BikeCard/BikeCard';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBikes } from '../../services/bikes';
import { useEffect, useState } from 'react';

export default function SimpleSlider() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const bikes = await getBikes();
      setBikes(bikes)
    }
    fetchBikes();
  }, [])
  
  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      };
  return (
    <Slider className="slider" {...settings}>
      {bikes.reverse().map((bike, index) =>
        index < 5 ?
          <div key={index} className="carousel">
            <BikeCard id={bike._id} model={bike.model} imageURL={bike.imageURL}  />
            </div>
          : null)}
    </Slider>
  );
}