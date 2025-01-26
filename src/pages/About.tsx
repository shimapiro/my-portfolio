import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>自己紹介</h1>
      <p>こんにちは、私は島田寛幸です。<br /> 現在、フロントエンドエンジニアとして活躍中です。</p>
      
      <h2>スキルセット</h2>
      <ul className="skills-list">
        <li>
          <strong>フロントエンド:</strong> React, TypeScript, JavaScript <span className="years">（1年未満）</span>
        </li>
        <li>
          <strong>バックエンド:</strong> Java, Spring Boot <span className="years">（1年未満）</span>
        </li>
        <li>
          <strong>CMS:</strong> WordPress（Advanced Custom Fields） <span className="years">（3年）</span>
        </li>
      </ul>
      
      <h2>目標</h2>
      <p>フルスタックエンジニアとして、バックエンドの開発スキルを強化したいです。</p>
    </div>
  );
};

export default About;
