import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { supportDeviceSize } from "../../shared/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { Wrap, Button, Card, Stack, Img } from "../ui/index";
import { useDispatch, useSelector } from "react-redux";
import SignUpFooter from "./SignUpFooter";
import { $signUp } from "../../dataManager/myQueries";

import {
  __typeEmail,
  __typeUsername,
  __typeNickname,
  __typePassword,
  __typePasswordCheck,
  __showPwd,
  __showPwdCheck,
} from "../../redux/modules/signUpSlice";
import {
  check,
  closedEye,
  humanLogo,
  lockLogo,
  logo,
  openEye,
  postLogo,
  settingLogo,
  xMark,
} from "../../asset/signUp";

//하단 메세지

const UserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameState = useSelector((state) => state.signUp.username);
  const emailState = useSelector((state) => state.signUp.email);
  const nicknameState = useSelector((state) => state.signUp.nickname);
  const passwordState = useSelector((state) => state.signUp.password);
  const passwordCheckState = useSelector((state) => state.signUp.passwordCheck);

  const [isPasswordUnMatched, setIsPasswordUnMatched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputReadOnlyState, setInputReadOnly] = useState({
    usernameInput: false,
    nicknameInput: true,
    emailInput: true,
    passwordInput: true,
    passwordCheckInput: true,
  });

  //유효성 체크
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid &&
          nicknameState.isValid &&
          usernameState.isValid &&
          passwordState.isValid &&
          passwordCheckState.isValid &&
          isPasswordUnMatched === false
      );
      setInputReadOnly((prev) => {
        return {
          ...prev,
          nicknameInput: !usernameState.isValid,
          emailInput: !nicknameState.isValid,
          passwordInput: !emailState.isValid,
          passwordCheckInput: !passwordState.isValid,
        };
      });
      setIsPasswordUnMatched(
        passwordState.value !== passwordCheckState.value &&
          passwordCheckState.value.length > 7
      );
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [
    emailState.isValid,
    usernameState.isValid,
    nicknameState.isValid,
    passwordState.isValid,
    passwordCheckState.isValid,
    passwordState.value,
    passwordCheckState.value,
    isPasswordUnMatched,
  ]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        dispatch(__typeUsername(value));
        return;
      case "email":
        dispatch(__typeEmail(value));
        return;
      case "password":
        dispatch(__typePassword(value));
        return;
      case "passwordCheck":
        dispatch(__typePasswordCheck(value));
        return;
      case "nickname":
        dispatch(__typeNickname(value));
        return;
      default:
        return;
    }
  };

  //회원가입 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = {
      username: usernameState.value,
      email: emailState.value,
      password: passwordState.value,
      nickname: nicknameState.value,
    };
    console.log(form, "form");
    $signUp({
      username: usernameState.value,
      email: emailState.value,
      password: passwordState.value,
      nickname: nicknameState.value,
    })
      .then((data) => {
        data.statusCode === 200 ? navigate("/sign-in") : alert(data.msg);
      })
      .catch((err) => console.log("err", err.response.data));
  };
  //jsx
  const messages = {
    emailInvalid: "이메일 형식이 맞지 않습니다.",
    usernameInvalid:
      "아이디 형식이 맞지 않습니다. 아이디는 4자리 이상, 10자리 이하의 소문자와 숫자 조합을 사용해주세요.",
    passwordInvalid:
      "비밀번호 형식이 맞지 안습니다. 8자리 이상, 15자리 이하의 영어 대,소문자, 숫자, 특수문자(!@#$%^&+=)를 사용해 주세요.",
    passwordNotMatching: "비밀번호가 일치하지 않습니다.",
  };
  return (
    <Fragment>
      <Stack direction="column">
        <Wrap style={{ marginTop: "2rem" }}>
          <Img wd="23rem" hg="18.5rem" src={logo} />
          <p className="intro"> 😸 멍냥의 전당에 오신것을 환영합니다 🐶 </p>
          {/* form start */}
          <form onSubmit={onSubmitHandler}>
            <Stack gap="1rem">
              {/* 유저 아이디  */}
              <Card>
                <Img className="leftLogo" src={settingLogo} />
                <StInput
                  value={usernameState.value}
                  name="username"
                  onChange={onChangeHandler}
                  placeholder="아이디를 입력해주세요"
                ></StInput>
                {usernameState.value.length === 0 ? null : (
                  <Img
                    className="rightLogo"
                    src={usernameState.isValid ? check : xMark}
                  />
                )}
              </Card>
              {/* 유저 닉네임 */}
              <Card>
                <Img className="leftLogo" src={humanLogo} />
                <StInput
                  readOnly={inputReadOnlyState.nicknameInput}
                  value={nicknameState.value}
                  name="nickname"
                  onChange={onChangeHandler}
                  placeholder="닉네임을 입력해주세요"
                ></StInput>
                {nicknameState.value.length === 0 ? null : (
                  <Img
                    className="rightLogo"
                    src={nicknameState.isValid ? check : xMark}
                  />
                )}
              </Card>
              {/* 유저 이메일 */}
              <Card>
                <Img className="leftLogo" src={postLogo} />
                <StInput
                  readOnly={inputReadOnlyState.emailInput}
                  value={emailState.value}
                  onChange={onChangeHandler}
                  name="email"
                  placeholder="이메일을 입력해주세요"
                ></StInput>
                {emailState.value.length === 0 ? null : (
                  <Img
                    className="rightLogo"
                    src={emailState.isValid ? check : xMark}
                  />
                )}
              </Card>
              {/* 유저 패스워드 */}
              <Card style={{ cursor: "pointer" }}>
                <Img className="leftLogo" src={lockLogo} />
                <StPwdInput
                  readOnly={inputReadOnlyState.passwordInput}
                  value={passwordState.value}
                  type={passwordState.isShown ? "text" : "password"}
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onChangeHandler}
                ></StPwdInput>
                {passwordState.value.length === 0 ? null : (
                  <Stack direction="row">
                    {/* 패스워드 보기 / 안보기 */}
                    <Img
                      onClick={() => dispatch(__showPwd())}
                      style={{ cursor: "pointer" }}
                      className="rightLogo"
                      src={passwordState.isShown ? closedEye : openEye}
                    />
                    {/* 패스워드 유효성 검사 */}
                    <Img
                      className="rightLogo"
                      src={passwordState.isValid ? check : xMark}
                    />
                  </Stack>
                )}
              </Card>
              {/* 유저 패스워드 체크 */}
              <Card>
                <Img className="leftLogo" src={lockLogo} />
                <StPwdInput
                  readOnly={inputReadOnlyState.passwordCheckInput}
                  value={passwordCheckState.value}
                  type={passwordCheckState.isShown ? "text" : "password"}
                  name="passwordCheck"
                  placeholder="비밀번호를 확인해주세요"
                  onChange={onChangeHandler}
                ></StPwdInput>
                {passwordCheckState.value.length === 0 ? null : (
                  <Stack styled={{ marginRight: "4rem" }} direction="row">
                    {/* 패스워드 보기 / 안보기 */}
                    <Img
                      onClick={() => dispatch(__showPwdCheck())}
                      className="rightLogo"
                      style={{ cursor: "pointer" }}
                      src={passwordCheckState.isShown ? closedEye : openEye}
                    />
                    {/* 패스워드 체크 여부 */}
                    {passwordCheckState.length < 8 ? null : (
                      <Img
                        className="rightLogo"
                        src={isPasswordUnMatched ? xMark : check}
                      />
                    )}
                  </Stack>
                )}
              </Card>
              <Button
                type="submit"
                disabled={!formIsValid}
                mg="1.2rem 0"
                color={`var(--color-white)`}
                background={
                  formIsValid
                    ? `var(--color-primary)`
                    : `var(--color-primary-invalid)`
                }
              >
                가입
              </Button>
              <Card hg="auto" borderColor="none">
                <span className="alert">
                  {!usernameState.isValid && usernameState.value !== ""
                    ? messages.usernameInvalid
                    : !emailState.isValid && emailState.value !== ""
                    ? messages.emailInvalid
                    : !passwordState.isValid && passwordState.value !== ""
                    ? messages.passwordInvalid
                    : isPasswordUnMatched
                    ? messages.passwordNotMatching
                    : ""}
                </span>
              </Card>
            </Stack>
          </form>
        </Wrap>
        <SignUpFooter />
      </Stack>
    </Fragment>
  );
};

export default UserForm;

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
  .intro {
    color: var(--color-light-gray);
    margin: 3rem 0;
  }
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
  .login {
    font-weight: 600;
    & > span {
      color: var(--color-primary);
    }
    margin: 1rem 0;
  }
  .alert {
    margin: 0 1rem;
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
const StInput = styled.input.attrs({ maxLength: "25" })`
  font-weight: 500;
  :focus {
    outline: none;
  }
  border: none;
  flex-grow: 1;
  margin-right: 0.2rem;
`;
const StPwdInput = styled(StInput).attrs({ maxLength: "15" })`
  width: 5rem;
  flex-grow: 1;
`;
