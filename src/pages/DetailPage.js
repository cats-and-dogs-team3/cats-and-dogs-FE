import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Detail from "../components/detail/Detail";

const DetailPage = () => {
  return (
    <div>
      <Layout wd={'110rem'}>
        <Detail />
      </Layout>
    </div>
  );
};

export default DetailPage;
