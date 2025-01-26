import React, { useState } from 'react';

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
      setStatus('送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <div>
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="名前"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="メッセージ"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">送信</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Contact;
