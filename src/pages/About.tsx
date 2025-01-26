import React from 'react';
// stylesフォルダ内のAbout.cssをインポート（相対パス）
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>自己紹介</h1>
      <p>こんにちは、私はshimapiroです。
        <br />現在、フロントエンドエンジニアとして活躍するため学習中です。</p>
      
      <h2>スキルセット</h2>
      <ul>
        <li>フロントエンド: React, TypeScript, JavaScript</li>
        <li>バックエンド: Java, Spring Boot</li>
        <li>CMS: WordPress（Advanced Custom Fields）</li>
      </ul>
      
      <h2>目標</h2>
      <p>フルスタックエンジニアとして、バックエンドの開発スキルを強化したいです。</p>
    </div>
  );
};

export default About;
