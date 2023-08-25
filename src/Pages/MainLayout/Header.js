import styled from "@emotion/styled";
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMid from "./HeaderMid";

function Header(props) {
  return (
    <HeaderBackGround>
      <HeaderTop />
      <HeaderMid />
    </HeaderBackGround>
  );
}

export default Header;

const HeaderBackGround = styled.div`
  background: #06b495;
  color: #fff;
  padding: 10px;
`;