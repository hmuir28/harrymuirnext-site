import React from 'react';
import { FaGithub, FaHackerrank, FaLinkedin, FaTwitter } from "react-icons/fa";
import Constants from '../../util/Constants';
import styles from './Contact.module.css';

const Contact = ({ socialMedia }) => {
  const [github, hackerRank, linkedin, twitter] = socialMedia;

  return (
    <div className={styles.contactContainer}>
      <h1>Get in touch.</h1>
      <p>Let's talk, if you're looking for someone to help you with your idea, maybe I'm your man!</p>
      <br></br>
      <a
        className={styles.emailLink}
        href={`mailto:${Constants.contactEmail}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Constants.contactEmail}
      </a>
      <div>
        <ul>
          <li>
            <a
              href={hackerRank.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHackerrank />
            </a>
          </li>
          <li>
            <a 
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a 
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a 
              href={twitter.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Contact;
