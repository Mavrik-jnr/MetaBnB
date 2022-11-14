import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NftCard from "../components/NftCard";
import { Section } from "../styled-components/Layout.styles";
import { NftGrid, NftWrapper } from "./Home";
import aise2 from "../images/NFT/aise 2.png";
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
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
          <NftCard img={aise2} />
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
