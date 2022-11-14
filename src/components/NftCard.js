import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
        <div>
          <p>Desert king</p>
          <p>1MBT per night</p>
        </div>
        <div>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
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
  width: clamp(245px, 100%, 350px);
  height: 372px;
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
  & svg {
    font-size: 25px;
    /* background-color: #d7d7d7; */
    fill: green;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 10px;
  & :first-child,
  & :last-child {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
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
