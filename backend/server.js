const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Nodemailerの設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `お問い合わせ: ${name}`,
    text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('メールが送信されました！');
  } catch (error) {
    console.error(error);
    res.status(500).send('メールの送信に失敗しました');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
