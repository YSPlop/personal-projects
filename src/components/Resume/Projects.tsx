import { projects } from "../../../public/resume/resume";

const Projects = () => (
  <section className="py-8">
    <h2 className="text-3xl font-bold">Projects</h2>
    <ul className="list-disc pl-5 mt-4">
      {projects.map((project, index) => (
        <li key={index} className="mb-6">
          <strong>{project.title}:</strong> {project.description}{" "}
          {project.link && (
            <a
              href={project.link}
              className="text-blue-500 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view!
            </a>
          )}
          <p className="text-sm text-gray-500">{project.techStack}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;