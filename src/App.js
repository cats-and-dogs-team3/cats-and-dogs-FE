import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import { useDispatch } from "react-redux";
import { __getNickName } from "./redux/modules/nickNameSlice";
import { $getToken } from "./dataManager/myQueries";

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
