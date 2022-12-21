import Router from "./shared/Router";
import GlobalStyle from './shared/GlobalStyle'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getNickName } from "./redux/modules/nickNameSlice";
import { $getToken } from "./dataManager/myQueries";

function App() {

  const dispatch = useDispatch()
  $getToken() && dispatch(__getNickName())

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
