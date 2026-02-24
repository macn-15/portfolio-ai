//Contact.jsx
import { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-ai-usmb.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus("✅ Message sent!");
      else setStatus("⚠️ Failed to send.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center text-gray-200"
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-green-600 via-blue-800 to-purple-700 animate-gradient-x opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:30px_30px] animate-pulse-slow"></div>
      </div>

      <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-lg flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-2xl"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <FaUser className="absolute left-3 top-2.5 text-gray-400" />
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="pl-10 w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div className="relative flex-1">
            <FaEnvelope className="absolute left-3 top-2.5 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="pl-10 w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
        </div>

        <div className="relative">
          <FaComment className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="pl-10 w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition transform hover:scale-105"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`mt-2 text-sm ${
              status.includes("Error") ? "text-red-400" : "text-green-400"
            } animate-pulse`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;