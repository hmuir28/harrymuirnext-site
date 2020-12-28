import React from 'react';
import styles from './Certificates.module.css';

const Certificates = ({ otherStudiesTitle, otherStudiesCertificates }) => (
  <section className={styles.certificatesContainer}>
    <h1 className={styles.header1}>{otherStudiesTitle}</h1>
    <div className={styles.certificatesContent}>
      {otherStudiesCertificates.map((certificate, index) => (
        <div
          className={styles.certificatesList}
          key={index}
        >
          <h4>{certificate.title}</h4>
          <div>
            <span className={styles.itemLabel}><b>{certificate.instructor.label}</b></span>
            <span className={styles.itemValue}>{certificate.instructor.value}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{certificate.company.label}</b></span>
            <span className={styles.itemValue}>{certificate.company.value}</span>
          </div>
          <div>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Certificates;
