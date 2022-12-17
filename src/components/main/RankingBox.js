import react from "react";
import styled from "styled-components";
import Like from "./Like";

function RankingBox(prop) {
  return (
    <StyledRankingBox>
      <img src="https://openimage.interpark.com/goods_image_big/9/1/2/7/8815609127_l.jpg"></img>
      <div className="title_zone">
        <div className="box_title">Initial Title</div>
        <Like></Like>
      </div>
      <div className="box_content">Lorem Ipsum </div>
      <div className="box_writer">치어리더댕댕이</div>
    </StyledRankingBox>
  );
}
export default RankingBox;

const StyledRankingBox = styled.div`
  width: 30%;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 70%;
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4Jf0QXyGTu6YLz32Wkl2JqqnYz2J3lHy9Q&usqp=CAU");
    background-size: contain;
  }
  .title_zone {
    display: flex;
    font-size: 2.4rem;
  }
  .title_zone :nth-child(2) {
    float: right;
  }
  .box_title {
    font-size: 2.4rem;
  }
`;
