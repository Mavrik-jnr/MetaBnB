import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./components/Button";
import Header from "./components/Header";
import { HeroFlex, HeroSection } from "./styled-components/Layout.styles";
import hero1 from "./images/hero/hero1.svg";
import hero2 from "./images/hero/hero2.svg";
import hero3 from "./images/hero/hero3.svg";
import hero4 from "./images/hero/hero4.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrollH, setscrollH] = useState();
  const handleScroll = () => {
    setscrollH(window.scrollY);
  };
  const updatePosition = () => {
    setscrollH(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("", handleScroll, { passive: true });
    // window.onscroll(screenX)
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AppBody>
      <HeaderWrapper scrollH={scrollH}>
        <Header />
      </HeaderWrapper>
      <HeroSection>
        <div className="App">
          <HeroFlex>
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </h1>
            <HeroImageWrapper className="">
              <img src={hero1} alt="" />
              <img src={hero2} alt="" />
              <img src={hero3} alt="" />
              <img src={hero4} alt="" />
            </HeroImageWrapper>
          </HeroFlex>
          <a href="/">Hello</a>
          <Link to="/com">Hell</Link>
          <Button type="primary">Connect Wallet</Button>
        </div>
      </HeroSection>
    </AppBody>
  );
}

export default App;

const AppBody = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
`;

const HeaderWrapper = styled.div`
  position: ${(props) => (props.scrollH > 21.5 ? "sticky" : "relative")};
  top: ${(props) => (props.scrollH > 21.5 ? "0px" : "21.5px")};
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.scrollH > 21.5 ? "0px 1px 4px 1px #3333" : "0px 0px 0px 0px"};
`;
const HeroImageWrapper = styled.div``;
