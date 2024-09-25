"use client";
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      bg="dark"
      variant="dark"
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['/about', '/projects-display', '/contact'].map((href, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: '#ffcc00' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={href} onClick={() => setExpanded(false)}>
                  <Nav.Link as="span" className="nav-item">
                    {
                      href === '/' ? 'Home'
                      : href === '/projects-display' ? 'Projects'
                      : href.slice(1).charAt(0).toUpperCase() + href.slice(2)
                    }
                  </Nav.Link>
                </Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;