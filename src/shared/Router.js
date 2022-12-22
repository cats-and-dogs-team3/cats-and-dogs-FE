import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import SignUpPage from "../pages/SignUpPage";
import KakaoCallback from "../components/login/KakaoCallback";
import SignInPage from "../pages/SignInPage";
import EditPage from '../pages/EditPage'
import UploadPostPage from '../pages/UploadPostPage'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:postId" element={<DetailPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/upload" element={<UploadPostPage />} />
          <Route path="/edit/:postId" element={<EditPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/kakaoCallback" element={<KakaoCallback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
