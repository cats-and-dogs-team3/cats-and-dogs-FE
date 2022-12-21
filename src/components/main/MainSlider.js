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
          <h3>
            당신은 네모네모 멈뭄미와 눈이 마주쳤습니다. 담심음이제 돔그람 글자를
            칠수멈슴니다 멈멈
          </h3>
        </div>
        <div className="carousel2">
          <h3></h3>
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
    top: 15rem;
    left: 25rem;
    font-size: 2.4rem;
  }

  .carousel1 {
    background: url("https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/petzzi/20210525052241977eizj.jpg");
    background-position: top 500px;
  }

  .carousel2 {
    background: url("https://i3.ruliweb.com/img/17/12/15/16058081b5b4aa5ac.png");
  }

  .carousel3 {
    background: url("https://images.mypetlife.co.kr/content/uploads/2020/04/09150916/%EB%A7%9D%EA%B3%A0%EB%84%A4-%EB%B0%B0%EB%84%88.png");
    object-fit: contain;
  }

  .carousel4 {
    background: url("https://nebalro.kr/wp-content/uploads/2021/01/%EB%84%A4%EB%B0%9C%EB%A1%9C-%EB%B0%B0%EB%84%88-1.png");
  }

  .carousel5 {
    background: url("image.png");
  }

  .carousel6 {
    background: url("https://previews.123rf.com/images/robuart/robuart1611/robuart161100243/67672904-%EC%A0%84%EB%AC%B8-%EA%B0%9C-%ED%9B%88%EB%A0%A8-%EB%B0%B0%EB%84%88%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8C%8C%EB%9E%80%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%8B%A4%EB%A5%B8-%EC%9C%A0%ED%98%95-%EA%B0%95%EC%95%84%EC%A7%80%EC%9D%98-%EA%B7%B8%EB%A3%B9%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%80%EB%A1%9C-%ED%85%9C%ED%94%8C%EB%A6%BF%EC%9E%85%EB%8B%88%EB%8B%A4-%EA%B0%9C-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%94%8C%EB%9E%AB-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%97%90%EC%84%9C-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%EB%A7%8C%ED%99%94-%EA%B0%9C-%EC%BA%90%EB%A6%AD%ED%84%B0-%EC%95%A0%EC%99%84%EC%9A%A9-%EB%8F%99%EB%AC%BC.jpg");
  }
`;
