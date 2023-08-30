import InfoBox from "Components/InfoBox";
import React from "react";

function Review(props) {
  const title = (
    <>
      정성스레 작성한 <span>리뷰</span><br/>내 리뷰를 모아 만든
      <span>테마리스트</span>
    </>
  );
  const subtitle = '나의 발자취를 소중한 기록으로 남겨보세요.';
  const gradient = '127deg,#717cea 6%,#4b81da 87%';
  const imgSrc = "/images/content-sub-image2.png";
  return <InfoBox title={title} subtitle={subtitle} gradient={gradient} imgSrc={imgSrc} />;
}

export default Review;
