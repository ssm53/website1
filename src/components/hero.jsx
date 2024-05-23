import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledSection className="bg-[url('/svgs/edited.png')] h-screen ">
      <StyledHeadingContainer className="flex-col text-dark">
        <h2 className="font-normal text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          Health Is
        </h2>
        <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          LOVE, COMPASSION
        </h2>
        <h2 className="font-normal text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          AND CARE
        </h2>
      </StyledHeadingContainer>
    </StyledSection>
  );
};

export default Hero;

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 5rem;
  background-repeat: no-repeat;
  /* background-image: url(""); */
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    align-items: center;
    padding-bottom: 0;
    height: 70vh;
  }
`;
const StyledHeadingContainer = styled.div`
  padding-left: 5.5rem;
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 768px) {
    padding-left: 0;
  }
  h2 {
    line-height: 5.5rem;
    @media (max-width: 768px) {
      line-height: 1.5;
      padding-left: 5px;
    }
  }
`;
