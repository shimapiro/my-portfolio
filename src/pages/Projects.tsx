import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'このサイト',
      description: 'React & TypeScriptで作成している簡単なポートフォリオサイト',
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
      title: 'ポケポケトレード掲示板',
      description: 'Next.js & TypeScriptで作成しているトレードサイトです。色々調べながら作りました。ドメインはconohaで取得しDNSで設定しています。',
      // image: '/project1.png',
      link: 'https://pokepoke-trade.com/'
    },
    {
      title: 'WordPressで個人的に作成した過去のサイト➀',
      description: 'テーマやプラグインなどいじっております。漫画が好きなので漫画メインになっています。',
      // image: '/task-manager.png',
      link: 'https://dokodeyomeru.jp/'
    },
    {
      title: 'WordPressで個人的に作成した過去のサイト➁',
      description: '「あたおか」特化サイトです。サイト自体はそこまでカスタマイズしていませんが、ECサイトを作成し紐づけています。',
      // image: '/task-manager.png',
      link: 'https://ata-oka.com/'
    },
    {
      title: 'WordPressで個人的に作成した過去のサイト➂',
      description: '雑記ブログです。3カラムにカスタマイズしたりちょこちょこカスタマイズはしています。',
      // image: '/task-manager.png',
      link: 'https://nextnote-plus.com/'
    }
  ];

  return (
    <div className="projects-container">
      <h1>ポートフォリオ</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">サイトへ</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
