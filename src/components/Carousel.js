import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from "../assets/Nfts/NFT-1.png";
import img2 from "../assets/Nfts/NFT-2.png";
import img3 from "../assets/Nfts/NFT-3.png";
import img4 from "../assets/Nfts/NFT-4.png";
import img5 from "../assets/Nfts/NFT-5.png";
import img6 from "../assets/Nfts/NFT-6.png";
import img7 from "../assets/Nfts/NFT-7.png";
import img8 from "../assets/Nfts/NFT-8.png";
import img9 from "../assets/Nfts/NFT-9.png";
import img10 from "../assets/Nfts/NFT-10.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
  }
  @media (max-width: 64em) {
    width: 50vw;
    height: 50vh;
    .swiper-button-prev,
    .swiper-button-next {
      width: 3rem;
    }
  }

  @media (max-width: 40em) {
    width: 65vw;
    height: 45vh;
    .swiper-button-prev,
    .swiper-button-next {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={img1} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img6} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img7} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img8} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img9} alt="The Weridos" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img10} alt="The Weridos" />{" "}
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
