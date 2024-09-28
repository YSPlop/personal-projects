"use client";
import React from "react";  
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import BentoCard from "@/components/BentoCard/BentoCard";
import Link from "next/link";

const Navigation = () => {  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home', imageSrc: '/nav-bar/home.jpg' }, // Replace with your actual image paths
    { href: '/projects-display', label: 'Projects', imageSrc: '/nav-bar/projects.webp' },
    { href: '/contact', label: 'Contact', imageSrc: '/nav-bar/contact-me.gif' },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      className={isMenuOpen ? 'backdrop-blur-lg bg-opacity-80' : ''}
      style={{ transition: 'background-color 0.3s ease', justifyContent: 'center' }} // Center the content horizontally
      isBordered
    >      

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4 mx-auto" justify="center">
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

      {/* Navbar Menu Toggle for mobile */}
      <NavbarContent className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="bg-black/30 text-white sm:hidden">
        {navLinks.map(({ href, label, imageSrc }, index) => (
          <NavbarMenuItem key={`${href}-${index}`}>
            <BentoCard href={href} label={label} imageSrc={imageSrc} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;