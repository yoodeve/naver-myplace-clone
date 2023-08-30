import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import styled from "@emotion/styled";
import HeaderBottom from "./HeaderBottom";
import Footer from "./Footer";

function MainLayout(props) {
  const { pathname } = useLocation();
  const [footer, setFooter] = useState(true);
  useEffect(() => {
    if (pathname === "/feed") {
      setFooter(false);
    } else {
      setFooter(true);
    }
  }, [pathname]);

  return (
    <Box>
      <Header />
      <HeaderBottom />
      <Outlet />
      <Footer footer={footer} />
    </Box>
  );
}

export default MainLayout;

const Box = styled.div`
  height: 100vh;
  position: relative;
  overflow: auto;
`;
