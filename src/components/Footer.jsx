import logoNav from "../assets/logo.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDiscord,
} from "react-icons/ai";

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 70;  
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-emerald-600 text-white scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logoNav}
              alt="owner image"
              className="w-15 h-15 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-lg">Mansoor Ahmad</h4>
              <p className="text-sm text-white/80">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex-1">
            <nav className="flex flex-wrap gap-4 justify-center md:justify-center">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-white/90 hover:underline cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="text-white/90 hover:underline cursor-pointer"
              >
                Services
              </a>
              <a
                href="#opensource"
                onClick={(e) => handleScroll(e, "#opensource")}
                className="text-white/90 hover:underline cursor-pointer"
              >
                Open Source
              </a>
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "#skills")}
                className="text-white/90 hover:underline cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="text-white/90 hover:underline cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mansoorkhoshal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 transform transition duration-150 shadow-sm"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/mansoorkhoshal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 transform transition duration-150 shadow-sm"
              aria-label="GitHub"
            >
              <AiOutlineGithub className="text-2xl" />
            </a>
            <a
              href="https://discord.com/users/1368626128222163034"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 transform transition duration-150 shadow-sm"
              aria-label="Discord"
            >
              <AiOutlineDiscord className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Mansoor Ahmad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
