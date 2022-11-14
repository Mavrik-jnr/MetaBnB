import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Button, { PrimaryButton } from "./Button";
import LogoImg from "../images/Logo.svg";

function Header({ setModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setMobile(window.innerWidth);
      });
    };
  }, [mobile]);

  return (
    <FlexHeader>
      {isMenuOpen && (
        <MenuBar mobile={mobile}>
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/place-to-stay"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Place to stay
          </NavLink>
          <NavLink
            to="/place-to-stay"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            NFTs
          </NavLink>
          <NavLink
            to="/place-to-stay"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Community
          </NavLink>
          {mobile <= 600 && (
            <MenuBarBtn>
              <ButtonH
                style={{ flexShrink: 1 }}
                type="primary"
                onClick={setModal}
              >
                Connect Wallet
              </ButtonH>
            </MenuBarBtn>
          )}
        </MenuBar>
      )}
      <Link to="/">
        <img style={{ flexShrink: 1 }} src={LogoImg} alt="Logo" />
      </Link>
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/place-to-stay">Place to stay</NavLink>
        <NavLink to="/place-to-stay">NFTs</NavLink>
        <NavLink to="/place-to-stay">Community</NavLink>
      </Links>

      <MobileMenuWrapper>
        {mobile >= 600 && (
          <div className="btn">
            <ButtonH
              style={{ flexShrink: 1 }}
              type="primary"
              onClick={() => {
                setModal(true);
              }}
            >
              Connect Wallet
            </ButtonH>
          </div>
        )}
        {isMenuOpen ? (
          <CloseIcon
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        ) : (
          <MenuIcon
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        )}
      </MobileMenuWrapper>
    </FlexHeader>
  );
}

export default Header;

const FlexHeader = styled.header`
  display: flex;
  position: relative;

  align-items: center;

  width: 86%;

  @media screen and (max-width: 1175px) {
    justify-content: space-between;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //To be adjusted, after screen margin
  gap: clamp(8px, 3vw, 48px);
  flex: 1;
  flex-shrink: 1;

  @media screen and (max-width: 1175px) {
    display: none;
  }
`;
const MobileMenuWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & svg {
    display: none;
    cursor: pointer;
    font-size: 32px;
    color: #333;
    @media screen and (max-width: 1175px) {
      display: block;
    }
  }
`;

const MenuBar = styled.div`
  display: ${(props) => (props.mobile <= 1175 ? "grid" : "none")};

  position: absolute;
  top: 8.5vh;
  gap: 0px;
  align-items: stretch;
  /* justify-content: center; */
  /* text-align: center; */
  grid-auto-rows: 80px;
  background-color: white;
  z-index: 999;
  width: 300px;
  /* padding: 10px; */
  height: max-content;
  right: -30px;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 2px #3333;
  /* align-items: start; */

  & a {
    display: flex;
    align-items: center;
    margin: 0px;
    padding-top: 0px;
    border-bottom: 1px solid #3333;
    padding-left: 30px;
    /* border-radius: 8px; */
    /* padding-bottom: 30px;  */
    /* height: 80px; */
    &:hover {
      background-color: #ece3ef;
      color: var(--primary);
    }
  }
  & a:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &a:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const MenuBarBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 20px; */

  & button {
    width: 80%;
    padding: 20px;
  }
`;
const ButtonH = styled(PrimaryButton)`
  cursor: pointer;
`;
