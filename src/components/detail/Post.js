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
import { $deletePost, $getToken } from "../../dataManager/myQueries";
import { s3Url } from "../../dataManager/apiConfig";
import { requestLogin } from "../../dataManager/messages";

const Post = ({ postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.nickname.nickname);
  const post = useSelector((state) => state.post.post);
  console.log("post", post);
  const onClickLikeHandler = () => {
    $getToken() ?  dispatch(__liking(postId)) : alert(requestLogin)
  };
  useEffect(() => {
    dispatch(__getPost(postId));
  }, [dispatch, postId]);
  const onClickHandler = (e) => {
    const { name } = e.target;
    if (name === "edit") navigate(`/edit/${postId}`);
    if (name === "delete") {
      $deletePost(postId).then((res) => {
        console.log("status 200 : ", res.statusCode === 200);
        if (res.statusCode === 200) {
          alert(res.msg);
          navigate("/");
        } else {
          alert(res.msg);
        }
      });
    }
  };
  return (
    <Fragment>
      <MyStack>
        {/* src : post.picturePath */}
        <StackColumn style={{ gap: "3rem", margin: "3rem 0" }}>
          <Stack justify={"flex-start"}>
            <h3>
              {post.category === "CAT"
                ? post.nickname + ` 😸`
                : post.nickname + ` 🐶`}
            </h3>
          </Stack>

          <Img src={s3Url + post.pictureName} />
          <Stack
            gap="2rem"
            wd="53rem"
            mg="auto"
            align={"flex-start"}
            direction={"column"}
          >
            <Stack justify={"flex-start"}>
              <h3 style={{ flex: 1 }}>{post.title}</h3>
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
            <Stack align={"flex-end"} direction={"column"} gap={"3rem"}>
              <Stack gap={"1.2rem"} wd={"none"}>
                <Like
                  onClick={onClickLikeHandler}
                  style={{ marginLeft: "1rem" }}
                  src={post.postLike ? likeFilled : likeEmpty}
                />
                <span style={{ fontSize: "2rem" }}>
                  {post.likeCount !== 0 ? `${post.likeCount} 명이 좋아합니다 🐾` : '첫번째 좋아요를 눌러주세요! 🐾'}
                </span>
              </Stack>
            </Stack>
            {nickname === post.nickname ? (
              <Stack pd="0 2rem 2rem 0" justify={"flex-end"}>
                <MyButton name="edit" onClick={onClickHandler}>
                  게시물 수정
                </MyButton>
                <MyButton name="delete" onClick={onClickHandler}>
                  게시물 삭제
                </MyButton>
              </Stack>
            ) : null}
          </Stack>
        </StackColumn>
      </MyStack>
    </Fragment>
  );
};

export default Post;
const StackColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
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
