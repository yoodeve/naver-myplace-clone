import styled from "@emotion/styled";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HeaderBottom() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuList = [
    {
      title: "피드",
      url: "/feed",
    },
    {
      title: "타임라인",
      url: "/visit",
    },
    {
      title: "리뷰",
      url: "/review",
    },
    {
      title: "예약.주문",
      url: "/orders",
    },
    {
      title: "저장",
      url: "/myplace",
    },
  ];

  const navigateMenu = (url) => {
    navigate(url);
  };

  return (
    <HeaderBottomContainer>
      <div className="navigation-container">
        {menuList.map((e) => {
          return (
            <Menu
            key={e.title}
              onClick={() => navigateMenu(e.url)}
              thisMenu={pathname === e.url || false}
            >
              {e.title}
            </Menu>
          );
        })}
      </div>
    </HeaderBottomContainer>
  );
}

export default HeaderBottom;

const HeaderBottomContainer = styled.div`
  background: #06b495;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 0 20px;
  box-shadow: 0 12px 10px -10px rgba(0, 0, 0, 0.03);
  .navigation-container {
    width: 335px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
  }
`;
const Menu = styled.div`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${(props) => (props.thisMenu ? "600" : "300")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 5px;
  border-bottom: ${(props) => (props.thisMenu ? "4px solid white" : "none")};
`;
