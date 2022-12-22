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
          <h3>살려줘.. 자고싶어..</h3>
        </div>
        <div className="carousel2">
          <h3>노는게.. 제일좋아..</h3>
        </div>
        <div className="carousel3">
          <h3>앞으로.. 프론트엔드는 최소3명..주세요 ㅜ</h3>
        </div>
        <div className="carousel4">
          <h3>그렇게 해줄수 있잖아요 그쵸?</h3>
        </div>
        <div className="carousel5">
          <h3>아니라고 하지마요 제발 ㅠ.. </h3>
        </div>
      </StyledSlider>
    </div>
  );
}

export default MainSlider;
const StyledSlider = styled(Slider)`
  .slick-slide div {
    width: 160rem !important;
    height: 30rem;
    margin: 2rem auto;
    background-color: transparent;
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
  h3 {
    position: relative;
    color: white;
    top: 24rem;
    left: 25rem;
    font-size: 2.4rem;
  }

  .carousel1 {
    background: url("./img/cat1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 50%;
  }

  .carousel2 {
    background: url("./img/cat2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 30%;
  }

  .carousel3 {
    background: url("./img/kittens-g68ffc1a41_1920.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 40%;
  }

  .carousel4 {
    background: url("./img/cat-g84de19075_1920.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 60%;
  }

  .carousel5 {
    background: url("./img/puppy-g674c0d9a9_1280.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% 80%;
  }

  .carousel6 {
    background: url("https://previews.123rf.com/images/robuart/robuart1611/robuart161100243/67672904-%EC%A0%84%EB%AC%B8-%EA%B0%9C-%ED%9B%88%EB%A0%A8-%EB%B0%B0%EB%84%88%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%8B%A4%EB%A5%B8-%EC%9C%A0%ED%98%95-%EA%B0%95%EC%95%84%EC%A7%80%EC%9D%98-%EA%B7%B8%EB%A3%B9%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%80%EB%A1%9C-%ED%85%9C%ED%94%8C%EB%A6%BF%EC%9E%85%EB%8B%88%EB%8B%A4-%EA%B0%9C-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%94%8C%EB%9E%AB-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%97%90%EC%84%9C-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%EB%A7%8C%ED%99%94-%EA%B0%9C-%EC%BA%90%EB%A6%AD%ED%84%B0-%EC%95%A0%EC%99%84%EC%9A%A9-%EB%8F%99%EB%AC%BC.jpg");
  }
`;
