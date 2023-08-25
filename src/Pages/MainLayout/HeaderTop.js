import React from "react";
import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderTop(props) {
  return (
    <HeaderTopContainer>
      <h1 className="title-left-area">
        <svg
          fill="white"
          width="21px"
          viewBox="0 0 26 26"
          className="_1f76dg"
          aria-hidden="true"
        >
          <path className="place_icon_header_bg" d="M0 26h26V0H0z"></path>
          <path
            fill="#06b495"
            className="place_icon_header"
            d="M15.137 7v6.391L10.688 7H7v11.941h3.863v-6.39l4.449 6.39H19V7z"
          ></path>
        </svg>
        <span>MY플레이스</span>
      </h1>
      <div className="title-right-area">
        <svg viewBox="0 0 34 23" className="_2gfg23" aria-hidden="true">
          <path
            rillrule="evenodd"
            d="M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V8.03559C2.69554 8.72699 3.5 10.0186 3.5 11.5C3.5 12.9814 2.69554 14.273 1.5 14.9644V20C1.5 20.8284 2.17157 21.5 3 21.5H31C31.8284 21.5 32.5 20.8284 32.5 20V14.9644C31.3045 14.273 30.5 12.9814 30.5 11.5C30.5 10.0186 31.3045 8.72699 32.5 8.03559V3C32.5 2.17157 31.8284 1.5 31 1.5H3ZM34 9.05001V3C34 1.34315 32.6569 0 31 0H3C1.34315 0 0 1.34315 0 3V9.05001C1.14112 9.28164 2 10.2905 2 11.5C2 12.7095 1.14112 13.7184 0 13.95V20C0 21.6569 1.34315 23 3 23H31C32.6569 23 34 21.6569 34 20V13.95C32.8589 13.7184 32 12.7095 32 11.5C32 10.2905 32.8589 9.28164 34 9.05001Z"
          ></path>
          <text fontSize="20" fill="white">
            쿠폰
          </text>
        </svg>
        <span className="hambtn-wrapper">
          <GiHamburgerMenu width="1.2rem" height="1.2rem" padding="10px" />
        </span>
      </div>
    </HeaderTopContainer>
  );
}

export default HeaderTop;

const HeaderTopContainer = styled.div`
  height: 53px;
  padding: 8px 18px 8px 15px;
  border-color: #0000010a;
  border-bottom: 1px solid #0000010a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title-left-area {
    display: flex;
    align-items: center;
    flex: 1 1;
    span {
      margin-left: 3px;
      padding: 11px 2px 5px;
      display: inline-block;
      vertical-align: top;
      text-align: left;
    }
  }
  .title-right-area {
    display: flex;
    align-items: center;
    .hambtn-wrapper {
      padding: 10px;
    }
  }
`;
