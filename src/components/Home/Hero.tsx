"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Contact from "../Contact";

const Hero: React.FC = () => {

  // flipped
  const [flipped, setFlipped] = useState(false);
  
  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const heading = "Hi, I'm Yukash Sivaraj";
  const description = "A passionate junior developer with a focus on web development and AI.";

  return (
    <div className='w-screen bg-gradient-to-br from-blue-700 via-black to-green-700 flex flex-col md:flex-row'>
      <div className='flex-1 flex justify-end items-center text-center p-4'>
        <AnimatePresence>
          {!flipped && (
            <motion.div
            key="profile"
            className="flex-1 flex justify-end items-center text-center p-4"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
            onClick={toggleFlip}
            style={{ perspective: '1000px' }}
          >
            <img
              src='/portfolio-picture.jpg'
              alt='Yukash Sivaraj profile picture'
              className='rounded-lg h-[10%] md:h-[75%] max-h-full object-contain'
              style={{ borderRadius: '30px' }}
            />
          </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
        {flipped && (
          <motion.div
            key="contact"
            className="flex-1 flex justify-center items-center text-center p-4"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 360 }}
            transition={{ duration: 0.8 }}
            onClick={toggleFlip}
            style={{ perspective: '1000px' }}
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      <section className="flex-1 flex flex-col justify-center items-center text-center text-white p-4">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex mt-6 space-x-4 md:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/YSPlop" target="_blank" rel="noreferrer">
            <FaGithub size={36} />
          </a>
          <a href="https://linkedin.com/in/yukash-sivaraj" target="_blank" rel="noreferrer">
            <FaLinkedin size={36} />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;