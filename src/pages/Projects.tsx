import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    { title: 'Portfolio', description: 'HP' },
    { title: 'Task', description: 'まだ' },
  ];

  return (
    <div style={{ padding: '50px' }}>
      <h1>プロジェクト</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
