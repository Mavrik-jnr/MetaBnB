import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 86%;
  /* max-width: 1240px; */
`;
export const HeroSection = styled(Section)`
  /* display: flex; */

  /* align-items: flex-start; */
  /* justify-content: center; */
  padding-top: clamp(100px, 11vw, 160px);
  height: 100vh;
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
