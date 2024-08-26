import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Project 1" description="A web app that does X" />
          <ProjectCard title="Project 2" description="A tool that does Y" />
          {/* Add more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
