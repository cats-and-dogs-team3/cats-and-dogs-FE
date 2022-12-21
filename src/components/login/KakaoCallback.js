import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { $kakaoLogin, $submitForm } from "../../dataManager/myQueries";
const KakaoCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const urlParams = url.searchParams.get("code");
  $kakaoLogin(urlParams).then((res) => {
    console.log("res", res.statusCode);
    if (res.statusCode === 200) {
      if (res.data !== null && res.data.startsWith("bearer")) {
        localStorage.setItem("jwt", res.data);
        navigate("/");
      }
    } else {
      alert(res.msg);
    }
    console.log(res);
  });

  return <div>hi</div>;
};
export default KakaoCallback;
