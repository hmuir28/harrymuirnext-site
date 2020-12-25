import React from 'react';

import styles from './Footer.module.css';

const Footer = ({ position = null }) => (
  <footer
    className={styles.footerContainer}
    style={{ position }}
  >
    <div className="max-w-md">
      <div md={8} className={['mx-auto', 'text-center']}>
        <span>
          ©2020 Made by <b>Harry Muir.</b>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
