"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <div className="bg-gray-200" style={{ width: "100%" }}>
      <footer
        className="bg-gray-200 py-8"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <StyledWrapper className="flex justify-between mx-auto">
          <div className="w-1/3" style={{ width: "30%" }}>
            <div className="flex flex-col justify-start">
              <div className="flex">
                <img
                  src="/svgs/Logo.svg"
                  alt="Logo"
                  className="w-10 h-10 mr-2"
                />
                <h2 className="text-lg font-semibold">Title</h2>
              </div>

              <p className="pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt sint repellendus cum nisi mollitia. Quisquam, vel
                corporis repellat ab quam veritatis illo ullam nihil ipsam autem
                id possimus consequatur iure.
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="w-1/3 " style={{ width: "20%" }}>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="pt-8">
              <li className="">
                <a href="#" className="text-blue-500">
                  Services
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="text-blue-500">
                  Our Team
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="text-blue-500">
                  Contact Us
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="text-blue-500">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-1/3 " style={{ width: "15%" }}>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex pt-8">
              <a href="#">
                <FaFacebook className="w-8 h-8 mr-2" />
              </a>
              <a href="#">
                <FaTwitter className="w-8 h-8 mr-2" />
              </a>
              <a href="#">
                <FaLinkedin className="w-8 h-8 mr-2" />
              </a>
              <a href="#">
                <FaInstagram className="w-8 h-8 mr-2" />
              </a>
            </div>
          </div>
        </StyledWrapper>
      </footer>
    </div>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
