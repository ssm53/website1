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
          className="accordian"
          key="1"
          aria-label="Accordion 1"
          title="Do you accept new patients?"
        >
          {defaultContent}
        </AccordionItem>
      </StyledAccordion>
    </StyledWrapper>
  );
};

export default FAQS;
const StyledWrapper = styled.div`
  width: 93%;
  margin: 0 auto;
  padding: 0;
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  box-shadow: -2px 4px 10px -1px rgba(0, 0, 0, 0.1);
  padding: 0 2rem;

  .text-default-400 {
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    font-size: 30px;
  }
  .accordian {
    section {
      width: 95%;
      color: rgba(102, 102, 102, 1);
      padding-bottom: 2rem;
    }
  }
`;