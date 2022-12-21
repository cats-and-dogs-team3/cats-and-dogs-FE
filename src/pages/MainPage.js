import React from "react";
import Layout from "../components/Layout";
import MainSlider from "../components/main/MainSlider";
import RankingBar from "../components/main/RankingBar";
import Ranking from "../components/main/Ranking";
import PostList from "../components/main/PostList";
import { __getNickName } from "../redux/modules/nickNameSlice";
import { $getToken } from "../dataManager/myQueries";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch()
  if($getToken() !== null ){
    dispatch(__getNickName())
  }
  return (
    <div>
      <Layout>
        <MainSlider />
        <RankingBar />
        <Ranking />
        <PostList />
      </Layout>
    </div>
  );
};

export default MainPage;
