"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/svgs/Logo.svg";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "Services", "Our Team", "Contact Us", "FAQs"];
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    }
  }, []);

  return (
    <StyledNavbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      justify="center"
      style={{
        borderBottom: currentPath.startsWith("/services")
          ? "1px solid #00000038"
          : "",
      }}
    >
      <StyledNavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <motion.NavbarBrand
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 0.8,
        //   ease: [0.6, -0.05, 0.01, 0.99],
        // }}
        >
          <Image src={Logo} alt="Logo" width={58} height={58} />
        </motion.NavbarBrand>
      </StyledNavbarItem>

      <motion.NavbarContent
        className="hidden sm:flex gap-14"
        justify="end"
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 0.8,
        //   ease: [0.6, -0.05, 0.01, 0.99],
        // }}
      >
        <StyledCustomNavItem>
          <Link
            href="/"
            style={{
              color: currentPath === "/" ? "#fff" : "#0e0c0c",
              borderBottom: currentPath.startsWith("/services")
                ? "1px solid #00000038"
                : "#a1131338",
            }}
          >
            Home
          </Link>
        </StyledCustomNavItem>
        <StyledCustomNavItem>
          <ScrollLink
            style={{
              color: currentPath === "/" ? "#fff" : "",
              borderBottom: currentPath.startsWith("/services")
                ? "1px solid #00000038"
                : "",
            }}
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Services
          </ScrollLink>
        </StyledCustomNavItem>
        <StyledCustomNavItem>
          <ScrollLink
            style={{
              color: currentPath === "/" ? "#fff" : "",
              borderBottom: currentPath.startsWith("/services")
                ? "1px solid #00000038"
                : "",
            }}
            to="ourteam"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Our Team
          </ScrollLink>
        </StyledCustomNavItem>
        <StyledCustomNavItem>
          <ScrollLink
            style={{
              color: currentPath === "/" ? "#fff" : "",
              borderBottom: currentPath.startsWith("/services")
                ? "1px solid #00000038"
                : "",
            }}
            to="contactus"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Contact Us
          </ScrollLink>
        </StyledCustomNavItem>
        <StyledCustomNavItem>
          <ScrollLink
            style={{
              color: currentPath === "/" ? "#fff" : "",
              borderBottom: currentPath.startsWith("/services")
                ? "1px solid #00000038"
                : "",
            }}
            to="faqs"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            FAQs
          </ScrollLink>
        </StyledCustomNavItem>
      </motion.NavbarContent>

      <MobNavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full mob-link"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </MobNavbarMenu>
    </StyledNavbar>
  );
};
export default NavbarComponent;

const StyledNavbar = styled(Navbar)`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff2e;
  backdrop-filter: blur(5px);
  header {
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
`;

const StyledNavbarItem = styled(NavbarContent)`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  gap: 3rem;
`;

const StyledCustomNavItem = styled(NavbarItem)`
  a {
    &:hover {
      cursor: pointer;
    }
  }
`;
const MobNavbarMenu = styled(NavbarMenu)`
  margin-top: 2rem;
  gap: 30px;
  padding-top: 4rem;
  .mob-link {
    font-size: 40px;
    color: #000 !important;
  }
`;
