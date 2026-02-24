// backend/server.js
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Create OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Heartbeat to make sure server is alive
setInterval(() => console.log("Server still alive..."), 5050);

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  console.log("Incoming request:", req.method, req.url, req.body);

  const prompt = `
You are an AI assistant that answers questions about Miguel Cuevas-Nieto in a friendly, conversational way. 
Introduce yourself naturally, explain things clearly, and be polite and approachable. 
Use complete sentences and avoid overly formal or robotic phrasing. 
If the question is unrelated to Miguel, say: "I only answer questions about Miguel."

Resume:
Miguel Cuevas-Nieto is a Computer Science Student at Kean University, graduating in 2026. 
Contact: cuevasnm@kean.edu.

Education:
- Kean University, B.S. in Computer Science, Graduation: 2026.

Skills:
- Programming languages: Python, Java, JavaScript, MySQL
- Frameworks / libraries: React, Node.js, Express
- Tools / software: VS Code, Git, PostgresAdmin
- Other skills: databases, AI

Projects:
- Fitlog: A calorie tracker that implements a food database API to search for foods and log them in a daily journal. Built using React, Postgres, Node.js, and Express.

User question: ${userMessage}
`;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = completion.choices[0].message.content;
    console.log("AI reply:", reply);

    res.json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ reply: "Error contacting AI." });
  }
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // MUST be false for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false });
  }
  console.log("Contact request:", name, email);
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log("Server running on", PORT));
