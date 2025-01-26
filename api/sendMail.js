import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Nodemailerの設定
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `お問い合わせ: ${name}`,
    text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'メールが送信されました！' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return res.status(500).json({ error: 'メールの送信に失敗しました' });
  }
}
