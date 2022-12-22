import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Mybutton from "../components/ui/MyButton";
import { useNavigate, useParams } from "react-router-dom";
import { $updatePost } from "../dataManager/myQueries";
import { uploadImageToS3 } from "../dataManager/imageQueries";
import { useDispatch, useSelector } from "react-redux";
import {
  __editCategory,
  __editContent,
  __editPictureName,
  __editTitle,
  __getPost,
} from "../redux/modules/postSlice";
import { s3Url } from "../dataManager/apiConfig";

const UploadPostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading, error } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(__getPost(postId));
  }, [dispatch, postId]);

  const navigate = useNavigate();
  if (isLoading) return;
  if (error) alert(error);

  const changeFileHandler = (event) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        // setImgBase64(base64.toString());
        uploadImageToS3(base64.toString())
          .then((res) => {
            console.log("res", res);
            if (res.Key !== null || res.Key !== undefined) {
              dispatch(__editPictureName(res.Key));
            } else {
              alert("에러", res.Key);
            }
          })
          .catch((err) => {
            alert("업로드 실패");
          });
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  function onSubmitHandler() {
    if (post.title.trim() === "") {
      alert("닉네임이 비어져 있습니다!");
    } else if (post.content.trim() === "") {
      alert("제목이 비어져 있습니다!");
    } else if (post.category.trim() === "") {
      alert("카테고리 가 비어져있습니다.!");
    } else if (post.pictureName.trim() === "") {
      alert("사진업로드를 하지 않으셨습니다.!");
    } else {
      $updatePost(postId, {
        title: post.title,
        content: post.content,
        pictureName: post.pictureName,
        category: post.category,
      }).then((data) => {
        if (data.statusCode === 200) {
          alert("게시물이 정상적으로 수정되었습니다 🐾");
          navigate("/");
        }
      });
    }
  }

  return (
    <Layout>
      <StyledUploadPage>
        <h1>{`🐶😸멍냥의 전당에  ${
          post.nickname || ""
        }님의 반려동물을 자랑해보세요!😸🐶`}</h1>
        <div className="upload_box">
          <div className="title_zone">
            <label>제목:</label>
            <input
              value={post.title}
              type="text"
              onChange={(e) => {
                dispatch(__editTitle(e.target.value));
              }}
            ></input>
          </div>
          <div className="half">
            <div className="left_half">
              <div className="img_zone">
                <img src={s3Url + post.pictureName} alt="preview_img" />
              </div>
              <div className="config_zone">
                <label>사진수정</label>
                <input
                  type="file"
                  name="imgFile"
                  id="imgFile"
                  onChange={changeFileHandler}
                />

                <label>카테고리</label>
                <select
                  value={post.category}
                  name="category"
                  onChange={(e) => {
                    dispatch(__editCategory(e.target.value));
                  }}
                >
                  <option value="">카테고리</option>
                  <option value="DOG">강아지</option>
                  <option value="CAT">고양이</option>
                  <option value="OTHER">기타</option>
                </select>
              </div>
            </div>
            <div className="right_half">
              <div className="content_zone">
                <label>내용:</label>
                <div className="border_textarea">
                  <textarea
                    value={post.content}
                    onChange={(e) => {
                      dispatch(__editContent(e.target.value));
                    }}
                  ></textarea>
                </div>
                <div className="button_zone">
                  <Mybutton
                    onClick={() => {
                      onSubmitHandler();
                    }}
                  >
                    수정완료
                  </Mybutton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledUploadPage>
    </Layout>
  );
};
export default UploadPostPage;

const StyledUploadPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 57rem;

  h1 {
    width: inherit;
    height: 5rem;
  }

  .upload_box {
    width: 110rem;
    padding: 1rem;
    height: 50rem;
    border: 0.5px solid black;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 26%);
    border: 1px solid var(--color-point3);
    border-radius: 2rem;
    gap: 1rem;
    padding-left: 2.6rem;
  }

  .upload_box input[type="text"] {
    width: 80rem;
    height: fit-content;
    font-size: 1.6rem;
    border: 0.25rem solid var(--color-point2);
    border-radius: 10px;
    font-family: inherit;
  }
  .upload_box input[type="file"]::file {
    box-shadow: non;
    border: 1px solid var(--color-point1);
    border-radius: 1rem;
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    margin: 0.5rem;
    background-color: white;
    color: var(--color-point3);
  }
  .upload_box label {
    font-size: 2.4rem;
    width: 10%;
    text-align: right;
  }

  .upload_box img {
    width: 48rem;
    height: 36rem;
    object-fit: fill;
    margin-top: 2rem;
  }
  .upload_box .title_zone {
    width: calc(inherit-4rem);
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upload_box .img_zone {
    width: 50rem;
    height: 40rem;
    box-shadow: 0px 5px 10px rgb(0 0 0 / 50%);
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .half {
    width: inherit;
    display: flex;
    height: inherit;
    display: flex;
    flex-direction: row;
    gap: 0rem;
  }
  .right_half {
    display: flex;
    flex-direction: row;
  }
  .right_half textarea {
    display: block;
    padding: 1rem;
    width: 50rem;
    height: 36.7rem;
    border: 0.25rem solid var(--color-point2);
    border-radius: 10px;
    resize: none;
    font-family: inherit;
  }
  .button_zone {
    display: flex;
    justify-content: flex-end;
  }
  .content_zone {
    margin-left: 2rem;
  }
`;
