import styled from "@emotion/styled";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineGpsFixed } from "react-icons/md";

function FeedHeader(props) {
  const menuArray = [
    <>전체</>,
    <>팔로잉</>,
    <>
      <AiOutlinePlus />
      관심지역
    </>,
  ];

  const [index, setIndex] = useState(0);

  const onClick = (i) => {
    setIndex(i);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLeft>
          {menuArray.map((e, i) => {
            return <div className="left-content-box">
            <button onClick={() => onClick(i)} className={index === i && "blue"}>
              {e}
            </button>
          </div>
          })}
        </HeaderLeft>
        <HeaderRight>
          <div className="right-content-box">
            <button>
              <MdOutlineGpsFixed />
              현위치
            </button>
          </div>
        </HeaderRight>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default FeedHeader;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
`;

const HeaderContent = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: 65px;
  display: flex;
`;

const HeaderLeft = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  .left-content-box {
    padding: 6px 0px 6px 8px;
    button {
      padding: 0 13px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
      font-weight: 500;
      color: rgb(66, 66, 66);
      border: none;
      height: 42px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .blue {
      color: #fff !important;
      background-image: linear-gradient(90deg, #2d8dee, #2da1ee) !important;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .right-content-box {
    position: relative;
    button {
      padding: 12px 16px 12px 20px;
      background-color: transparent;
      border: unset;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 4px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 10px;
      display: inline-block;
      width: 2px;
      height: 24px;
      background-color: #e2e5e8;
    }
  }
`;
