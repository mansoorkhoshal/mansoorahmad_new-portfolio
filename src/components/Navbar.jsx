import { IoMdColorPalette } from "react-icons/io";

const Navbar = () => {
  const data = [
    { link: "#", title: "About" },
    { link: "#skills", title: "Skills" },
    { link: "#services", title: "Services" },
    { link: "#opensource", title: "Open Source" },
    { link: "#contact", title: "Contact" },
  ];

  return (
    <section className="w-full top-0 left-0 z-10 shadow-lg bg-emerald-600 backdrop-blur-md border-none">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full flex items-center justify-between h-20 px-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-semibold shadow-md">
              MA
            </div>
            <ul className="hidden lg:flex gap-8 text-xl">
              {data.map((item, index) => (
                <li key={index} className="list-none">
                  <a href={item.link} className="text-white font-inter italic">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="shrink-0 ml-4">
              <IoMdColorPalette className="text-4xl text-white cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
