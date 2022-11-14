import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import MM from "./images/Modal/Fox.svg";
import WC from "./images/Modal/WalletConnect.svg";
import { ChevronRight } from "@mui/icons-material";
import Footer from "./components/Footer";
import PlaceToStay from "./pages/PlaceToStay";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [scrollH, setscrollH] = useState();
  const [isModalOpen, setModal] = useState(false);

  const handleScroll = () => {
    setscrollH(window.scrollY);
  };
  const updatePosition = () => {
    setscrollH(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // window.onscroll(screenX)
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <AppBody>
      <HeaderWrapper scrollH={scrollH}>
        <Header setModal={setModal} />
      </HeaderWrapper>
      {isModalOpen && (
        <ModalWrapper>
          <Modal>
            <ModalHeader>
              <h3>Connect Wallet</h3>
              <CloseIcon
                onClick={() => {
                  setModal(false);
                }}
              />
            </ModalHeader>
            <ModalWalletWrapper>
              <p>Choose your preferred wallet:</p>
              <ModalWallet>
                <div className="div">
                  <img src={MM} alt="Metamask" />
                  <h4>Metamask</h4>
                </div>
                <ChevronRight />
              </ModalWallet>
              <ModalWallet>
                <div className="div">
                  <img src={WC} alt="Metamask" />
                  <h4>WalletConnect</h4>
                </div>
                <ChevronRight />
              </ModalWallet>
            </ModalWalletWrapper>
          </Modal>
        </ModalWrapper>
      )}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>

      <Footer />
    </AppBody>
  );
}

export default App;

const AppBody = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 200vh; */
`;

const HeaderWrapper = styled.div`
  position: ${(props) => (props.scrollH > 21.5 ? "fixed" : "absolute")};
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
  z-index: 999;
`;

const Modal = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;

  /* position: fixed; */
  z-index: 1000;

  background-color: white;
  width: min(80%, 600px);
  height: min(40%, max-content);
  border-radius: 16px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid #cfd8dc;
  padding: 24px 32px;
  & h3 {
    font-weight: 700;
    color: #333333;
  }
  & svg {
    cursor: pointer;
    font-size: 24px;
    color: #333333;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;

  background-color: #4040404d;
  width: 100vw;
  height: 100vh;
`;
const ModalWalletWrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 32px;
`;
const ModalWallet = styled.div`
  display: flex;
  border: 1px solid #cfd8dc;
  padding: 12px 20px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #959da6;
  }
  &:focus {
    background-color: #333;
  }
  & :first-child {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  & h4 {
    font-weight: 600;
    color: black;
  }
  & svg {
    /* width: 5%; */
    color: #959da6;
    font-size: 32px;
  }
`;
