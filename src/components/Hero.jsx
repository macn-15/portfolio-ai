import profilePic from "./profile.jpeg";

function Hero() {
  return (
    <section
  id="hero"
  className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 bg-gray-900 text-gray-200"
>
  <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-white to-red-500">
      Miguel Cuevas-Nieto
    </h1>
    <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-white to-red-500">
      Computer Science Student | Software Developer 
    </p>
    <div className="flex justify-center md:justify-start space-x-4">
      <a
        href="#projects"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white transition-colors duration-300"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md transition-colors duration-300"
      >
        Contact Me
      </a>
    </div>
  </div>

  <div className="flex-1 flex justify-center md:justify-end">
    <img
      src={profilePic}
      alt="Profile"
      className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-green-600 shadow-lg"
    />
  </div>
</section>
  );
}

export default Hero;