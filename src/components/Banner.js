import React from "react";
import styled from "styled-components";
import { BannerWrapper } from "../styled-components/Layout.styles";
import Button from "./Button";
import collage from "../images/CTA/collage.svg";
import left from "../images/CTA/s3.svg";
import top from "../images/CTA/s4.svg";
import right from "../images/CTA/susan 4.svg";

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
          {/* <img src={top} alt="" />
          <img src={right} alt="" /> */}
        </BannerImageStew>
      </BannerContent>
    </BannerWrapper>
  );
}

export default Banner;
const BannerContent = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  width: 86%;
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
`;
const BannerImageStew = styled.div`
  display: flex;

  justify-content: center;
  /* background-color: red; */
  height: 100%;

  /* po0 */
  /* width: 100%; */

  & img {
    /* position: absolute; */
    width: 80%;
  }
`;