import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import { Like } from "../ui/Like";
import { Img } from "../ui/Img";
import MyButton from "../ui/MyButton";
import Stack, { StStack } from "../ui/Stack";
import { likeEmpty, likeFilled, threeCats } from "../../asset";

import { __getPost, __liking } from "../../redux/modules/postSlice";

const Post = ({ postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.nickname.nickname);
  const post = useSelector((state) => state.post.post);
  const onClickLikeHandler = () => {
    dispatch(__liking(postId));
  };
  useEffect(() => {
    dispatch(__getPost(postId));
  }, [dispatch,postId]);
  const onClickHandler = (e) => {
    const { name } = e.target;
    if (name === "edit") navigate("/");
    // else dispatch(__deletePost)
  };
  return (
    <Fragment>
      <MyStack>
        {/* src : post.picturePath */}
        <Img style={{ margin: "3rem 0" }} src={threeCats} />
        <Stack
          gap="2rem"
          wd="53rem"
          mg="auto"
          align={"flex-start"}
          direction={"column"}
        >
          <Stack justify={"space-between"} gap={"3rem"}>
            <Stack gap={"1.2rem"} wd={"none"}>
              <h3>{post.nickname}</h3>
              <Like
                onClick={onClickLikeHandler}
                style={{ marginLeft: "1rem" }}
                src={post.postLike ? likeFilled : likeEmpty}
              />
              <span style={{ fontSize: "2rem" }}>
                {post.likeCount !==0 && `${post.likeCount} 명이 좋아합니다.`} 
              </span>
            </Stack>
            <span>
              {post.modifiedAt !== ""
                ? `${moment(post.modifiedAt).format(
                    "YYYY-MM-DD hh:mm:ss"
                  )} (수정됨)`
                : moment(post.createdAt).format("YYYY-MM-DD hh:mm:ss")}
            </span>
          </Stack>
          <ContentContainer>
            <textarea value={post.content} readOnly></textarea>
          </ContentContainer>
          <Stack pd="0 2rem 2rem 0" justify={"flex-end"}>
            <MyButton name="edit" onClick={onClickHandler}>
              게시물 수정
            </MyButton>
            <MyButton name="delete">게시물 삭제</MyButton>
          </Stack>
        </Stack>
      </MyStack>
    </Fragment>
  );
};

export default Post;
const Fragment = styled.div`
  h3 {
    font-weight: 900;
    font-size: 2rem;
  }
`;
const MyStack = styled(StStack)`
  border-right: 0.5px solid var(--color-point3);
  flex-direction: column;
  @media (max-width: 540px) {
    border-right: none;
  }
`;

const ContentContainer = styled.div`
  /* padding: 0.7rem 0.1rem 0.7rem 0.7rem; */
  width: 100%;
  /* border: 0.25rem solid white; */
  border-radius: 10px;
  textarea {
    color: var(--color-point3);
    width: 100%;
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    resize: none;
    min-height: 10rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-point1);
    }
  }
`;
