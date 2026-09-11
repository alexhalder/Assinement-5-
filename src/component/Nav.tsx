import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto" />

        <ul className="hidden md:flex gap-6 text-gray-500 font-medium text-base font-jakarta">
          <li>
            <a
              href="#home"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technology"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-slate-700 font-medium hover:text-slate-900 transition-colors">
            Sign In
          </button>
          <button className="bg-[#D81B7A] hover:bg-[#C2176C] text-white font-medium px-4 md:px-6 py-2 rounded-full transition-all shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
