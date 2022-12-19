import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { threeCats } from "../../asset";
import { Img } from "../ui/Img";
import MyButton from "../ui/MyButton";
import Stack, { StStack } from "../ui/Stack";
//   id: 1,
//   nickname: "범준",
//   title: "제목",
//   content: "내용",
//   likeCount: 3,
//   postLike: true,
//   createdAt: "2022-12-16-13:55",
//   modifiedAt: "2022-12-16-13:55",
//   picturePath: "/static/resource/img/aa.png",
//   category: "cat",
//   comentList: [
//     {
//       id: 1,
//       content: "댓글 내용",
//       nickname: "범준",
//       commentLike: true,
//       createdAt: "2022-12-16-13:55",
//       likeCount: 4,
//     },
//   ],

const Post = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  // const { post, isLoading, error } = useSelector((state) => state.post);
  // if (error) return alert(error);
  // const onClickLikeHandler = () => {
  //   dispatch(post.postLike)
  // };
  //useEffect (()=>{
    // dispatch(__getPost)
  // })
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
              {/* post.nickname */}
              <h3>작성자 : 조무결</h3>

              <span>{/* post.likeCount */}</span>
              {/* className = post.postLike ? liked : unLiked */}
              {/* onClick={onClickLikeHandler} */}
              <span>❤️</span>
            </Stack>
            {/* post.modifiedAt !== '' post.modifiedAt '(수정됨)' : post.createdAt  */}
            <span>2022-02-02</span>
          </Stack>
          <ContentContainer>
            <textarea>
              {/* post.content */}
              냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리냥세마리
            </textarea>
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
    min-height: 17rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--color-point1);
    }
  }
`;
