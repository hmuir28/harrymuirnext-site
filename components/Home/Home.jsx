import React from 'react';
import styles from './Home.module.css';

const Home = ({ imageProfile, name, paragraph }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textCol}>
          <div className={styles.textContainer}>
            <h1> Hey I 'm <br></br> <span>{name}</span></h1>
            <p>{paragraph}</p>
          </div>
        </div>
        <div className={styles.imgCol}>
          <div className={styles.imageContainer}>
            <img src={imageProfile} alt="author" />
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
