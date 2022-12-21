import react, { useState } from "react";
import AWS from "aws-sdk";
import { Row, Col, Button, Input, Alert } from "reactstrap";
import { s3Url } from "../../dataManager/apiConfig";

function S3Upload() {
  const [progress, setProgress] = useState(0); //업로드 과정 %화
  const [selectedFile, setSelectedFile] = useState(null); // 파일 업로드 대상 파일핸들링 state
  const [showAlert, setShowAlert] = useState(false); // alert창
  const [root, setRoot] = useState(""); // 파일 원본주소 지정 및 보여주기위해서 불러오기;

  const ACCESS_KEY = "AKIA56JQ7KIEEXDHU47J"; //액세스키
  const SECRET_ACCESS_KEY = "FtEAzXtcITeQNGOPltcKeL3NU2H6UHbonvHHyxxM"; //시크릿엑세스키 env화
  const REGION = "ap-northeast-2";
  const S3_BUCKET = "mytestbucketqq2";

  AWS.config.update({
    //AWS 설정
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const handleFileInput = (e) => {
    const file = e.target.files[0]; //console 확인해보니 무조건 배열화되서 들어옴
    const fileExt = file.name.split(".").pop(); // 확장자명 검색
    if (file.type !== "image/jpeg" || fileExt !== "jpg") {
      //jpeg.jpg만 업로드
      alert("jpg 파일만 Upload 가능합니다.");
      return;
    }
    setProgress(0); //핸들링 후 진행 0%
    setSelectedFile(e.target.files[0]); //파일선택
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: "upload/" + file.name,
    };

    console.log(params);
    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          setSelectedFile(null);
        }, 3000);
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };
  const myBucket = new AWS.S3({
    //버킷 설정
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });
  return (
    <div className="App">
      <div className="App-header">
        <Row>
          <Col>
            <h1>File Upload</h1>
          </Col>
        </Row>
      </div>
      <div className="App-body">
        <Row>
          <Col>
            {showAlert ? (
              <Alert color="primary">업로드 진행률 : {progress}%</Alert>
            ) : (
              <Alert color="primary">파일을 선택해 주세요.</Alert>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Input color="primary" type="file" onChange={handleFileInput} />
            {selectedFile ? (
              <Button color="primary" onClick={() => uploadFile(selectedFile)}>
                {" "}
                Upload to S3
              </Button>
            ) : null}
          </Col>
          <img
            alt=""
            src={(s3Url = "" + "bc62f243-798d-c4fb-b9d5-3b442d2a0ae6.jpeg")}
          ></img>
          {/* <img src="https://mytestbucketqq2.s3.ap-northeast-2.amazonaws.com/bc62f243-798d-c4fb-b9d5-3b442d2a0ae6.jpeg"></img> */}
        </Row>
      </div>
    </div>
  );
}

export default S3Upload;
