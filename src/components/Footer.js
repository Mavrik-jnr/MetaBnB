import React from "react";
import styled from "styled-components";
import LogoF from "../images/LogoF.svg";
import facebook from "../images/socials/facebook.svg";
import twitter from "../images/socials/twitter.svg";
import instagram from "../images/socials/instagram.svg";
import cc from "../images/socials/copyright.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrapper>
      <Branding>
        <img src={LogoF} alt="Metabnb" />

        <BottomBranding>
          <Socials>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </Socials>
          <Copy>
            <img src={cc} alt="" />
            <p>2022 Metabnb</p>
          </Copy>
        </BottomBranding>
      </Branding>

      <FooterLinks>
        <FooterSubLinks>
          <h4>Community</h4>
          <div>
            <Link>NFT</Link>
            <Link>Tokens</Link>
            <Link>Landlords</Link>
            <Link>Discord</Link>
          </div>
        </FooterSubLinks>
        <FooterSubLinks>
          <h4>Places</h4>
          <div>
            <Link>Castle</Link>
            <Link>Farms</Link>
            <Link>Beach</Link>
            <Link>Learn more</Link>
          </div>
        </FooterSubLinks>
        <FooterSubLinks>
          <h4>About us</h4>
          <div>
            <Link>Road map</Link>
            <Link>Creators</Link>
            <Link>Career</Link>
            <Link>Contact us</Link>
          </div>
        </FooterSubLinks>
      </FooterLinks>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  /* justify-content: center; */
  gap: 10%;
  padding-left: 113px;
  padding-top: 58px;
  padding-bottom: 37px;
  padding-right: 32px;
  background: #1d1d1e;
  height: max-content;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
    padding-left: 30px;
  }
`;

const Branding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const BottomBranding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
const Copy = styled.div`
  display: flex;
  gap: 10px;

  & p {
    color: #f7f7f7;
  }
`;
const Socials = styled.div`
  display: flex;
  width: 18px;
  gap: 40px;
  & img {
    cursor: pointer;
    &:hover {
      fill: var(--primary);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;

  gap: clamp(50px, 10vw, 217px);
  width: min(100%, 1000px);
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    /* flex-direction: row; */

    /* gap: 100px; */
  }
`;
const FooterSubLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 23px;
  & h3 {
    font-weight: 700;
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }
  & a {
    font-size: 14px;
    color: #f1f3f9;
  }
`;
