import styled from "@emotion/styled";
import React from "react";

function ProfileLabel(props) {
  return (
    <Box>
      <div>리뷰</div>
      <em>20</em>
    </Box>
  );
}

export default ProfileLabel;

const Box = styled.div`
  width: 51px;
  height: 40px;
  padding: 0 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right:1px solid #0000010a;
  :nth-last-of-type(1) {
    border-right: unset !important;
  }
  div {
    color: #99ecdd;
  }
  em {
    display: block;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    line-height: 1.6rem;
  }
`;
