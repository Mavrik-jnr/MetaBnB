import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NftCard from "../components/NftCard";
import { Section } from "../styled-components/Layout.styles";
import { NftGrid, NftWrapper } from "./Home";
import aise2 from "../images/NFT/aise 2.png";
import s1 from "../images/NFT/s1.png";
import s16 from "../images/NFT/s16.png";
import s11 from "../images/NFT/s11.png";
import s5 from "../images/NFT/s5.png";
import druids from "../images/NFT/druids.png";
import dvn from "../images/NFT/dvn.png";
import s2 from "../images/NFT/s2.png";
import aise from "../images/NFT/aise.png";
import druids4 from "../images/NFT/druids 4.png";
import s12 from "../images/NFT/s12.png";
import s8 from "../images/NFT/s8.png";
import susan3 from "../images/NFT/susan3.png";
import susan5 from "../images/NFT/susan5.png";
import susan8 from "../images/NFT/susan8.png";
import s9 from "../images/NFT/s9.png";

import settings from "../images/Modal/setting.svg";
function PlaceToStay() {
  const [prevButton, setprevButton] = useState(null);
  const handleActive = (e) => {
    e.preventDefault();
    e.target.classList.add("active");
    if (prevButton !== null) {
      prevButton.classList.remove("active");
    }
    setprevButton(e.target);
  };
  return (
    <PlaceToStayWrapper>
      <Filter>
        <Link
          to="/place-to-stay/resturant"
          // className={(isActive) => (isActive ? "active" : "not")}
          onClick={(e) => {
            handleActive(e);
          }}
        >
          Resturant
        </Link>
        <Link
          onClick={(e) => {
            handleActive(e);
          }}
        >
          Cottage
        </Link>
        <Link
          onClick={(e) => {
            handleActive(e);
          }}
        >
          Castle
        </Link>
        <Link
          onClick={(e) => {
            handleActive(e);
          }}
        >
          fantast city
        </Link>
        <Link
          onClick={(e) => {
            handleActive(e);
          }}
        >
          Cabins
        </Link>
        <Link
          onClick={(e) => {
            handleActive(e);
          }}
        >
          Off-grid
        </Link>
        <Link
          onClick={(e) => {
            handleActive(e);
          }}
        >
          Farm
        </Link>
        <FilterBtn>
          Location <img src={settings} alt="" />
        </FilterBtn>
      </Filter>
      <NftWrapper2>
        <NftGrid>
          <NftCard img={dvn} />
          <NftCard img={s5} />
          <NftCard img={s16} />
          <NftCard img={s11} />
          <NftCard img={druids} />
          <NftCard img={aise} />
          <NftCard img={s1} />
          <NftCard img={aise2} />
          <NftCard img={s2} />
          <NftCard img={druids4} />
          <NftCard img={s12} />
          <NftCard img={s8} />
          <NftCard img={susan3} />
          <NftCard img={susan8} />
          <NftCard img={susan5} />
          <NftCard img={s9} />
        </NftGrid>
      </NftWrapper2>
    </PlaceToStayWrapper>
  );
}

export default PlaceToStay;

const PlaceToStayWrapper = styled(Section)`
  flex-direction: column;
  padding-top: clamp(150px, 20vw, 216px);
  align-items: center;

  width: 100%;
`;

const NftWrapper2 = styled(NftWrapper)`
  padding-bottom: 100px;
  max-width: 1440px;
`;

const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 86%;
  align-items: center;
  & a {
    padding: 8px;
  }
  .active {
    background-color: #ece3ef;
    color: var(--primary);
  }

  @media screen and (max-width: 1200px) {
    & button {
      margin-left: 0px;
    }
  }
`;
const FilterBtn = styled.button`
  border-radius: 8px;
  display: flex;
  outline: none;
  border: 1px solid #b4b4b4;
  background-color: transparent;
  margin-left: 35px;
  padding: 14px 13px;
  gap: 40px;
`;
