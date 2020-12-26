import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isToggleClicked, setIsToggleClicked] = useState(false);
  const handleMobileToggleClick = () => setIsToggleClicked(!isToggleClicked);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <div className={styles.brandTitle}>
          <Link
            className={styles.navbarLink}
            href="/"
          >
            Harry Muir
          </Link>
        </div>
        <a onClick={handleMobileToggleClick} className={styles.toggleButton}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </a>
        <div className={`${styles.navbarLinks} ${isToggleClicked ? styles.showNavbarLinks : ''}`}>
          <ul>
            <li>
              <Link
                className={styles.navbarLink}
                href="/resume"
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                className={styles.navbarLink}
                href={`mailto:${process.env.CONTACT_EMAIL}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
