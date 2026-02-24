import { useState, useRef, useEffect } from "react";


export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
    const [status, setStatus] = useState(""); 
  const chatContainer = useRef(null);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: "user", text: input };
  setMessages((prev) => [...prev, userMessage]);

  setStatus("Typing..."); 

  try {
    const res = await fetch("https://portfolio-ai-usmb.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: data.reply },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: "⚠️ Error contacting AI server." },
    ]);
  }

  setStatus(""); 
  setInput("");
};

    useEffect(() => {

    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section
  id="chat"
  className="flex flex-col justify-center items-center min-h-[80vh] px-4 py-10 text-center"
    >
  <h2 className="text-3xl font-semibold mb-6">Ask My AI Assistant About Me</h2>

  <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-4">
    <div
  ref={chatContainer}
  className="h-64 overflow-y-auto mb-4 p-2 border border-gray-700 rounded bg-gray-900 flex flex-col space-y-2"
>
  {messages.map((m, i) => (
    <div
      key={i}
      className={`max-w-[80%] px-3 py-2 rounded-lg ${
        m.sender === "user" ? "ml-auto bg-blue-600 text-white" : "mr-auto bg-green-600 text-white"
      }`}
    >
      <b>{m.sender === "user" ? "You" : "AI"}:</b> {m.text}
    </div>
  ))}

  {/* AI typing indicator */}
  {status === "Typing..." && (
    <div className="text-green-400 text-sm italic animate-pulse mt-2">
      AI is typing...
    </div>
  )}
</div>

    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 px-4 py-2 rounded-full border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  </div>
</section>
  );
}