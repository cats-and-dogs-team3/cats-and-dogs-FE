import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import UploadPostPage from "../pages/UploadPostPage";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:postId" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/upload" element={<UploadPostPage />} />
          <Route path="/update/:postId" element={<UploadPostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
