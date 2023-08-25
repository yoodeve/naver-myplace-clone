import styled from "@emotion/styled";
import React from "react";
import Map from "./Map";

function MyPlace(props) {
  return (
    <MainContainer>
      <div className="map-container">
        <div className="map-wrap">
          <Map />
          <div className="near-starred">이주변 저장장소</div>
        </div>
      </div>
      <ul className="my-list">
        <h1>전체 리스트</h1>
        <div>
          <div>+</div> 새리스트 만들기
        </div>
        <li>내 장소</li>
      </ul>
    </MainContainer>
  );
}

export default MyPlace;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .map-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 21px 0 24px;
    .map-wrap {
      position: relative;
      width: 680px;
      height: 189px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid black;
      .near-starred {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 14px 26px 14px 11px;
        background-color: #999;
      }
    }
  }
`;
