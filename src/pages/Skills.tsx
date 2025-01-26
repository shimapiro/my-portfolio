import React from 'react';

const Skills: React.FC = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'];

  return (
    <div style={{ padding: '50px' }}>
      <h1>スキル
      </h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
