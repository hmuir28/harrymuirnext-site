import React from 'react';
import SkillBar from './SkillBar/SkillBar';
import styles from './Skills.module.css';

const Skills = ({ skillsTitle, skillsProgrammingLang }) => {
  const categories = Object.values(skillsProgrammingLang).sort((a, b) => a.order - b.order);

  return (
    <section className={styles.skillsContainer}>
      <h1 className={styles.header1}>{skillsTitle}</h1>
      <div>
        {categories.map((category, index) => (
          <div
            className={styles.skillsList}
            key={index}
          >
            <h4>{category.name}</h4>
            <div>
              <SkillBar
                skills={category.skills}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Skills;
