import styled from "@emotion/styled";
import React from "react";
import { BsEmojiSmile, BsChevronRight } from "react-icons/bs";

function ContentFooter(props) {
  return (
    <ContentFooterContainer>
      <div className="review-text">
        <p>
          ❤️제주에서 먹었던 브런치 중에 최고였던 곳❤️ 영수증 고이고이
          받아왔지만,,, 이제서야 쓰게 된 🥹🥹 먹고 싶어서 사진 찾아보다가 아!!
          맞아!!! 영수증리뷰!!!하고 ㅎㅎㅎ 시저샐러드는 정말 최고고,,, 말뭐메뉴🩵
          여기서 시저 안시키 면 큰일남‼️‼️‼️‼️ 파스타도 커피도 너무 맛있었고
          식기나 매장 분위기 때문에 맛을 더 음미하면서 먹을 수 있었...
        </p>
      </div>
      <div className="review-footer">
        <div className="review-footer-left">
          <BsEmojiSmile fill="#424242" size="22px" />
          <span>반응 남기기</span>
        </div>
        <div className="review-footer-right">
          <span>8.5 토 방문</span>
        </div>
      </div>
      <div className="shop-name-area">
        <div className="shop-content-left">
          <div className="shop-name-content">
            <div className="content-top">
              <span>청수미방</span> &nbsp; <BsChevronRight size="14px" />
            </div>
            <div className="content-bottom">
              <p>양식/제주특별자치도 제주시 한경면</p>
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
