import styled from "@emotion/styled";
import React from "react";

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
  ];
  return (
    <SubHeaderContainer>
      <SubHeaderContent>
        {themeArr.map(e => {
          return <SubHeaderContentWrap>{e}</SubHeaderContentWrap>
        })}
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubHeaderContentWrap = styled.button`
  width: fit-content;
  background-color: transparent;
  border: 1px solid #eaeef2;
  height: 39px;
  border-radius: 19px;
  padding: 0 13px;
  color: rgb(102,102,102);
`;
