import styled from "@emotion/styled";
import React from "react";

function ContentImage(props) {
  return (
    <ImageContainer>
      <div className="left-img-wrap">
        <div />
      </div>
      <div className="right-img-wrap">
        <div className="right-img-top" />
        <div className="right-img-bottom" />
      </div>
    </ImageContainer>
  );
}

export default ContentImage;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 2px;
  border-radius: 8px;
  overflow: hidden;
  width: 680px;
  height: 360px;
  .left-img-wrap {
    display: grid;
    place-items: center;
    width: 59%;
    height: 100%;
    margin-right: 2px;
    div {
      width: 100%;
      height: 100%;
      background-size: 100%;
      background-image: url("/images/ReviewPic3.JPG");
    }
  }
  .right-img-wrap {
    width: 41%;
    height: 100%;
    .right-img-top,
    .right-img-bottom {
      width: 100%;
      height: 100%;
    }
    .right-img-top {
      height: 50%;
      background-size: 100%;
      background-image: url("/images/ReviewPic1.JPG");
      margin-bottom: 2px;
    }
    .right-img-bottom {
      background-size: 100%;
      background-image: url("/images/ReviewPic2.JPG");
      margin-bottom: 2px;
    }
  }
`;
