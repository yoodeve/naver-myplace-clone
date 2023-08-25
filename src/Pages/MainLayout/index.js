import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from '@emotion/styled';
import HeaderBottom from "./HeaderBottom";

function MainLayout(props) {
  return (
    <Box>
      <Header />
      <HeaderBottom />
      <Outlet/>
    </Box>
  );
}

export default MainLayout;

const Box = styled.div`
  height: 100vh;
  position: relative;
  overflow: auto;
`;