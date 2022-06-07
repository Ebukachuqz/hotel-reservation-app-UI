import React from "react";
import Slider from "react-slick";
import Card from "./Card";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5.1,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      },
    },
  ],
};

const CardSlide = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Slider>
    </div>
  );
};

export default CardSlide;
