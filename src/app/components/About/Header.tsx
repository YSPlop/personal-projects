"use client"
// src/components/Header.tsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      className="text-center py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Yukash Sivaraj
      </h1>
      <p className="text-lg mt-4 text-gray-600">
        Passionate Software Engineer | Full-Stack Developer
      </p>
      <div className="mt-6 space-x-6 flex justify-center">
        <a
          href="https://www.linkedin.com/in/yukash-sivaraj/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/YSPlop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-black"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <p className="mt-4 text-gray-600">Melbourne, VIC | 0431106869 | sivarajyukash@gmail.com</p>
    </motion.header>
  );
};

export default Header;