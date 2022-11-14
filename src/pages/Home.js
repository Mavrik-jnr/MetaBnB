import React from "react";
import styled from "styled-components";
import NftCard from "../components/NftCard";
import Search from "../components/Search";
import {
  HeroFlex,
  HeroSection,
  Section,
} from "../styled-components/Layout.styles";
import Banner from "../components/Banner";
import mbt from "../images/banner/mbt.svg";
import mm from "../images/banner/mm.svg";
import os from "../images/banner/os.svg";
import hero1 from "../images/hero/hero1.svg";
import hero2 from "../images/hero/hero2.svg";
import hero3 from "../images/hero/hero3.svg";
import hero4 from "../images/hero/hero4.svg";
import aise2 from "../images/NFT/aise 2.png";
function Home() {
  return (
    <>
      <HeroSection>
        <HeroFlex>
          <HeroTextWrapper>
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </h1>
            <h3>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </h3>
            <Search />
          </HeroTextWrapper>
          <HeroImageWrapper className="">
            <Left>
              <img src={hero1} alt="" />
              <img src={hero3} alt="" />
            </Left>

            <Right>
              <img src={hero2} alt="" />
              <img src={hero4} alt="" />
            </Right>
          </HeroImageWrapper>
        </HeroFlex>
      </HeroSection>
      <Companies>
        <img src={mbt} alt="" />
        <img src={mm} alt="" />
        <img src={os} alt="" />
      </Companies>
      <NftWrapper>
        <h2>Inspiration for your next adventure</h2>
        <NftGrid>
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
        </NftGrid>
      </NftWrapper>
      <Banner />
    </>
  );
}

export default Home;

const HeroImageWrapper = styled.div`
  display: flex;
  align-self: center;
  position: relative;
  bottom: -30px;
  flex-shrink: 1;
  & img {
    width: clamp(100px, 16vw, 250px);
  }
  gap: 8px;
  @media screen and (max-width: 1175px) {
    justify-content: center;
    gap: 24px;

    & img {
      width: 35vw;
    }
  }
`;
const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  top: 10px;
  gap: 8px;
  @media screen and (max-width: 1175px) {
    top: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -80px;
  gap: 8px;
  @media screen and (max-width: 1175px) {
    top: -50px;
  }
`;

const HeroTextWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  gap: 48px;
  /* align-items: flex-start; */
`;
const Companies = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  background-color: var(--primary);
  width: 100%;
  gap: 24px;
  padding: 10px 100px;
  & img {
    width: clamp(100px, 20vw, 100%);
  }
`;

export const NftGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 24px;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
  align-content: center;
  justify-items: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const NftWrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  margin-top: 60px;
  box-sizing: border-box;
  /* width: 100%; */
  & h2 {
    text-align: center;
  }
`;
