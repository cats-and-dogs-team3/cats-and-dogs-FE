import react, { useState } from "react";
import styled from "styled-components";
import Like from "./Like";

function PostBox() {
  return (
    <StyledPostBox>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwuP5vPJ_g5FP35jK8gYMWq4gbseNTZHvwg&usqp=CAU"></img>
      <div className="title_box">
        <div className="title">식..빵...</div>
        <Like></Like>
      </div>
      <div className="content_box">식빵굽는중</div>
      <div className="info_box">
        <div className="writer">우리집킹냥이</div>
        <div className="time">2022-12-16</div>
      </div>
    </StyledPostBox>
  );
}
export default PostBox;

const StyledPostBox = styled.div`
  width: 20%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  img {
    width: 90%;
    height: 200px;
    background-color: black;
  }

  .title_box {
    display: flex;
    gap: 150px;
    font-size: 2.4rem;
    font-weight: bold;
  }
  .content_box {
    width: 90%;
  }
  .info_box {
    display: flex;
    gap: 100px;
  }
`;
