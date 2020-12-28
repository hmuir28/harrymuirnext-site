import React from 'react';
import SkillBar from './SkillBar/SkillBar';

import styles from './Skills.module.css';

const Skills = ({ skillsTitle, skillsProgrammingLang: categories }) => (
  <section className={styles.skillsContainer}>
    <h1 className={styles.header1}>{skillsTitle}</h1>
    <div>
      {Object.keys(categories).map((key, index) => (
        <div
          className={styles.skillsList}
          key={index}
        >
          <h4>{categories[key].category}</h4>
          <div>
            <SkillBar
              skills={categories[key].skills}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
