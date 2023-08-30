import React from "react";
import FeedHeader from "./FeedHeader";
import FeedSubHeader from "./FeedSubHeader";
import FeedContent from "./FeedContent";

function Feed(props) {
  return (
    <>
      <FeedHeader />
      <FeedSubHeader />
      <FeedContent />
      <FeedContent />
      <FeedContent />
      <FeedContent />
    </>
  );
}

export default Feed;
