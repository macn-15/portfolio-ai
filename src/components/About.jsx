
import { FaCode, FaRobot, FaDatabase } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-[70vh] text-center px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>

      <p className="max-w-xl text-gray-300 mb-8 text-lg leading-relaxed">
        I am a <span className="text-green-400 font-semibold">computer science major</span> and senior at Kean University with a 
        focus on <span className="text-red-400 font-semibold">software development</span>, and <span className="text-blue-400 font-semibold">AI</span>. I enjoy creating meaningful projects that solve real-world problems.
      </p>
      
      <div className="flex gap-8">
        <div className="flex flex-col items-center text-gray-200 hover:text-green-400 transition-colors">
          <FaCode size={40} />
          <span className="mt-2 font-semibold">Coding</span>
        </div>
        <div className="flex flex-col items-center text-gray-200 hover:text-blue-400 transition-colors">
          <FaRobot size={40} />
          <span className="mt-2 font-semibold">AI</span>
        </div>
        <div className="flex flex-col items-center text-gray-200 hover:text-yellow-400 transition-colors">
          <FaDatabase size={40} />
          <span className="mt-2 font-semibold">Databases</span>
        </div>
      </div>

    </section>
  );
}