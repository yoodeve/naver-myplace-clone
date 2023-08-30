import InfoBox from "Components/InfoBox";
import React from "react";

function Visit(props) {
  const title = (
    <>
      <span>영수증/카드내역 인증, 예약, 주문</span>한 <br /> 장소가 나의 기록이
      됩니다.
    </>
  );
  const subtitle = "방문했던 곳을 한 눈에 모아보세요.";
  const gradient = "142deg, #55abab, #6fc2ac";
  const imgSrc = "/images/content-sub-image.png";
  return (
    <InfoBox
      title={title}
      subtitle={subtitle}
      gradient={gradient}
      imgSrc={imgSrc}
    />
  );
}

export default Visit;
