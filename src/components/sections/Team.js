import React from "react";
import styled from "styled-components";

import img1 from "../../assets/team/Arc.jpg";
import img2 from "../../assets/team/Bronze.jpg";
import img3 from "../../assets/team/Carr.jpg";
import img4 from "../../assets/team/Destiny.jpg";
import img5 from "../../assets/team/Noaa.jpg";
import img6 from "../../assets/team/Paul.jpg";

import ConfettiComponent from "../Confetti";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 0 0 1rem;
  overflow: hidden;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 5px solid ${(props) => props.theme.body};
  border-radius: 20px;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 5px solid ${(props) => props.theme.body};
  /* padding: 1rem; */
  cursor: pointer;
  img {
    width: 100%;
    height: 110%;
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.9)`};
  font-weight: 400;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title> Team </Title>
      <Container>
        <MemberComponent img={img3} name="Carr" position="founder" />
        <MemberComponent img={img1} name="Arcc" position="co-founder" />
        <MemberComponent img={img5} name="Noaa" position="co-founder" />
        <MemberComponent img={img4} name="Destiny" position="Admin" />
        <MemberComponent img={img6} name="Paul" position="Community Manager" />
        <MemberComponent img={img2} name="Bronze" position="Collab Manager" />
      </Container>
    </Section>
  );
};

export default Team;
