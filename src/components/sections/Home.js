import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import RoundTextWhite from "../../assets/Rounded-Text-White.png";
import Loading from "../Loading";

const CoverVideo = lazy(() => import("../CoverVideo"));
const TypeWriterText = lazy(() => import("./TypeWriterText"));

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 90%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 7rem;
  height: 7rem;
  border: 1px solid rgb(${(props) => props.theme.bodyRgba});
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Circle = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgb(${(props) => props.theme.bodyRgba});
  color: rgb(${(props) => props.theme.textRgba});
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <CoverVideo />
          </Suspense>
        </Box>

        <Round>
          <Circle>&#x2193;</Circle>
          <img width={500} height={400} src={RoundTextWhite} alt="NFT" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
