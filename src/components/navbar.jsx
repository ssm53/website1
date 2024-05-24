"use client";
import React from "react";
import styled from "styled-components";

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
import Image from "next/image";
import Logo from "../../public/svgs/Logo.svg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Services", "Our Team", "Contact Us", "GFAQs"];

  return (
    <StyledNavbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      justify="center"
    >
      <StyledNavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={Logo} alt="Logo" width={58} height={58} />
          <p className="text-white font-bold pl-3"> LOGO</p>
        </NavbarBrand>
      </StyledNavbarItem>

      <NavbarContent className="hidden sm:flex gap-14" justify="end">
        <NavbarItem>
          <Link className="text-white" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            FAQs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
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
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* gap: 5; */
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
