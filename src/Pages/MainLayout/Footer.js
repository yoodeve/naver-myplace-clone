import styled from "@emotion/styled";
import React from "react";

function Footer({ footer }) {
  return (
    <FooterContainer footer={footer}>
      <div className="footer-content">
        <div className="footer">
          <span>로그인</span> <div className="divider" />{" "}
          <span>전체서비스</span>
        </div>
        <div className="footer">
          <span>이용정책</span> <div className="divider" />{" "}
          <span>MY플레이스 고객센터</span>
          <div className="divider" /> <span>신고센터</span>{" "}
          <div className="divider" />
          <span>공지사항</span>
        </div>
        <div className="footer">
          <span>&copy; 한유정 janhold@naver.com</span>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: ${(props) => (props.footer ? "" : "none")};
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  background-color: #f9f9f9;
  padding: 42px 0 36px;
  margin: 0 auto;
  .footer-content {
    color: #8f8f8f;
    font-size: 8px;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer {
    display: flex;
    align-items: center;
  }
  span {
    margin: 0 10px;
  }
  .divider {
    width: 2px;
    height: 1rem;
    background-color: #dedede;
  }
`;
