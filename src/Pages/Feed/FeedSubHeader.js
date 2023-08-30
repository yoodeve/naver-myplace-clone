import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function FeedSubHeader(props) {
  const themeArr = [
    "한식",
    "등산",
    "카페",
    "테마파크",
    "양식",
    "물놀이",
    "일식",
    "체험관광",
    "술집",
    "아이와함께",
    "카페",
    "물놀이",
    "등산",
    "테마파크",
    "한식",
    "양식",
    "술집",
    "체험관광",
    "아이와함께",
    "일식",
    "카페",
    "등산",
    "양식",
    "물놀이",
    "한식",
    "일식",
    "체험관광",
    "아이와함께",
    "술집",
    "테마파크",
  ];

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(false);
  const [leftOpacity, setLeftOpacity] = useState(false);
  const [leftMargin, setLeftMargin] = useState(0);

  useEffect(() => {
    console.log(leftMargin)
  }, [leftMargin])

  const onCarouselRightClick = () => {
    if (leftMargin < -1280) {
      setOpacity(false);
      return;
    }
    setLeftMargin(leftMargin - 640);
  };
  const onCarouselLeftClick = () => {
    if (leftMargin >= 0) {
      setLeftOpacity(false);
      return;
    }
    setLeftMargin(leftMargin + 640);
  };

  const onMouseOver = () => {
    if (leftMargin < -1280) {
      setOpacity(false);
      return;
    }
    setOpacity(true);
  };
  const onMouseLeave = () => {
    if (leftMargin <= 0) {
      setOpacity(false);
      return;
    }
    setOpacity(false);
  };
  const onLeftMouseOver = () => {
    if (leftMargin > -1280) {
      setLeftOpacity(false);
      return;
    }
    setLeftOpacity(true);
  };
  const onLeftMouseLeave = () => {
    if (leftMargin < -1280) {
      setLeftOpacity(false);
      return;
    }
    setLeftOpacity(false);
  };

  const handleOnDrag = (data) => {
    console.log(data.x);
    if (data.x > 0) return;
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <SubHeaderContainer>
      <SubHeaderContent>
        <HiddenSlider
          onClick={onCarouselLeftClick}
          left
          opacity={leftOpacity}
          onMouseEnter={onLeftMouseOver}
          onMouseLeave={onLeftMouseLeave}
        >
          <BsChevronLeft />
        </HiddenSlider>
        <Draggable
          position={{ x: position.x, y: 0 }}
          onDrag={(_, data) => {
            handleOnDrag(data);
          }}
        >
          <SlideWrap leftMargin={leftMargin}>
            {themeArr.map((e, i) => {
              return <SubHeaderContentWrap>{e}</SubHeaderContentWrap>;
            })}
          </SlideWrap>
        </Draggable>
        <HiddenSlider
          onClick={onCarouselRightClick}
          opacity={opacity}
          onMouseEnter={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <BsChevronRight />
        </HiddenSlider>
      </SubHeaderContent>
    </SubHeaderContainer>
  );
}

export default FeedSubHeader;

const SubHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

const SubHeaderContent = styled.div`
  max-width: 720px;
  width: 100%;
  height: 65px;
  padding: 0 20px;
  margin: 0 auto;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

const SlideWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  position: absolute;
  left: ${(props) => props.leftMargin}px;
  display: flex;
  transition: all 0.5s ease-in-out;
`;

const SubHeaderContentWrap = styled.button`
  margin-left: 6px;
  width: max-content;
  background-color: transparent;
  height: 39px;
  border-radius: 39px;
  border: 1px solid #eaeef2;
  padding: 0 13px;
  color: rgb(102, 102, 102);
  flex-shrink: 0;
  cursor: pointer;
`;

const HiddenSlider = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.left
      ? "linear-gradient(270deg,#ffffff00,#fff 28px)"
      : "linear-gradient(90deg, #f8fafb00, #fff 28px)"};
  border: none;
  width: 46px;
  height: 65px;
  position: absolute;
  top: 0;
  right: ${(props) => (props.left ? "" : "0")};
  left: ${(props) => (props.left ? "0" : "")};
  z-index: 1;
  opacity: ${(props) => (props.opacity ? "0.9" : "0")};
  transition: all 0.3s ease;
`;
