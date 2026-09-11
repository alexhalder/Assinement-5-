import { useState } from "react";
import logo from "../assets/logo-text.png";

// sometime using Ai for responsive 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        <a href="#home">
          <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto" />
        </a>

        <ul className="hidden items-center gap-6 font-jakarta text-base font-medium text-gray-500 md:flex">
          <li>
            <a href="#home" className="transition-colors duration-200 hover:text-slate-900">Home</a>
          </li>

          <li>
            <a href="#technology" className="transition-colors duration-200 hover:text-slate-900">
              Technology
            </a>
          </li>

          <li>
            <a href="#projects" className="transition-colors duration-200 hover:text-slate-900">Projects</a>
          </li>

          <li>
            <a href="#about" className="transition-colors duration-200 hover:text-slate-900">About</a>
          </li>

          <li>
            <a href="#contact" className="transition-colors duration-200 hover:text-slate-900">Contact</a>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button className="font-medium text-slate-700 transition-colors hover:text-slate-900">Sign In</button>
          <button className="rounded-full bg-[#D81B7A] px-6 py-2 font-medium text-white shadow-sm transition-all hover:bg-[#C2176C]">Sign Up</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1 font-jakarta font-medium text-gray-600">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-slate-900">Home</a></li>

            <li><a href="#technology" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-slate-900">Technology</a></li>

            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-slate-900">Projects</a></li>

            <li><a href="#about" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-slate-900">About</a></li>

            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-slate-50 hover:text-slate-900">Contact</a></li>
          </ul>


          <div className="mt-3 flex gap-3 border-t border-slate-100 pt-4">
            <button className="flex-1 rounded-full border border-slate-200 py-2 font-medium text-slate-700">
              Sign In
            </button>

            <button className="flex-1 rounded-full bg-[#D81B7A] py-2 font-medium text-white hover:bg-[#C2176C]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;