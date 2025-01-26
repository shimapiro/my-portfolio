import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('送信中...');

    const response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('メッセージが送信されました！');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('送信に失敗しました。もう一度試してください。');
    }
  };

  return (
    <div className="contact-container">
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>名前</label>
          <input
            type="text"
            name="name"
            placeholder="名前を入力"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>メールアドレス</label>
          <input
            type="email"
            name="email"
            placeholder="メールアドレスを入力"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>メッセージ</label>
          <textarea
            name="message"
            placeholder="メッセージを入力"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">送信</button>
      </form>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default Contact;
