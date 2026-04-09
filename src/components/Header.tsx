'use client';

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }

  return (
    <header className={`w-full transition-all duration-300 ${scrolled ? "scrolled" : ""}`}>
      <Navbar expand="lg" className="w-full">
        <Container className="w-full px-4 sm:px-6 lg:px-8">
          <Navbar.Brand href="/" className="font-bold text-lg sm:text-xl">Mon Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
            <Nav className="ms-auto flex flex-col lg:flex-row gap-2 lg:gap-0">
              <Nav.Link 
                href="#home" 
                className={`navbar-link px-3 sm:px-4 py-2 sm:py-0 text-sm sm:text-base ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={`navbar-link px-3 sm:px-4 py-2 sm:py-0 text-sm sm:text-base ${activeLink === 'skills' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={`navbar-link px-3 sm:px-4 py-2 sm:py-0 text-sm sm:text-base ${activeLink === 'projects' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}