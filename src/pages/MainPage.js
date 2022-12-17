import React from "react";
import Layout from "../components/Layout";
import MainSlider from "../components/main/MainSlider";
import RankingBar from "../components/main/RankingBar";
import Ranking from "../components/main/Ranking";
import PostList from "../components/main/PostList";
import { useEffect } from "react";

const MainPage = () => {
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
