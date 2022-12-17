import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/main/Slider";
import RankingBar from "../components/main/RankingBar";
import Ranking from "../components/main/Ranking";
import PostList from "../components/main/PostList";
const MainPage = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <RankingBar />
        <Ranking />
        <PostList />
      </Layout>
    </div>
  );
};

export default MainPage;
