"use client"
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
