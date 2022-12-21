import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getNickName } from "./redux/modules/nickNameSlice";
import { $getToken } from "./dataManager/myQueries";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  if ($getToken()?.startsWith("bearer")) {
    dispatch(__getNickName());
  }
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
