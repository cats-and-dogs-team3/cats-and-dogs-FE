import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  chatLogo,
  check,
  lockLogo,
  logo,
  postLogo,
  xMark,
} from "../../asset/signUp/index";
import { useNavigate } from "react-router-dom";
import { Wrap, Button, Card, Stack, Img } from "../ui/index";
import { useDispatch, useSelector } from "react-redux";
import {
  __typePassword,
  __typeUsername,
  __showPwd,
} from "../../redux/modules/loginSlice";
import { closedEye, openEye } from "../../asset/signUp/index";
import { connectKakao } from "./func/functionsForLogin";
import SignUpFooter from "../signUp/SignUpFooter";
import { $login } from "../../dataManager/myQueries";

//하단 메세지
const messages = {
  idInvalid: `입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 
  사용자 이름을 확인하고 다시 시도하세요.`,
  pwdInvalid: "잘못된 비밀번호입니다. 다시 확인하세요.",
};
const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameState = useSelector((state) => state.login.username);
  const passwordState = useSelector((state) => state.login.password);

  const [formIsValid, setFormIsValid] = useState(false);

  //form 유효성 체크
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameState.isValid && passwordState.isValid);
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [usernameState.isValid, passwordState.isValid]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        dispatch(__typeUsername(value));
        return;
      case "pwd":
        dispatch(__typePassword(value));
        return;
      default:
        return;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    $login({
      username: usernameState.value,
      password: passwordState.value,
    }).then((data) => {
      localStorage.setItem('jwt',data.data)
      navigate('/')
      // data.statusCode===200 ? navigate('/') : alert(data.msg)
    }).catch(err => console.log(err))
  };
  const onClickKakaoLogin = () => {
    connectKakao();
  };

  return (
    <Fragment>
      <Stack direction="column">
      <Wrap style={{ marginTop: "2rem" }}>
          <Img
            style={{ margin: "2rem 0 0" }}
            wd="23rem"
            hg="18.5rem"
            src={logo}
          />
          <p style={{ margin: "3rem 0" }}>🐾 멍냥의 전당 🐾</p>
          <form style={{ margin: "0 0 1rem" }} onSubmit={onSubmitHandler}>
            <Stack gap="1rem">
              <Card>
                <Img className="leftLogo" src={postLogo} />
                <StInput
                  value={usernameState.value}
                  name="id"
                  onChange={onChangeHandler}
                  placeholder="아이디"
                ></StInput>
                {usernameState.value.length === 0 ? null : (
                  <Img
                    className="rightLogo"
                    src={usernameState.isValid ? check : xMark}
                  />
                )}
              </Card>
              <Card style={{ cursor: "pointer" }}>
                <Img className="leftLogo" src={lockLogo} />
                <StPwdInput
                  value={passwordState.value}
                  type={passwordState.isShown ? "text" : "password"}
                  name="pwd"
                  placeholder="비밀번호"
                  onChange={onChangeHandler}
                ></StPwdInput>
                {passwordState.value.length === 0 ? null : (
                  // <Stack styled={{ marginRight: "4rem" }} direction="row">
                  <Img
                    className="rightLogo"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(__showPwd())}
                    // className="check-img-pwd"
                    src={passwordState.isShown ? closedEye : openEye}
                  />
                )}
              </Card>
              <Stack mg="1.5rem 2.5rem" gap="1.2rem">
                <Button
                  type="submit"
                  disabled={!formIsValid}
                  color={`var(--color-white)`}
                  background={
                    formIsValid
                      ? `var(--color-primary)`
                      : `var(--color-primary-invalid)`
                  }
                >
                  로그인
                </Button>
                <span>or</span>
                <Button type="button" onClick={onClickKakaoLogin}>
                  <Img wd="1.8rem" hg="1.8rem" src={chatLogo} />
                  <span>카카오 로그인</span>
                </Button>
              </Stack>
              <Card hg="auto" direction="column" borderColor="none">
                <span style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
                  비밀번호를 잊으셨나요?
                </span>
              </Card>
            </Stack>
          </form>
        </Wrap>
        <SignUpFooter isLogin={true} />
      </Stack>
    </Fragment>
  );
};

export default SignInForm;

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  .leftLogo {
    margin: 0 1rem 0 1.5rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .rightLogo {
    margin: 0 1rem 0 0.3rem;
    width: 2rem;
    height: 2rem;
  }
  .alert {
    margin: 0 1rem;
    font-size: 1.3rem;
    text-align: center;
    color: red;
    font-weight: 600;
  }

  .check-img-pwd {
    margin: 0 0.3rem 0 0.3rem;
    width: 2rem;
    height: 2rem;
  }
  .pwd-alert {
    margin-right: 1rem;
    color: var(--color-black);
  }
`;
const StInput = styled.input.attrs({ maxLength: "20" })`
  font-weight: 500;
  :focus {
    outline: none;
  }
  border: none;
  flex-grow: 1;
  margin-right: 0.2rem;
`;
const StPwdInput = styled(StInput).attrs({ maxLength: "20" })`
  width: 5rem;
  flex-grow: 1;
`;
