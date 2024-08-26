"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
  return (
    <motion.nav
      className="flex justify-between items-center py-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="flex space-x-6 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects-display">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
