import React from 'react';
import styles from './Home.module.css';

const Home = ({ imageProfile, name, paragraph }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={`${styles.content} row`}>
        <div className={`${styles.textCol}`}>
          <div className={styles.homeHeadWrapper}>
            <h1> Hey I 'm <br></br> <span>{name}</span></h1>
            <p>{paragraph}</p>
          </div>
        </div>
        <div className={`${styles.imgCol} col`}>
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
