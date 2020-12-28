import React from 'react';

import styles from './AboutMe.module.css';

const AboutMe = ({ aboutMeTitle, aboutMeDescription }) => (
  <section className={styles.aboutMeContainer}>
    <h1 className={styles.header1}>{aboutMeTitle}</h1>
    <p className={styles.parragraph}>{aboutMeDescription}</p>
  </section>
);

export default AboutMe;
