import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ハンバーガーメニューの開閉切り替え
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">shimapiro</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu} aria-label="メニューを開く">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>ホーム</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>私について</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>ポートフォリオ</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>お問い合わせ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
