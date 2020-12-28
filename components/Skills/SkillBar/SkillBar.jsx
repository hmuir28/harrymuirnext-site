import React from 'react';
import styles from './SkillBar.module.css';

const SkillBar = ({ skills }) => (
  <div className={styles.container}>
    <ul className={styles.skills}>
      {skills.map((skill, index) => 
        <li
          key={skill.type}
          style={{ width: `${skill.level}%`, backgroundColor: `hsl(201, 93%, ${100 / (index + 3.5) }%)` }}
        >
          <p>{skill.type}<span>{skill.level}</span></p>
        </li>
      )}
    </ul>
  </div>
)

export default SkillBar;
