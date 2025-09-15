import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-black shadow z-250 flex justify-between items-center border-b border-b-gray-700">
        <div>
          <a
            href=""
            className={`{jetbrains.className} p-4 font-bold text-2xl italic text-white`}
          >
            RENDRA
          </a>
        </div>
        <ul className="flex space-x-6 p-6">
          <li>
            <a
              href="#About"
              className="font-light text-gray-300 font-sans transition-all duration-300 hover:text-white hover:font-bold"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#SkillsSection"
              className="font-light text-gray-300 font-sans transition-all duration-300 hover:text-white hover:font-bold"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#ProjectSection"
              className="font-light text-gray-300 font-sans transition-all duration-300 hover:text-white hover:font-bold"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#ExperienceSection"
              className="font-light text-gray-300 font-sans transition-all duration-300 hover:text-white hover:font-bold"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#ContactSection"
              className="font-light text-gray-300 font-sans transition-all duration-300 hover:text-white hover:font-bold"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
