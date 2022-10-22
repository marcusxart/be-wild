import React from "react";
import styled from "styled-components";

import bgImg from "../assets/home-background.png";

const Container = styled.div`
  img {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    object-fit: cover;
  }
`;

const BackgroundImage = ({ children }) => {
  return (
    <Container>
      <img src={bgImg} alt="" />
      {children}
    </Container>
  );
};

export default BackgroundImage;
