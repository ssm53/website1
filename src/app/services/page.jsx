"use client";
import React from "react";
import styled from "styled-components";
const ServicesPage = ({ currentPage }) => {
  return (
    <StyledWrapper currentPage={currentPage}>
      <div
        className="container mx-auto"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div
          className="flex flex-wrap justify-center"
          style={{ width: "100%" }}
        >
          <div className="text-sec md:w-1/2">
            <div>
              <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
              <ul>
                <StyledListWrapper className="mb-2 py-3 ">
                  Lorem ipsum dolor sit amet, consectetur adipi
                </StyledListWrapper>
                <StyledListWrapper className="mb-2 py-3">
                  Nulla nec dolor non libero iaculis suscipit.scing
                  elit.iberodolor
                </StyledListWrapper>
                <StyledListWrapper className="mb-2 py-3">
                  Nulla nec dolor non libero iaculis suscipit. Integer nec justo
                  Nulla nec dolor non libero iaculis suscipit. nec elit dictum
                  lacinia.
                </StyledListWrapper>
                <StyledListWrapper className="mb-2 py-3">
                  Sed fermentum sapien et libero molestie, at fermentum
                </StyledListWrapper>
                <StyledListWrapper className="mb-2 py-3">
                  Vestibulum hendrerit nulla ut nulla interdum, et commodo lacus
                  tincidunt. velit tincidunt. nulla interdum, et commodo lacus
                  Vestibulum
                </StyledListWrapper>
              </ul>
            </div>
          </div>
          <div className=" image-sec md:w-1/2 flex justify-end">
            <img src="./svgs/doctors.jpg" alt="Service Image" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ServicesPage;

const StyledWrapper = styled.div`
  padding: 7rem 0;
  @media (max-width: 768px) {
    .flex-wrap {
      flex-direction: column;
    }
    .text-sec {
      width: 100%;
      text-align: center;
    }
    .image-sec {
      order: -1;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const StyledListWrapper = styled.li`
  font-size: 20px;
  font-weight: 400;
`;
