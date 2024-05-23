import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styled from "styled-components";
const FAQS = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <StyledWrapper className="pt-4">
      <StyledAccordion variant="light">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Do you accept new patients?    "
        >
          {defaultContent}
        </AccordionItem>
      </StyledAccordion>
    </StyledWrapper>
  );
};

export default FAQS;
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledAccordion = styled(Accordion)`
  width: 98%;
  box-shadow: 3px 2px 8px 4px rgba(0, 0, 0, 0.1);
  .text-default-400 {
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 20px;
  }
`;
