import ProjectCard from "@/components/ProjectCard/ProjectCard";

const projects = [
  {
    title: 'AI Chat Bot',
    description: 'An AI-powered chatbot built using Next.js, React, and OpenAI.',
    techStack: ['Next.js', 'React', 'OpenAI'],
    projectLink: '/projects/AIChatBot',
    imageUrl: '/img1.jpeg',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A turn-based Tic Tac Toe game built using React and custom AI logic.',
    techStack: ['React', 'JavaScript', 'AI Logic'],
    projectLink: '/projects/TicTacToe',
    imageUrl: '/img1.jpeg',
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            projectLink={project.projectLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
