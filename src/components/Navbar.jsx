import React from "react";
import { Link } from "react-router-dom";
import menu from "../../src/assets/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="fixed -top-3 right-0 w-full md:px-9 md:py-3 bg-black">
      <div className="justify-between items-center hidden md:flex px-9">
        <Link to="/" className="font-bold text-3xl mt-3">
          TABUKE EZEKIEL
        </Link>

        <ul className="decoration-0 flex items-center gap-4 cursor-pointer">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex justify-between items-center pt-3 px-4 md:hidden relative bg-black z-20 w-full">
          <Link to="/" className="font-bold text-a">
            TABUKE EZEKIEL
          </Link>

          <img
            src={menu}
            alt="menu icon"
            className="cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>

        {openMenu && (
          <ul className="decoration-0 w-3/5 px-5 h-screen flex flex-col items-start gap-4 cursor-pointer absolute top-0 pt-24 bg-gray-700/30 backdrop-blur-md z-10 right-0">
            <li onClick={() => setOpenMenu(false)}>
              <Link
                to="/"
                className="border-b-2 w-full border-gray-400 text-[16px]"
                href="#work"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a
                className="border-b-2 w-full border-gray-400 text-[16px]"
                href="#work"
              >
                Work
              </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a
                className="border-b-2 w-full border-gray-400 text-[16px]"
                href="#about"
              >
                About
              </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <a
                className="border-b-2 w-full border-gray-400 text-[16px]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
