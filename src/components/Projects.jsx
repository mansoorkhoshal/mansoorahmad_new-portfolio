import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "project1",
    title: "Portfolio Website",
    desc: "A personal portfolio website to showcase my skills, projects, and contact info using React and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/mansoorkhoshal",
  },
  {
    id: "project2",
    title: "Weather Application",
    desc: "A responsive weather app that shows real-time data using REST APIs, built with React, JavaScript, and Tailwind CSS.",
    tech: ["JavaScript", "React", "Tailwind CSS", "Rest APIs"],
    github: "https://github.com/mansoorkhoshal",
  },
  {
    id: "project3",
    title: "Real Estate Landing Page",
    desc: "A responsive landing page for a real estate site with modern UI, animations, and mobile-first design.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/mansoorkhoshal",
  },
];

const Projects = () => {
  return (
    <section id="opensource" className="py-12 bg-emerald-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm text-emerald-600 font-medium">What I Build</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Open Source Projects
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            I create open source projects that solve real problems, showcase
            modern technologies, and demonstrate best practices...
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, desc, tech, github, live }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 mb-4 grow">{desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-emerald-50 border border-green-200 text-emerald-600 px-2 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-800 hover:text-emerald-500 duration-300 font-semibold"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
