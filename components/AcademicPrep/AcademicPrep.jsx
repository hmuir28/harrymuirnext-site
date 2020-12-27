import React from 'react';

import styles from './AcademicPrep.module.css';

const AcademicPrep = ({ academicPrepTitle, academicPrepDegrees }) => (
  <section className={styles.academicPrepContainer}>
    <h1>{academicPrepTitle}</h1>
    <div className={styles.academicPrepContent}>
      {academicPrepDegrees.map(({ logo, university, career, date }, index) => (
        <div
          className={styles.cardContainer}
          key={index}
        >
          
          <img src={logo} alt="university" />
          <h4>{university}</h4>
          <div>
            <span className={styles.itemValue}>{career}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{date.label}</b></span>
            <span className={styles.itemValue}>{date.value}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AcademicPrep;
