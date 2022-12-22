import { produceWithPatches } from "immer";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { s3Url } from "../../dataManager/apiConfig";
import Like from "./Like";

function PostBox(prop) {
  let time = prop.offer.modifiedAt.split("T")[0];
  const navigate = useNavigate();
  const onClickItemHandler = () => {
    navigate(`/post/${prop.offer.id}`);
  };
  let src = "";
  if (
    prop.offer.pictureName !== "pictureName" &&
    prop.offer.pictureName !== null
  ) {
    src = s3Url + prop.offer.pictureName;
  } else {
    src = "https://via.placeholder.com/150";
  }
  return (
    <StyledPostBox onClick={onClickItemHandler}>
      <img alt="" src={src}></img>
      <div className="title_box">
        <div className="title">{prop.offer.title}</div>
        <div classNAme="like_box">
          <Like
            likeCount={prop.offer.likeCount}
            postLike={prop.offer.postLike}
          ></Like>
        </div>
      </div>
      <div className="content_box">{prop.offer.content}</div>
      <div className="info_box">
        <div className="writer">{prop.offer.nickname}</div>
        <div className="time">{time}</div>
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
    width: 80%;
    height: fit-content;
    font-size: 2.4rem;
    font-weight: bold;
  }
  .title {
    width: 85%;
  }
  .like_box {
    width: fit-content;
    height: fit-conten;
  }
  .content_box {
    width: 90%;
  }
  .info_box {
    display: flex;
    gap: 100px;
  }
`;
