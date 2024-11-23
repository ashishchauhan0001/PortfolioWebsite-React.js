import React, { useState } from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative mb-20 sm:mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="#"><img className="mx-2 w-10" src={logo} alt="logo" /></a>
      </div>
      <div className="hidden md:flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ashish-chauhan-001a53229/" className="text-blue-600"><FaLinkedin/></a>
        <a href="https://github.com/ashishchauhan0001"><FaGithub/></a>
        <a href="https://www.instagram.com/ashish_chauhan29?igsh=MWNpeW9zM2RhemdpcQ==" className="text-pink-500"><FaInstagram/></a>
        <a href="https://leetcode.com/u/Akki2910/" className="text-orange-600"><SiLeetcode /></a>
        <a href="https://drive.google.com/file/d/1nFlykTXxWZI_eL4PieJHK8LRHRqoTk9H/view?usp=sharing" className="text-yellow-300"><IoIosDocument /></a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-12 left-4  w-full bg-transparent shadow-md md:hidden flex flex-row items-center gap-4 p-4 text-2xl transition-opacity duration-300 ease-in-out">
          <a href="https://www.linkedin.com/in/ashish-chauhan-001a53229/" className="text-blue-600 hover:bg-gray-200 p-2 rounded"><FaLinkedin/></a>
          <a href="https://github.com/ashishchauhan0001" className="hover:bg-gray-200 p-2 rounded"><FaGithub/></a>
          <a href="https://www.instagram.com/ashish_chauhan29?igsh=MWNpeW9zM2RhemdpcQ==" className="text-pink-500 hover:bg-gray-200 p-2 rounded"><FaInstagram/></a>
          <a href="https://leetcode.com/u/Akki2910/" className="text-orange-600"><SiLeetcode /></a>
          <a href="https://drive.google.com/file/d/17MbSpzF6X8Qj_1WSuKScV9f26nDc4bVL/view?usp=sharing" className="text-yellow-300 hover:bg-gray-200 p-2 rounded"><IoIosDocument /></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
