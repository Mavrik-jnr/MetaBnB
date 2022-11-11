import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import LogoImg from "../images/Logo.svg";

function Header() {
  return (
    <FlexHeader>
      <img src={LogoImg} alt="Logo" />
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/place-to-stay">Place to stay</NavLink>
        <NavLink>NFTs</NavLink>
        <NavLink>Community</NavLink>
      </Links>
      <Button type="primary">Connect Wallet</Button>
    </FlexHeader>
  );
}

export default Header;

const FlexHeader = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0, 2px, 2px, 1px, #333;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-grow: 1;
`;
