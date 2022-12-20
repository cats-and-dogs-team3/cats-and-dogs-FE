import React from 'react'
import Layout from "../components/Layout";
import SignInForm from '../components/login/SignInForm';

const SignInPage = () => {
  return (
    <Layout wd={"1200"} isSignUp={true}>
      <SignInForm />
    </Layout>
  )
}

export default SignInPage