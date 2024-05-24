import React from "react";
import styled from "styled-components";
const Headings = (props) => {
  return (
    <div className="flex flex-col items-center pt-14 pb-8">
      <StyledHeading className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-center">
        {props.title}
        <img
          src="./svgs/verctor.png"
          alt=""
          className="py-2"
          style={{ width: "100%" }}
        />
      </StyledHeading>
      <p className="text-center pt-10 " style={{ width: "70%" }}>
        {props.description}
      </p>
    </div>
  );
};

export default Headings;

const StyledHeading = styled.h2``;
