import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // cleanup on unmount
    return () => (document.body.style.overflow = "");
  }, [open]);

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
    setOpen(false);
  };

  const data = [
    { link: "#about", title: "About" },
    { link: "#skills", title: "Skills" },
    { link: "#services", title: "Services" },
    { link: "#opensource", title: "Open Source" },
    { link: "#contact", title: "Contact" },
  ];

  // navbar height used in CSS calc (h-20 -> 5rem)
  const NAV_HEIGHT_REM = 5;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-600/95 backdrop-blur-md py-1 border-none">
        <nav className="max-w-7xl mx-auto w-full">
          <div className="w-full flex items-center justify-between h-20 px-4">
            <div className="relative w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-semibold shadow-md overflow-visible">
              <span className="pointer-events-none">MA</span>
            </div>

            <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal font-inter">
              <ul className="flex gap-8 text-2xl">
                {data.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      onClick={(e) => handleScroll(e, item.link)}
                      className="text-emerald-100 font-inter italic hover:text-white cursor-pointer"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="lg:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md focus:outline-none shadow z-60"
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
        </nav>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-40 pointer-events-auto bg-black"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      />

      <aside
        id="mobile-menu"
        className={`lg:hidden fixed right-0 z-50 transform transition-transform duration-300 ease-in-out pointer-events-auto`}
        style={{
          top: `${NAV_HEIGHT_REM}rem`,
          width: "18rem",
          maxHeight: `calc(100vh - ${NAV_HEIGHT_REM}rem)`,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
        aria-hidden={!open}
      >
        <div className="h-full bg-emerald-600/95 backdrop-blur-sm shadow-md rounded-l-md overflow-auto">
          <div className="p-6">
            <ul className="flex flex-col gap-4 text-lg">
              {data.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    onClick={(e) => handleScroll(e, item.link)}
                    className="block text-white font-inter py-3 px-3 hover:bg-emerald-500/30 rounded cursor-pointer transition-colors duration-200"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
