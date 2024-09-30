import ProjectCard from "@/components/ProjectCard/ProjectCard";

const projects = [
  {
    title: 'AI Chat Bot',
    description: 'An AI-powered chatbot built using Next.js, React, and OpenAI.',
    techStack: ['Next.js', 'React', 'OpenAI'],
    projectLink: '/projects/AIChatBot',
    githubRepo: 'https://github.com/YSPlop/personal-projects',
    imageUrl: '/project-overlay-images/AIChatBot-overlay.jpg',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A turn-based Tic Tac Toe game built using React and custom AI logic.',
    techStack: ['React', 'TypeScript', 'AI Logic'],
    projectLink: '/projects/TicTacToe',
    githubRepo: 'https://github.com/YSPlop/personal-projects',
    imageUrl: '/project-overlay-images/tictactoe-overlay.png',
  },
  {
    title: 'SafeCircle Android App',
    description: 'Mobile App used to keep track of very young children, with heaps of Safety features',
    techStack: ['Kotlin', 'Jetpack Compose', 'GoogleMaps API'],
    githubRepo: 'https://github.com/YSPlop/COMP90018_Ass2',
    imageUrl: '/project-overlay-images/Safecircle-overlay.png',
  },
  {
    title: 'Distributed Whiteboard',
    description: 'A peer-to-peer file-sharing system using hybrid client/server and peer-to-peer architecture.',
    techStack: ['Java', 'Maven', 'JSON'],
    githubRepo: 'https://github.com/YSPlop/distributed-systems-whiteboard',
    imageUrl: '/project-overlay-images/DistributedWhiteboard-overlay.png',
  },
  {
    title: 'Social Media Sentiment Analysis',
    description: 'A cloud-based application analyzing Twitter and Mastodon sentiment data with NLP and visualizing correlations with social indicators like family stress. Deployed using dynamic scaling and containerization.',
    techStack: ['Flask', 'React.js', 'Docker', 'CouchDB', 'Ansible', 'NLP'],
    githubRepo: 'https://github.com/YSPlop/COMP90024-T13',
    imageUrl: '/project-overlay-images/SocialMediaAnalysis-overlay.svg',
  } 
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
            githubRepo={project.githubRepo}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
