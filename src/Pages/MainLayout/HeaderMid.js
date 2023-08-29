import styled from "@emotion/styled";
import React from "react";
import ProfileLabel from "./ProfileLabel";
import { ReactComponent as ShareIcon } from "../../svg/N_Share.svg";

function HeaderMid(props) {
  return (
    <HeaderMidContainer>
      <div className="mid-container">
        <img src="/images/profile_icon.png" alt="" />
        <div className="profile-wrap">
          <div>
            <span>한유정1457</span>
            <ShareIcon fill="white" width="20px" />
          </div>
          <div className="label-area">
            <ProfileLabel />
            <ProfileLabel />
            <ProfileLabel />
            <ProfileLabel />
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <span>
          <button>리뷰쓰기</button>
        </span>
        <span>
          <button>미션</button>
        </span>
      </div>
    </HeaderMidContainer>
  );
}

export default HeaderMid;

const HeaderMidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 335px;
  margin: 0 auto;
  padding: 20px 0 11px;
  background: #06b495;
  height: 128px;
  .mid-container {
    display: flex;
    padding: 0px 20px;
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: 23px;
  }
  .profile-wrap {
    span {
      margin-right: 5px;
      font-size: 22px;
      font-weight: 800;
      color: #fff;
      line-height: 2.6rem;
      text-align: left;
    }
  }
  .label-area {
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    margin-top: 7px;
  }
  .btn-wrap {
    width: 100%;
    display: flex;
    span {
      text-align: center;
      flex: 1;
      position: relative;
      button {
        color: #fff;
        border-radius: 8px;
        height: 38px;
        width: 100%;
        background-color: #0cc5a4;
        border: unset;
      }
    }
    span:nth-last-of-type(1) {
      flex: none;
      button {
        width: 102px;
        margin-left: 7px;
      }
    }
  }
`;
