import styled from "@emotion/styled";
import React from "react";
import { BsEmojiSmile, BsChevronRight } from "react-icons/bs";

function ContentFooter({reviewText, visitDate, shopname, foodType, shopLocation}) {
  return (
    <ContentFooterContainer>
      <div className="review-text">
        <p>
          {reviewText}
        </p>
      </div>
      <div className="review-footer">
        <div className="review-footer-left">
          <BsEmojiSmile fill="#424242" size="22px" />
          <span>반응 남기기</span>
        </div>
        <div className="review-footer-right">
          <span>{visitDate} 토 방문</span>
        </div>
      </div>
      <div className="shop-name-area">
        <div className="shop-content-left">
          <div className="shop-name-content">
            <div className="content-top">
              <span>{shopname}</span> &nbsp; <BsChevronRight size="14px" />
            </div>
            <div className="content-bottom">
              <p>{foodType}/{shopLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </ContentFooterContainer>
  );
}

export default ContentFooter;

const ContentFooterContainer = styled.div`
  width: 100%;
  max-width: 720px;
  padding-top: 10px;
  .review-text {
    color: #666;
  }
  .review-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
  }
  .review-footer-left {
    display: flex;
    align-items: center;
    margin-top: 2px;
    color: #424242;
    span {
      margin-left: 10px;
    }
  }
  .review-footer-right {
    color: #424242;
  }
  .shop-name-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
    margin-top: 15px;
    .shop-content-left {
      flex-grow: 1;
      .shop-name-content {
        padding: 13px 16px 12px 15px;
        .content-top {
          span {
            line-height: 20px;
          }
          height: 100%;
          display: flex;
          align-items: center;
        }
        .content-bottom {
          color: #8f8f8f;
          margin-top: 4px;
        }
      }
    }
  }
`;
