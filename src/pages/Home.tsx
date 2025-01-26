import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>shimapiro</h1>
      <p>ポートフォリオ</p>

      <section className="about-site">
        <h2>このサイトについて</h2>
        <p>
          このサイトは、私のスキルやプロジェクトを紹介するためのポートフォリオサイトです。
          以下の技術を使用しています。
        </p>
        <ul>
          <li><strong>フロントエンド:</strong> React, TypeScript, Vite</li>
          <li><strong>バックエンド:</strong> Vercel, Nodemailer</li>
          <li><strong>スタイリング:</strong> CSS Modules</li>
        </ul>
        <h3>機能一覧</h3>
        <ul>
          <li>プロジェクト紹介</li>
          <li>スキル紹介</li>
          <li>お問い合わせフォーム</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
