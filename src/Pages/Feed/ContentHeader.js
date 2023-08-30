import styled from "@emotion/styled";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";

function ContentHeader(props) {
  return (
    <ContentHeaderS>
      <div className="content-header-right">
        <div className="prof-img-wrap">
          <div />
        </div>
        <div className="prof-info-wrap">
          <p className="nickname">라랄</p>
          <div className="prof-info-area">
            <span className="photo-count">사진리뷰:142</span>
            <span className="follower-count">팔로워:22</span>
          </div>
        </div>
      </div>
      <div className="content-header-left">
        <div className="follow-btn-wrap">
          <button>팔로우</button>
        </div>
        <div className="more-btn-wrap">
          <button>
            <AiOutlineMore size="1.2rem" />
          </button>
        </div>
      </div>
    </ContentHeaderS>
  );
}

export default ContentHeader;

const ContentHeaderS = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  list-style: none;
  .prof-img-wrap {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
    div {
      width: 100%;
      height: 100%;
      background-size: 100%;
      background-image: url("/images/profImg1.JPG");
    }
  }
  .content-header-right {
    margin-left: -8px;
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    .prof-info-wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
    }
    .nickname {
      color: #242424;
      font-weight: 700;
      font-size: 16px;
    }
    .prof-info-area {
      margin-top: 2px;
      position: relative;
      margin-top: 2px;
      .photo-count,
      .follower-count {
        color: #8f8f8f;
      }
      .follower-count::before {
        content: " · ";
      }
    }
  }
  .content-header-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    button {
      border: none;
    }
    .follow-btn-wrap button {
      background-color: #eff6fe;
      color: #287cff;
      width: 70px;
      height: 30px;
      border-radius: 4px;
      font-weight: 600;
    }
    .more-btn-wrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .more-btn-wrap button {
      background-color: transparent;
    }
  }
`;
