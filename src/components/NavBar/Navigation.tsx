"use client";
import React from "react";  
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

const Navigation = () => {  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects-display', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      className={isMenuOpen ? 'backdrop-blur-lg bg-opacity-80' : ''}
      style={{ transition: 'background-color 0.3s ease' }} // Smooth transition
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map(({ href, label }) => (
          <NavbarItem key={href}>
            <Link href={href} className="relative group text-inherit">
              {label}
              {/* Simple underline on hover */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="bg-black/30 text-white sm:hidden">
        {navLinks.map(({ href, label }, index) => (
          <NavbarMenuItem key={`${href}-${index}`}>
            <Link
              className="w-full"
              href={href}
              size="lg"
              color={index === navLinks.length - 1 ? "danger" : "foreground"}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
