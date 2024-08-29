import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaLaravel, FaPhp, FaVuejs, FaLinux, FaAlgolia, FaJs, FaConfluence, FaJira, FaTrello, FaBitbucket, FaPython, FaJava, FaGit, FaGithub } from 'react-icons/fa';
import useWindowWidth from '../utils/useWindowWidth';
import InfiniteCarousel from './InfiniteCarousel';

const Skills: React.FC = () => {
  const skills = [
    { icon: <FaLinux size={50} className="text-black mx-auto mb-4" />, name: "Linux" },
    { icon: <FaGit size={50} className="text-orange-500 mx-auto mb-4" />, name: "Git" },
    { icon: <FaGithub size={50} className="text-black mx-auto mb-4" />, name: "GitHub" },

    { icon: <FaLaravel size={50} className="text-red-500 mx-auto mb-4" />, name: "Laravel" },
    { icon: <FaAlgolia size={50} className="text-blue-500 mx-auto mb-4" />, name: "Algolia" },

    { icon: <FaPhp size={50} className="text-purple-800 mx-auto mb-4" />, name: "PHP" },
    { icon: <FaJs size={50} className="text-yellow-500 mx-auto mb-4" />, name: "Javascript" },
    { icon: <FaPython size={50} className="text-green-500 mx-auto mb-4" />, name: "Python" },
    { icon: <FaJava size={50} className="text-yellow-500 mx-auto mb-4" />, name: "Java" },

    { icon: <FaVuejs size={50} className="text-green-600 mx-auto mb-4" />, name: "Vue" },
    { icon: <FaReact size={50} className="text-blue-500 mx-auto mb-4" />, name: "React.js" },
    { icon: <FaNodeJs size={50} className="text-green-500 mx-auto mb-4" />, name: "Node.js" },

    { icon: <FaConfluence size={50} className="text-blue-500 mx-auto mb-4" />, name: "Confluence" },
    { icon: <FaJira size={50} className="text-blue-500 mx-auto mb-4" />, name: "Jira" },
    { icon: <FaTrello size={50} className="text-blue-500 mx-auto mb-4" />, name: "Trello" },
    { icon: <FaBitbucket size={50} className="text-blue-500 mx-auto mb-4" />, name: "Bitbucket" },

    { icon: <FaAws size={50} className="text-yellow-500 mx-auto mb-4" />, name: "AWS" },
  ];

  const windowWidth = useWindowWidth();

  // Set different velocities based on screen width
  const velocity = windowWidth < 768 ? 10 : 25; // Example: 10 for mobile, 25 for larger screens

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="flex justify-center items-center overflow-hidden">
          <div className="w-full">
            <InfiniteCarousel skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

/**
 * {skills.map((skill, index) => (
                <div key={index} className="inline-block text-center mx-6">
                  {skill.icon}
                  <p className="text-lg">{skill.name}</p>
                </div>
              ))}
 */