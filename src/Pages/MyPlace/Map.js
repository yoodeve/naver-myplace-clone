import React from "react";
import { NavermapsProvider } from "react-naver-maps";
import { Container as MapDiv, NaverMap } from "react-naver-maps";

function Map(props) {
  return (
    <NavermapsProvider ncpClientId="waykahjifs">
      <MapDiv
        style={{
          height: 188,
        }}
      >
        <NaverMap />
      </MapDiv>
    </NavermapsProvider>
  );
}

export default Map;
