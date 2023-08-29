import React from 'react';
import FeedHeader from './FeedHeader';
import FeedSubHeader from './FeedSubHeader';
import FeedContent from './FeedContent';

function FeedComponent(props) {
  return (
    <>
      <FeedHeader />
      <FeedSubHeader />
      <FeedContent />
    </>
  );
}

export default FeedComponent;