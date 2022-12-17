import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HeaderLogin(props) {
  let stateLogin = true;
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
  width: inherit;
  height: 80px;
  display: flex;
  justify-content: center;
  background: var(--color-point1);

  .title {
    width: 70%;
    height: calc(inherit-15);
    background: var(--color-point1);
    font-size: 4.8rem;
  }
`;
const StyledHeaderLogin = styled.div`
  width: 20%;
  height: calc(inherit-20);
  background: var(--color-point1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 20px;
  gap: 15px;
  font-size: 2.4rem;
  .button_box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .button_box button {
    font-size: 2rem;
    background: var(--color-point3);
  }
`;
