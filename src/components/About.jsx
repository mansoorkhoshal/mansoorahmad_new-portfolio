// import Lottie from "lottie-react";
// import aboutAnimation from "../../src/assets/aboutme.json";
// import { FaLinkedinIn } from "react-icons/fa6";
// import {
//   AiOutlineGithub,
//   AiOutlineDiscord,
//   AiOutlineReddit,
// } from "react-icons/ai";

// const About = () => {
//   const socialLinks = [
//     {
//       link: "https://www.linkedin.com/in/mansoorkhoshal/",
//       icon: <FaLinkedinIn />,
//     },
//     {
//       link: "https://www.linkedin.com/in/mansoorkhoshal/",
//       icon: <AiOutlineGithub />,
//     },
//     {
//       link: "https://www.linkedin.com/in/mansoorkhoshal/",
//       icon: <AiOutlineDiscord />,
//     },
//     {
//       link: "https://www.linkedin.com/in/mansoorkhoshal/",
//       icon: <AiOutlineReddit />,
//     },
//   ];

//   return (
//     <section className="mt-20 h-screen grid items-center bg-white transition ">
//       <div className="container flex flex-col relative items-center">
//         <Lottie
//           animationData={aboutAnimation}
//           loop={true}
//           className="w-72 h-80 overflow-hidden mb-6"
//         />
//         <h1>
//           I'm Mansoor Ahmad <br /> Full Stack Developer
//         </h1>
//         <p className="w-lg text-center mt-1 mb-8">
//           You are click away from building your dream website or web app. Send
//           me your details of your project for a modren, mobile responsive,
//           highly performant website today!
//         </p>
//         <div>
//           <a href="#contact">Let's Talk</a>
//           <a href="#portfolio">My Work</a>
//         </div>
//         <div>
//           {socialLinks.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import logoNav from "../assets/logo.jpeg";
import Lottie from "lottie-react";
import aboutAnimation from "../../src/assets/aboutme.json";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDiscord,
  AiOutlineReddit,
} from "react-icons/ai";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mansoorkhoshal/",
    label: "LinkedIn",
    Icon: AiOutlineLinkedin,
  },
  {
    href: "https://github.com/your-username",
    label: "GitHub",
    Icon: AiOutlineGithub,
  },
  {
    href: "https://discord.com/users/your-id",
    label: "Discord",
    Icon: AiOutlineDiscord,
  },
  {
    href: "https://www.reddit.com/user/your-username",
    label: "Reddit",
    Icon: AiOutlineReddit,
  },
];

export default function About() {
  return (
    <section className="bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="bg-white backdrop-blur-md border border-white/30 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
            <div className="p-8 lg:px-12 lg:py-16">
              <div className="flex items-center gap-4 mb-4">
                <a href="#" className="shrink-0">
                  <img
                    src={logoNav}
                    alt="logo"
                    className="h-15 w-15 rounded-full object-cover border-green-300"
                  />
                </a>
                <div>
                  <h2 className="text-lg text-emerald-600">Hello, I'm</h2>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-700 -tracking-tight">
                    Mansoor Ahmad
                  </h1>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                You are one click away from building your dream website or web
                app. I build modern, mobile-responsive, and high-performance
                websites. Tell me your idea — I'll turn it into a polished web
                product.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow"
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
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600  text-white font-medium shadow-sm"
                >
                  My Work
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="text-xl text-emerald-600">Find me on</span>
                <div className="flex items-center gap-3 ml-2">
                  {socialLinks.map(({ href, Icon, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-xl hover:scale-105 transform transition duration-300 border border-gray-300 shadow-sm"
                    >
                      <Icon className="text-2xl text-slate-700" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-900 duration-400">
                  React
                </span>
                <span className="text-xs px-3 py-1 rounded-full text-black bg-blue-300 hover:bg-blue-500 duration-400">
                  Tailwind
                </span>
                <span className="text-xs px-3 py-1 rounded-full text-white bg-green-600 hover:bg-green-900 duration-400">
                  Node.js
                </span>
                <span className="text-xs px-3 py-1 rounded-full text-white bg-slate-600 hover:bg-slate-900 duration-400">
                  Responsive
                </span>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl shadow-2xl overflow-hidden"
                aria-hidden="true"
              >
                <Lottie animationData={aboutAnimation} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
