"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink?: string;  // Optional project link
  githubRepo?: string;   // Optional GitHub link
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, imageUrl, projectLink, githubRepo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      className="relative w-full h-64 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ borderRadius: '30px' }}
    >
      <div className="block w-full h-full relative">
        
        {/* Hover content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-4 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-85' : 'opacity-0'}`}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-center">{description}</p>
          <ul className="mt-2 flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <li key={tech} className="bg-gray-800 px-2 py-1 rounded-md text-xs">
                {tech}
              </li>
            ))}
          </ul>
          
          {/* Conditional Rendering of Buttons */}
          <div className="mt-4 flex justify-center gap-4">
            {/* View Project Button - Only if projectLink is provided */}
            {projectLink && (
              <a
                href={projectLink}
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}

            {/* GitHub Button - Only if githubRepo is provided */}
            {githubRepo && (
              <a
                href={githubRepo}
                className={`bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center gap-2 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 z-0 grayscale-0"
        />
        
      </div>
    </motion.div>
  );
};

export default ProjectCard;
