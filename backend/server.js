const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// API Routes
app.get('/api/projects', (req, res) => {
  const query = 'SELECT * FROM projects';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching projects:', err);
      res.status(500).json({ error: 'Failed to fetch projects' });
      return;
    }
    res.json(results);
  });
});

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/messages', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message' });
  }

  const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, results) => {
    if (err) {
      console.error('Error saving message:', err);
      return res.status(500).json({ error: 'Failed to save message' });
    }

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // Your email where you want to receive notifications
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (mailErr, info) => {
      if (mailErr) {
        console.error('Error sending email:', mailErr);
        // We still return success because the message was saved to the DB
        return res.status(201).json({ success: true, message: 'Message saved, but email notification failed.' });
      }
      console.log('Email sent:', info.response);
      res.status(201).json({ success: true, message: 'Message sent successfully!' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
