import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { threeCats } from "../../asset";
import { Img } from "../ui/Img";
import MyButton from "../ui/MyButton";
import Stack, { StStack } from "../ui/Stack";

import { useEffect } from "react";
import { __getPost } from "../../redux/modules/postSlice";
import moment from "moment";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  useEffect(() => {
    dispatch(__getPost(postId));
  }, []);
  const post = useSelector((state) => state.post.post);
  console.log("post", post);
  const onClickLikeHandler = () => {
    dispatch(post.postLike);
  };

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
          <Stack justify={"space-between"} pd={"0.5rem"} gap={"3rem"}>
            <Stack gap={"3rem"} wd={"none"}>
              <h3>{post.nickname}</h3>

              <span>{post.likeCount}</span>
              {/* className = post.postLike ? liked : unLiked */}
              {/* onClick={onClickLikeHandler} */}
              <span>❤️</span>
            </Stack>
            <span>
              {post.modifiedAt !== ""
                ? `${post.modifiedAt} (수정됨)`
                : post.createdAt}
            </span>
          </Stack>
          <ContentContainer>
            <textarea value={post.content}></textarea>
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
    color: var(--color-black);
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
