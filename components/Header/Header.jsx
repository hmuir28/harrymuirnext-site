import React from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

import styles from './Header.module.css';

const Header = ({ contactEmail }) => {
  return (
    <header className={styles.headerContainer}>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link
            className={styles.navbarLink}
            to="/"
          >
            Harry Muir
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.rightSide}>
            <Nav>
              <Link 
                className={`${styles.navbarLink} nav-link`}
                to="about"
              >
                Resume
              </Link>
            </Nav>
            <Nav.Link
              className={styles.navbarLink}
              href={`mailto:${contactEmail}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
