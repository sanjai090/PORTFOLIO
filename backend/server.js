const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Mongoose Schemas & Models
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  live_url: String,
  github_url: String
});
const Project = mongoose.model('Project', projectSchema);

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// API Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

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
  } catch (err) {
    console.error('Error saving message:', err);
    return res.status(500).json({ error: 'Failed to save message' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
