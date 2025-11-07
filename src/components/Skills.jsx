import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <SkillCard
            icon={<SiJavascript className="text-yellow-400 text-5xl" />}
            title="JavaScript"
          />
          <SkillCard
            icon={<SiTailwindcss className="text-cyan-500 text-5xl" />}
            title="Tailwind CSS"
          />
          <SkillCard
            icon={<SiBootstrap className="text-violet-400 text-5xl" />}
            title="Bootstrap"
          />
          <SkillCard
            icon={<FaFigma className="text-pink-500 text-5xl" />}
            title="UI / UX Design"
          />
          <SkillCard
            icon={<SiMongodb className="text-green-700 text-5xl" />}
            title="MongoDB"
          />
          <SkillCard
            icon={<SiExpress className="text-gray-600 text-5xl" />}
            title="Express.js"
          />
          <SkillCard
            icon={<FaReact className="text-blue-500 text-5xl" />}
            title="React.js"
          />
          <SkillCard
            icon={<FaNodeJs className="text-green-600 text-5xl" />}
            title="Node.js"
          />
          <SkillCard
            icon={<FaDatabase className="text-indigo-600 text-5xl" />}
            title="Database Design"
          />
          <SkillCard
            icon={<SiGit className="text-red-600 text-5xl" />}
            title="Git"
          />
          <SkillCard
            icon={<SiGithub className="text-black text-5xl" />}
            title="GitHub"
          />
          <SkillCard
            icon={<VscVscode className="text-blue-800 text-5xl" />}
            title="GitHub"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
    <div className="text-4xl mb-3">{icon}</div>
    <p className="font-semibold">{title}</p>
  </div>
);

export default Skills;
