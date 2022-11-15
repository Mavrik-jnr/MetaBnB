import React, { useState } from "react";
import styled from "styled-components";
import heart from "../images/heart.svg";
import ratings from "../images/rating.svg";
function NftCard({ img }) {
  const [like, setLike] = useState(false);
  return (
    <CardWrapper>
      <NftWrapper>
        <img src={img} alt="" />
      </NftWrapper>
      <Favourite>
        <img
          src={heart}
          style={
            like
              ? {
                  filter:
                    "invert(37%) sepia(90%) saturate(2680%) hue-rotate(325deg) brightness(92%) contrast(98%)",
                }
              : {}
          }
          alt="like"
          onClick={() => setLike(!like)}
        />
      </Favourite>
      <Desc>
        <Upper>
          <p>Desert king</p>
          <p>1MBT per night</p>
        </Upper>
        <Lower>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </Lower>
      </Desc>
      <Ratings>
        <img src={ratings} alt="" />
      </Ratings>
    </CardWrapper>
  );
}

export default NftCard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #d7d7d7;
  padding: 16px;
  border-radius: 15px;
  width: clamp(210px, 100%, 300px);
  padding: clamp(0px, 4%, 16px);
  height: clamp(340px, 2vw, 372px);
`;
const Ratings = styled.div`
  margin-top: 9px;
  & img {
    width: 35%;
  }
`;

const Favourite = styled.div`
  position: absolute;

  right: 30px;
  bottom: 85%;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
  gap: 10px;

  & strong {
    margin: 0px;
    padding: 0px;
  }
`;

const Upper = styled.div`
  & :last-child {
    font-size: 12px;
    font-weight: 700;
  }
  & p {
    font-size: 12px;
  }
  /* font-size: clamp(8px, 3vw, 12px); */
  display: flex;
  /* flex-direction: column; */
  gap: 25px;
  justify-content: space-between;
`;
const Lower = styled.div`
  & p {
    font-size: 12px;
  }
  & :last-child {
    text-align: right;
  }
  /* font-size: clamp(8px, 3vw, 12px); */
  display: flex;
  /* flex-direction: column; */
  gap: 30px;
  justify-content: space-between;
`;

const NftWrapper = styled.div`
  height: 265px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`;
