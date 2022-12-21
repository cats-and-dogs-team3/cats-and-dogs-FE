import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <StyledLogin>
      <div className="left">
        <video src="img/logo.mp4" autoPlay muted loop></video>
        <p>Join us to show your baby pets!</p>
      </div>
      <div className="right">
        <div className="login_box">
          <div className="input_box">
            <div>
              <img src="img/login.webp"></img>
              <input type="text"></input>
            </div>
            <div>
              <img src="img/login.webp"></img>
              <input type="password"></input>
            </div>
          </div>
          <div className="button_box">
            <div>
              <button>KaKao</button>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                로그인
              </button>
            </div>
            <div>
              <button>회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
}
const StyledLogin = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  margin: 0;
  display: flex;
  .left {
    width: 65%;
    background-size: cover;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  .left p {
    color: white;
    position: absolute;
    top: 400px;
    font-size: 50px;
  }
  .logo_text {
    display: flex;
    margin-top: 50%;
    font-size: xx-large;
    color: white;
  }

  .right {
    width: 35%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-point1);
  }
  .login_box {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 100px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 0.8;
  }
  input {
    width: 250px;
    height: 30px;
    border: none;
  }

  img {
    width: 30px;
    height: 30px;

    margin-top: 20px;
  }

  button {
    width: 200px;
    height: 25px;
    margin-bottom: 10px;
    color: black;
    background: var(--color-point2);
    border: none;
  }
  button:hover {
    background: var(--color-point4);
    color: var(--color-point1);
  }
`;
export default Login;
