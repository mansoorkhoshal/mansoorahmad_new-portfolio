import logoNav from "../assets/logo.jpeg";
import Lottie from "lottie-react";
// import aboutAnimation from "../assets/user2.png";
import aboutAnimation from "../assets/aboutme.json";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDiscord,
  AiOutlineReddit,
} from "react-icons/ai";
// import { AiOutlineProfile } from "react-icons/ai";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mansoorkhoshal/",
    label: "LinkedIn",
    Icon: AiOutlineLinkedin,
  },
  {
    href: "https://github.com/mansoorkhoshal",
    label: "GitHub",
    Icon: AiOutlineGithub,
  },
  {
    href: "https://discord.com/users/1368626128222163034",
    label: "Discord",
    Icon: AiOutlineDiscord,
  },
  {
    href: "https://www.reddit.com/user/mansoorkhoshal",
    label: "Reddit",
    Icon: AiOutlineReddit,
  },
];

export default function About() {
  return (
    <section className="bg-white" id="#about">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-10">
        <div className=" bg-emerald-50 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 lg:gap-0 items-center">
            <div className="p-8 lg:px-12 lg:py-16">
              <div className="flex items-center gap-2 mb-4">
                <Lottie
                  animationData={aboutAnimation}
                  loop
                  autoplay
                  className="hidden sm:block w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain bg-transparent shrink-0"
                />
                <div>
                  <h2 className="text-lg text-emerald-600">Hello, I'm</h2>
                  <h1 className="text-4xl sm:text-4xl md:4xl font-inter font-bold text-neutral-700 -tracking-tight">
                    Mansoor Ahmad
                  </h1>
                </div>
              </div>
              <h2 className="mt-3 text-xl sm:text-3xl font-semibold text-emerald-300 text-shadow-sm">
                Full Stack Developer
              </h2>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                Your idea, my code <br /> together we'll create a website
                <span className="font-bold"> that wows your audience!</span>
                <br />
                <span className="italic text-xl">
                  Let's turn your vision into a modern web experience that gets
                  noticed!
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-medium shadow transform transition hover:-translate-y-1.5"
                >
                  Let's Talk
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>

                <a
                  href="#opensource"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600  duration-300 text-white font-medium shadow-sm transform transition hover:-translate-y-1.5"
                >
                  My Work
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="text-xl text-emerald-600">Find me on</span>
                <div className="flex items-center gap-3 ml-2 relative">
                  {socialLinks.map(({ href, Icon, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-xl hover:scale-120 transform transition duration-150 border border-gray-300 shadow-sm"
                    >
                      <Icon className="text-2xl text-slate-700" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl shadow-2xl overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={logoNav}
                  alt="logo"
                  className="object-cover shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
