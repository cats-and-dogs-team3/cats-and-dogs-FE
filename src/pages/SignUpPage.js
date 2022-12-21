import React from "react";
import Layout from "../components/Layout";
import SignUpForm from "../components/signUp/SignUpForm";

const SignUpPage = () => {
  return (
    <Layout wd={"1200"} isSignUp={true}>
      <SignUpForm />
    </Layout>
  );
};

export default SignUpPage;
