import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import UploadPost from "../pages/UploadPost";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:postId" element={<Detail />} />
          <Route path="/upload" element={<UploadPost />} />
          <Route path="/update/:postId" element={<UploadPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
