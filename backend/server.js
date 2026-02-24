// backend/server.js
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

import { Resend } from "resend";

dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// Create OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  console.log("Incoming request:", req.method, req.url, req.body);

  const prompt = `
You are an AI assistant that answers questions about Miguel Cuevas-Nieto in a friendly, conversational way. 
Introduce yourself naturally, explain things clearly, and be polite and approachable. 
Use complete sentences and avoid overly formal or robotic phrasing. 
If the question is unrelated to Miguel, say: "I only answer questions about Miguel."
If the question is something about miguel that you don't know, say: "I don't have that information, but you can contact Miguel  at the end of the webpage for more details!"

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
  console.log("CONTACT HIT:", req.body);

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["cuevasnm@kean.edu"], // change this to YOUR email
      subject: `Portfolio Contact from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("Email sent:", data);
    res.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ success: false });
  }
});

app.get("/test-resend", async (req, res) => {
  const data = await resend.emails.send({
    from: "Test <onboarding@resend.dev>",
    to: ["cuevasnm@kean.edu"],
    subject: "Resend Test",
    text: "It works!",
  });
  res.json(data);
});

// Start server
const PORT = process.env.PORT
app.listen(PORT, () => console.log("Server running on", PORT));
