import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <div className="carousel1">
          <h3>1</h3>
        </div>
        <div className="carousel2">
          <h3>2</h3>
        </div>
        <div className="carousel3">
          <h3>3</h3>
        </div>
        <div className="carousel4">
          <h3>4</h3>
        </div>
        <div className="carousel5">
          <h3>5</h3>
        </div>
        <div className="carousel6">
          <h3>6</h3>
        </div>
      </StyledSlider>
    </div>
  );
}

export default MainSlider;
const StyledSlider = styled(Slider)`
  .slick-slide div {
    width: 100%;
    height: 20rem;
    margin: 0 auto;
    background-color: black;
  }

  .slick-prev:before {
    position: absolute;
    left: -2.3rem;
  }
  .slick-next:before {
    margin-right: 4rem;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 4rem;
    line-height: 1;
    opacity: 0.75;
    color: var(--color-point4);
    -webkit-font-smoothing: antialiased;
  }

  .carousel1 {
    background: url("https://interactive.hankookilbo.com/v/pet_in_corona/img/ogimage.jpg");
    background-position: top 300px;
  }
`;
