import styled from "@emotion/styled";
import React from "react";

function InfoBox({ title, subtitle, gradient, imgSrc }) {
  return (
    <InfoLayout>
      <InfoContainer gradient={gradient}>
        <div className="flag-wrapper">
          <svg viewBox="0 0 19 20" className="EjpFk4" aria-hidden="true">
            <ellipse fill="#30A2B4" cx="7" cy="18" rx="7" ry="2"></ellipse>
            <path fill="#E6E6E0" d="M5 0H7V18H5z"></path>
            <path fill="#DB6E6E" d="M19 5.722L7 9 7 2z"></path>
          </svg>
        </div>
        <InfoBoxContent>
          <div className="text-area">{title}</div>
          <div className="sub-text">{subtitle}</div>
          <Img src={imgSrc} alt="" />
          <p>
            <button>리뷰 참여하기</button>
          </p>
        </InfoBoxContent>
      </InfoContainer>
    </InfoLayout>
  );
}

export default InfoBox;

const InfoLayout = styled.div`
width: 100%;
background-color: #f9f9f9;
  padding: 25px 20px;
`;

const InfoContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
  height: 440px;
  border-radius: 15px;
  padding: 34px 30px 40px;
  background-image: linear-gradient(${(props) => props.gradient});
  .flag-wrapper {
    display: block;
    width: 19px;
    height: 20px;
    margin: 0 auto 15px;
  }
`;

const InfoBoxContent = styled.div`
  text-align: center;
  color: #fff;
  .text-area span {
    font-size: 20px;
    font-weight: 600;
  }
  .text-area {
    line-height: 28px;
    font-weight: 300;
    font-size: 20px;
  }
  .sub-text {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 300;
  }
  p {
    margin-top: 22px;
    button {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 22px;
      color: #fff;
      padding: 9px 0;
      width: 143px;
      font-size: 16px;
      text-align: center;
    }
  }
`;
const Img = styled.img`
  margin-top: 27px;
  width: 235px;
  height: 155px;
`;
