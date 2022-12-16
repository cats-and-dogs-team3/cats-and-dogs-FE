import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HeaderLogin(props) {
  let stateLogin = false;
  let propsvalue = "userID";
  if (stateLogin === false) {
    return (
      <StyledHeaderLogin>
        <div className="state_box">빨리 로그인을 해주세욧</div>
        <div className="button_box">
          <button>로그인</button>
        </div>
      </StyledHeaderLogin>
    );
  } else {
    return (
      <StyledHeaderLogin>
        <div className="state_box">{propsvalue}님 환영합니다.</div>
        <div className="button_box">
          <button>상태보기</button>
          <button>로그아웃</button>
        </div>
      </StyledHeaderLogin>
    );
  }
}
function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div
        className="title"
        onClick={(e) => {
          navigate("/");
        }}
      >
        개냥의 전당
      </div>
      <HeaderLogin></HeaderLogin>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;

  .title {
    width: 70%;
    height: calc(inherit-15);
    background: var(--color-point1);
    padding: 10px;
    font-size: 30px;
  }
`;
const StyledHeaderLogin = styled.div`
  width: 20%;
  height: calc(inherit-15);
  background: var(--color-point1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 15px;
  gap: 15px;

  .button_box {
    display: flex;
    flex-direction: column;
  }
`;
