import styled from "@emotion/styled";
import React from "react";
import ContentHeader from "./ContentHeader";
import ContentImage from "./ContentImage";
import ContentFooter from "./ContentFooter";

function FeedContent(props) {
  return (
    <FeedContainer>
      <FeedContentWrap>
        <ContentHeader />
        <ContentImage />
        <ContentFooter />
      </FeedContentWrap>
    </FeedContainer>
  );
}

export default FeedContent;

const FeedContainer = styled.li`
  margin: 0 auto 20px;
  padding: 0 20px;
  width: 100%;
  max-width: 720px;
  list-style: none;
`;

const FeedContentWrap = styled.div`
max-width: 720px;
  margin: 0 auto;
  box-sizing: border-box;
`;
