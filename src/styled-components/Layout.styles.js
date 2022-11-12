import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 86%;
`;
export const HeroSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* padding-top: 216px; */
  height: 100vh;
`;
export const HeroFlex = styled.div`
  display: flex;
  gap: 100px;
  /* justify-content: center; */
  padding-top: 216px;
  height: 100vh;
`;
