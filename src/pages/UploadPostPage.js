import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Mybutton from "../components/ui/MyButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __uppostPost } from "../redux/modules/uppostSlice";
import uuid from "react-uuid";
import AWS, { ServiceCatalogAppRegistry } from "aws-sdk";

const UploadPostPage = () => {
  const KEY = uuid();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    pictureName: "",
  });
  const [imgBase64, setImgBase64] = useState(""); // base64 impolding
  const [imgFile, setImgFile] = useState(null);
  const [root, setRoot] = useState(""); // 파일 원본주소 지정 및 보여주기위해서 string 처리해서 불러오기..

  const changeFileHandler = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      console.log("approaching reader");
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        {
          console.log(base64.toString());
        }
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

  function uploadFileHandler() {
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY; //시크릿엑세스키 env화
    const REGION = process.env.REACT_APP_REGION;
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
    window.Buffer = window.Buffer || require("buffer").Buffer;
    const base64Data = new Buffer.from(
      imgBase64.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    ); // base64 인코딩
    const type = imgBase64.split(";")[0].split("/")[1]; //타입 설정

    console.log("encoding-base64", base64Data);
    console.log("type", type);
    AWS.config.update({
      //AWS 설정
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });
    console.log("1" + KEY + "." + type);
    setPost({
      ...post,
      pictureName: KEY + "." + type,
    });
    console.log(post);

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: S3_BUCKET,
        Key: `${KEY}.${type}`,
        Body: base64Data,
        // ContentEncoding: "base64",
        // ContentType: `image/${type}`,
      },
    });

    const promise = upload.promise();
    promise
      .then((res) => {
        setRoot(`${KEY}.${type}`);

        console.log("p", post);
        window.setTimeout(function () {
          alert("업로드가되었습니다.");
        }, 2000);
      })
      .catch((err) => {
        alert("업로드 실패");
        console.log("err");
        console.log(err);
      });
  }

  function writeHandler(state) {
    if (post.title.trim() === "") {
      alert("닉네임이 비어져 있습니다!");
    } else if (post.content.trim() === "") {
      alert("제목이 비어져 있습니다!");
    } else if (post.category.trim() === "") {
      alert("카테고리 가 비어져있습니다.!");
    } else if (post.pictureName.trim() === "") {
      alert("사진업로드를 하지 않으셨습니다.!");
    } else {
      console.log('state staet',state)
      dispatch(__uppostPost(state));
    }
  }

  return (
    <Layout>
      <StyledUploadPage>
        <h1>🐶😸멍냥의 전당에 여러분의 반려동물을 자랑해보세요!😸🐶</h1>
        <div className="upload_box">
          <div className="title_zone">
            <label>제목:</label>
            <input
              type="text"
              onChange={(e) => {
                const { value } = e.target;
                setPost({
                  ...post,
                  title: value,
                });
              }}
            ></input>
          </div>
          <div className="half">
            <div className="left_half">
              <div className="img_zone">
                {imgBase64 && <img src={imgBase64} alt="preview_img"></img>}
              </div>
              <div className="config_zone">
                <label>파일첨부</label>
                <input
                  type="file"
                  name="imgFile"
                  id="imgFile"
                  onChange={changeFileHandler}
                />
                <button onClick={uploadFileHandler}>파일 업로드</button>
                <label>카테고리</label>
                <select
                  name="category"
                  onChange={(e) => {
                    const { value } = e.target;
                    setPost({
                      ...post,
                      category: value,
                    });
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
                    onChange={(e) => {
                      const { value } = e.target;
                      setPost({
                        ...post,
                        content: value,
                        pictureName: root,
                      });
                    }}
                  ></textarea>
                </div>
                <div className="button_zone">
                  <Mybutton
                    onClick={() => {
                      console.log(post);
                      console.log("r1", root);
                      writeHandler(post);
                    }}
                  >
                    작성완료
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
`;
