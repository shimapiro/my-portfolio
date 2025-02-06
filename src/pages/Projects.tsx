import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'My Portfolio',
      description: 'React & TypeScriptで作成しているポートフォリオサイト',
      // image: '/project1.png',
      link: 'https://github.com/shimapiro/my-portfolio'
    },
    {
      title: 'TODOアプリ',
      description: 'javaのspring bootを使用して作成しました',
      // image: '/task-manager.png',
      link: 'https://github.com/shimapiro/TODO'
    },
    {
      title: 'WordPressで個人的に作成した過去のサイト➀',
      description: 'テーマやプラグインなどいじっております。漫画が好きなので漫画メイン',
      // image: '/task-manager.png',
      link: 'https://dokodeyomeru.jp/'
    }
  ];

  return (
    <div className="projects-container">
      <h1>プロジェクト</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            {/* <img src={project.image} alt={project.title} /> */}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">プロジェクト</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
