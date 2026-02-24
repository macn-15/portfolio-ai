import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Chat from "./components/Chat";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <Navbar />

      <main className="flex flex-col">
        <section id="hero" className=" scroll-mt-16 flex flex-col justify-center items-center min-h-screen px-6">
          <Hero />
        </section>

        <hr className="border-t border-gray-700 my-20 mx-auto w-3/4" />

        <section id="about" className="scroll-mt-16 flex flex-col justify-center items-center min-h-screen px-6">
          <About />
        </section>
        <hr className="border-t border-gray-700 my-20 mx-auto w-3/4" />

        <section id="education" className="scroll-mt-16 flex flex-col justify-center items-center min-h-screen px-6">
          <Education />
        </section>
        <hr className="border-t border-gray-700 my-20 mx-auto w-3/4" />

        <section id="projects" className="scroll-mt-16 flex flex-col justify-center items-center min-h-screen px-6">
          <Projects />
        </section>
        <hr className="border-t border-gray-700 my-20 mx-auto w-3/4" />

        <section id="chat" className="scroll-mt-16 flex flex-col justify-center items-center min-h-screen px-6">
          <Chat />
        </section>

        <hr className="border-t border-gray-700 my-20 mx-auto w-3/4" />

        <section id="contact" className="scroll-mt-16 flex flex-col justify-center items-center min-h-screen px-6">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;