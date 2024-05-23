import React from "react";
import styled from "styled-components";
const Headings = (props) => {
  return (
    <div className="flex flex-col items-center pt-20">
      <StyledHeading className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-center">
        {props.title}
      </StyledHeading>
      <p className="text-center pt-10 " style={{ width: "70%" }}>
        {props.description}
      </p>
    </div>
  );
};

export default Headings;

const StyledHeading = styled.h2`
  text-decoration: underline;
`;
