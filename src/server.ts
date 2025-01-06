import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all origins

// Serve static files with cache control headers
const oneDay = 86400000; // 24 hours in milliseconds

app.use(express.static(path.join(__dirname, '..', 'build'), {
  maxAge: oneDay, // Cache for one day
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      // Do not cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      // Cache other files
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      res.status(500).send(`Error sending email: ${error.message}`);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
});

// Serve the React app for any other route
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
