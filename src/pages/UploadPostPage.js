import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
const UploadPostPage = () => {
  return (
    <Layout>
      <StyledUploadPage>
        <h1>테스트용 입니다.</h1>
        <div>
          <label>제목:</label>
          <input type="text"></input>
        </div>
        <div>
          <label>내용:</label>
          <textarea></textarea>
        </div>
        <div>
          <label>파일첨부</label>
          <input type="text"></input>
        </div>
      </StyledUploadPage>
    </Layout>
  );
};
export default UploadPostPage;

const StyledUploadPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 600px;
  }
  textarea {
    width: 600px;
    height: 300px;
    resize: false;
  }
`;
