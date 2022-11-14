import React from "react";
import styled from "styled-components";
import { BannerWrapper } from "../styled-components/Layout.styles";
import Button from "./Button";
import collage from "../images/CTA/collage.png";

function Banner() {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerText>
          <h2>Metabnb NFTs</h2>
          <h4>
            Discover our NFT gift collection. Loyal customers gets amazing gift
            cards which are traded as NFTs gives our customer access to loads of
            our exclusive services
          </h4>
          <Button>Learn more</Button>
        </BannerText>
        <BannerImageStew>
          <img src={collage} alt="" />
        </BannerImageStew>
      </BannerContent>
    </BannerWrapper>
  );
}

export default Banner;
const BannerContent = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  width: 86%;
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: space-between;
  @media screen and (max-width: 1175px) {
    flex-direction: column;
  }
`;
const BannerText = styled.div`
  width: 40%;
  & h2 {
    color: white;
  }
  & h4 {
    /* color: black; */
    margin-top: 35px;
    line-height: 35px;
  }
  & button {
    margin-top: 60px;
  }
  @media screen and (max-width: 1175px) {
    width: 70%;
  }
`;
const BannerImageStew = styled.div`
  display: flex;

  justify-content: center;

  height: 100%;

  @media screen and (max-width: 1175px) {
    align-self: flex-end;
  }
  @media screen and (max-width: 900px) {
    align-items: flex-end;
    padding: 0px;
  }
  & img {
    width: clamp(350px, 53vw, 700px);
  }
`;
