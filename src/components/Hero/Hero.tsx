import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {

  const heading = "Hi, I'm Yukash Sivaraj";
  const description = "A passionate junior developer with a focus on web development and AI.";

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-800 via-black to-green-700 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {heading}
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex mt-6 space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a href="https://github.com/YSPlop" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/yukash-sivaraj" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
