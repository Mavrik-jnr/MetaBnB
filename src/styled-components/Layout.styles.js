import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  width: 86%;
  /* max-width: 1240px; */
`;
export const HeroSection = styled(Section)`
  /* display: flex; */
  position: relative;

  /* align-items: flex-start; */
  /* justify-content: center; */
  padding-top: clamp(150px, 20vw, 216px);
  /* height: 100vh; */
  /* background-color: red; */
`;
export const HeroFlex = styled.div`
  display: flex;
  gap: 100px;
  padding-right: 50px;
  /* justify-content: center; */
  align-items: center;
  /* padding-top: 6px; */
  /* height: 100vh; */
  @media screen and (max-width: 1175px) {
    flex-direction: column;
    padding-right: 0px;
  }
`;

export const BannerWrapper = styled(Section)`
  background-color: var(--primary);
  margin-top: 60px;
  /* height: 100vh; */
  width: 100%;

  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1175px) {
    align-items: stretch;
    justify-content: flex-start;
  }
`;
