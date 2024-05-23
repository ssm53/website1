import React from "react";
import styled from "styled-components";
import { FiMapPin, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";

const Address = () => {
  return (
    <StyledWrapper className="pt-14 px-6 pb-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">United States</h2>
          <div className=" pt-4">
            <div className="flex items-center font-bold">
              <FiMapPin className="mr-2" size={20} />
              <p>Location</p>
            </div>
            <p>
              4517 Washington Ave. Manchester,
              <br /> Kentucky 39495
            </p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <FiPhone className="mr-2" />
              <p>Phone</p>
            </div>
            <p>123-456-7890</p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <FiMail className="mr-2" />
              <p>Email</p>
            </div>
            <p>example@example.com</p>
          </div>
          <div className=" pt-6">
            <div className="flex items-center">
              <FiMessageSquare className="mr-2" />
              <p>WhatsApp</p>
            </div>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Address;
const StyledWrapper = styled.div`
  width: 100%;
  background-color: #f1f1f1;
`;
