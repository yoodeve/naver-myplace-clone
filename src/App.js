import React from "react";
import { Reset } from "styled-reset";
import Routers from "./Routers";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function App() {
  return (
    <div css={CommonCss}>
      <Reset />
      <Routers />
    </div>
  );
}

export default App;

const CommonCss = css`
  * {
    box-sizing: border-box;
    font-size: 14px;
  }
`;
