"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import "./projectCard.module.scss"

interface ProjectCardProps {
  title: string;
  description: string;
  projectName: string;
}

const lol: React.FC<ProjectCardProps> = ({ title, description, projectName }) => {
  return (
    <Link href={`/projects/${projectName}`}>
      <motion.div
        className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Link>
      
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, projectName }) => {
  return (
    
    <div className='card'>
        <div className='image-box'>
          <img src='./img1.jpeg'/>
        </div>
        <div className='content'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
    </div>
  );
}

export default ProjectCard;
