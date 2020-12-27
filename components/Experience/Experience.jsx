import React from 'react';
import styles from './Experience.module.css';

const Experience = ({ experienceTitle, experienceHistorial }) => {
  return (
    <section className={styles.experienceContainer}>
      <h1  className={styles.header1}>{experienceTitle}</h1>
      <div className={styles.experienceContent}>
        {experienceHistorial.map(({
          company,
          description,
          position,
          responsabilities,
          since,
        }, index) => (
          <div
            className={styles.experienceList}
            key={index}
          >
            <h4>{company}</h4>
            <div>
              <span className={styles.itemLabel}><b>{position.label}</b></span>
              <span className={styles.itemValue}>{position.value}</span>
            </div>
            <div>
              <span className={styles.itemLabel}><b>{since.label}</b></span>
              <span className={styles.itemValue}>{since.value}</span>
            </div>
            <div>
              <span className={styles.itemLabel}><b>{description.label}</b></span>
              <span className={styles.itemValue}>{description.value}</span>
            </div>
            <div>
              <span className={styles.itemLabel}><b>{responsabilities.label}</b></span>
              <ul className={styles.itemValue}>
                {responsabilities.values.map((responsability, index) => (
                  <li key={index}><span>{responsability}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience;
