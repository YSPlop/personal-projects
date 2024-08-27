"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, imageUrl, projectLink }) => {
  return (
    <motion.div
      className="relative w-full h-64 bg-black shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.05 }}
    >
      {/* Wrap the image and content in a link */}
      <a href={projectLink} className="block w-full h-full relative">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out z-0 grayscale-0 transition-colors duration-300 group-hover:grayscale"
        />

        {/* Hover content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-center">{description}</p>
          <ul className="mt-2 flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <li key={tech} className="bg-gray-800 px-2 py-1 rounded-md text-xs">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </motion.div>
  );
};



export default ProjectCard;
