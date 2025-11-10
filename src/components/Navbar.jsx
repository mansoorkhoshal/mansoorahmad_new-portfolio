import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const data = [
    { link: "#", title: "About" },
    { link: "#skills", title: "Skills" },
    { link: "#services", title: "Services" },
    { link: "#opensource", title: "Open Source" },
    { link: "#contact", title: "Contact" },
  ];

  return (
    <section className="w-full z-50 bg-emerald-600/95 backdrop-blur-md py-1 border-none relative">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full flex items-center justify-between h-20 px-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-semibold shadow-md">
              MA
            </div>

            <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal font-inter">
              <ul className="flex gap-8 text-2xl">
                {data.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-emerald-100 font-inter italic hover:text-white"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="lg:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              {open ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden absolute left-0 right-0 top-full z-40 transform origin-top transition-transform duration-400 ${
            open ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-emerald-600/95 backdrop-blur-sm rounded-b-md shadow-md overflow-hidden">
              <ul className="flex flex-col gap-4 p-4 text-lg">
                {data.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="block text-white font-inter italic py-2 px-2 hover:bg-emerald-500/30 rounded"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
