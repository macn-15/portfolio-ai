
import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

export default function Education() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare />, level: 85, color: "bg-yellow-500" },
    { name: "React", icon: <FaReact />, level: 85, color: "bg-blue-500" },
    { name: "Node.js", icon: <FaNodeJs />, level: 70, color: "bg-green-500" },
    { name: "Python", icon: <FaPython />, level: 85, color: "bg-indigo-500" },
    { name: "SQL", icon: <FaDatabase />, level: 70, color: "bg-red-500" },
  ];

  return (
    <section
      id="education"
      className="flex flex-col items-center px-4 py-12 bg-gray-900 text-gray-200"
    >
      <h2 className="text-3xl font-semibold mb-8">Education & Skills</h2>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        {/* Education Column */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🎓 B.S. Computer Science
            </h3>
            <p className="text-gray-400">Kean University, 2023 - Present</p>
            <p className="mt-1 text-gray-300">
              Focus: Software Development, Databases
            </p>
          </div>
        </div>

        {/* Skills Column */}
        <div className="flex-1 flex flex-col gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-1">
              <span className="font-medium flex items-center gap-2">
                {skill.icon} {skill.name}
              </span>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                  title={`${skill.level}% proficiency`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}