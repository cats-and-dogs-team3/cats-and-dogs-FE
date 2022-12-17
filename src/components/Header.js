import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Sbutton from "./ui/Sbutton";


const Header = () => {
  let isUserLogin = false;
  const navigate = useNavigate();
  return (
    <Container>
      <MainTitle
        onClick={() => {
          navigate("/");
        }}
      >
        멍냥의 전당 🐾
      </MainTitle>
      <span>
        {isUserLogin
          ? "항해99 집사님 환영합니다 😸"
          : "멍멍 ! 로그인을 해주세요 주인님 ! 🐶"}
      </span>
      <Sbutton mg='0 0 0 2rem'>{isUserLogin ? "로그아웃" : "로그인"}</Sbutton>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: var(--color-point1);
  padding: 3rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const MainTitle = styled.div`
  color: var(--color-point4);
  font-size: 2.4rem;
  font-weight: 900;
  flex:1;
  cursor: pointer;

`;
