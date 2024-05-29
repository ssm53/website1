import React from "react";
import styled from "styled-components";
import { FiMapPin, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Address = () => {
  return (
    <StyledWrapper className="pt-14 px-6 pb-5">
      <StyledAddressContainer className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Malaysia</h2>
          <div className=" pt-4">
            <div className="flex items-center font-bold">
              <FiMapPin className="mr-2" size={20} />
              <p>Location</p>
            </div>
            <p>
              28, Jalan3/109c, Taman Abadi Indah,
              <br /> 58100 Kuala Lumpur
            </p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <MdAccessTime className="mr-2" />
              <p>Opening Hours</p>
            </div>
            <p>Monday-Friday : 9AM - 9PM</p>
            <p>Saturday : 9AM - 5PM</p>
            <p>Sunday : 9AM - 1PM</p>
            <p>Public Holidays: 9AM - 1PM</p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <FiPhone className="mr-2" />
              <p>Phone</p>
            </div>
            <p>0379806422</p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <FiMail className="mr-2" />
              <p>
                <a
                  href="mailto:klinikkeluargadesa@gmail.com"
                  className="blue-hover"
                >
                  Email
                </a>
              </p>
            </div>
            <a
              href="mailto:klinikkeluargadesa@gmail.com"
              className="blue-hover"
            >
              klinikkeluargadesa@gmail.com
            </a>
          </div>
          {/* <div className=" pt-6 ">
            <div className="flex items-center font-bold">
              <FaWhatsapp className="mr-2" />
              <p>
                <a href="https://wa.me/+60123397028" className="blue-hover">
                  WhatsApp
                </a>
              </p>
            </div>
            <a href="https://wa.me/+60123397028" className="blue-hover">
              +60123397028
            </a>
          </div> */}
        </div>
      </StyledAddressContainer>
    </StyledWrapper>
  );
};

export default Address;
const StyledWrapper = styled.div`
  width: 90%;
`;
const StyledAddressContainer = styled.div`
  margin: 0 auto;

  .blue-hover:hover {
    color: #007bff;
  }
`;
