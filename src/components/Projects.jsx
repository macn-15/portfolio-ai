import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaRobot } from "react-icons/fa";

export default function Projects() {
  const projectList = [
    {
      title: "Fitlog",
      description: "Calorie tracker with food database API.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      icon: <FaReact className="text-blue-400" />,
    },

    {
      title: "Task Manager App",
      description: "A task management app for teams with authentication.",
      tech: ["React", "Node.js"],
      icon: <FaDatabase className="text-yellow-400" />,
    },

  ];

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-[70vh] text-center px-4 space-y-8"
    >
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        {projectList.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center text-4xl mb-4">
              {proj.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-2">{proj.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-2 py-1 rounded-full text-sm text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}