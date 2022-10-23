import React from "react";
import styled from "styled-components";
// import GIF from "../assets/Home-Video.mp4";
import img from "../assets/home.gif";

const VideoContainer = styled.div`
  width: 100%;
  /* video {
    width: 100%;
    height: auto;
  } */
  img {
    width: 100%;
    position: static;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      {/* <video src={GIF} type="video/mp4" autoPlay muted loop /> */}
      <img src={img} alt="" width={"100%"} />
    </VideoContainer>
  );
};

export default CoverVideo;
