import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container pt-14">
      <Slider {...settings}>
        <div>
          <StyledImage
            src="/svgs/doctors.jpg"
            alt="doctor"
            width={400}
            height={400}
          />
        </div>
        <div>
          <StyledImage
            src="/svgs/operation.jpg"
            alt="doctor"
            width={400}
            height={400}
          />
        </div>
        <div>
          <StyledImage
            src="/svgs/baby.jpg"
            alt="doctor"
            width={400}
            height={400}
          />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;

const StyledImage = styled(Image)`
  margin: 0 auto;
  padding: 0 15px;
`;
