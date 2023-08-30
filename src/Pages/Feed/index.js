import React from "react";
import FeedHeader from "./FeedHeader";
import FeedSubHeader from "./FeedSubHeader";
import FeedContent from "./FeedContent";

function Feed(props) {
  const feedArray = [
    {
      nickname: "랄랄",
      hasReviewedCount: 122,
      followerCount: 20,
      reviewText:
        "❤️제주에서 먹었던 브런치 중에 최고였던 곳❤️ 영수증 고이고 받아왔지만,,, 이제서야 쓰게 된 🥹🥹 먹고 싶어서 사진 찾아보다가 아!!    맞아!!! 영수증리뷰!!!하고 ㅎㅎㅎ 시저샐러드는 정말 최고고,,, 말뭐메뉴🩵    여기서 시저 안시키 면 큰일남‼️‼️‼️‼️ 파스타도 커피도 너무 맛있었고    식기나 매장 분위기 때문에 맛을 더 음미하면서 먹을 수 있었...",
      visitDate: "8.5",
      shopname: "청수미방",
      foodType: "양식",
      shopLocation: "제주특별자치도 제주시 한경면",
    },
    {
      nickname: "롤롤",
      hasReviewedCount: 122,
      followerCount: 20,
      reviewText:
        "뭐라고 적어야할까요 내가 이 식당을 가보지 않았지만 정말 맛있어요!✨",
      visitDate: "8.9",
      shopname: "오스테리아어부",
      foodType: "양식",
      shopLocation: "부산광역시 부산진구",
    },
    {
      nickname: "유종종",
      hasReviewedCount: 122,
      followerCount: 20,
      reviewText:
        "유정이가 좋아하는 랜ㄴ덤게임 아진짜 이거 해야하나 아 집중하기싫다",
      visitDate: "4.19",
      shopname: "라라관",
      foodType: "중식",
      shopLocation: "부산광역시 남구",
    },
    {
      nickname: "헤헤",
      hasReviewedCount: 122,
      followerCount: 20,
      reviewText:
        "리뷰를 뭐라고 써야하죠? 이거 쓰면 뭐 더 주나요? 더주세요 제발 돈이라던지",
      visitDate: "9.10",
      shopname: "조방낙지",
      foodType: "한식",
      shopLocation: "부산광역시 동구",
    },
  ];
  return (
    <>
      <FeedHeader />
      <FeedSubHeader />
      {feedArray.map((e) => {
        return (
          <FeedContent
            nickname={e.nickname}
            review={e.hasReviewedCount}
            follower={e.followerCount}
            reviewText={e.reviewText}
            visitDate={e.visitDate}
            shopname={e.shopname}
            foodType={e.foodType}
            shopLocation={e.shopLocation}
          />
        );
      })}
    </>
  );
}

export default Feed;
