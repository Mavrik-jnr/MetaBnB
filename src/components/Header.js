import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import LogoImg from "../images/Logo.svg";

function Header() {
  return (
    <FlexHeader>
      <img style={{ flexShrink: 1 }} src={LogoImg} alt="Logo" />
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/place-to-stay">Place to stay</NavLink>
        <NavLink>NFTs</NavLink>
        <NavLink>Community</NavLink>
      </Links>
      <Button style={{ flexShrink: 1 }} type="primary">
        Connect Wallet
      </Button>
    </FlexHeader>
  );
}

export default Header;

const FlexHeader = styled.header`
  display: flex;

  align-items: center;

  width: 86%;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //To be adjusted, after screen margin
  gap: clamp(8px, 3vw, 48px);
  flex: 1;
  flex-shrink: 1;
`;
