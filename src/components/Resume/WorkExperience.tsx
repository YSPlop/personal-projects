import { workExperiences } from "../../../public/resume/resume";

const WorkExperience = () => (
  <section className="py-8">
    <h2 className="text-3xl font-bold">Work Experience</h2>
    {workExperiences.map((experience, index) => (
      <div key={index} className="mt-6">
        <h3 className="text-xl font-semibold">{experience.title}</h3>
        <p className="text-sm italic">{experience.duration}</p>
        <ul className="list-disc pl-5 mt-2">
          {experience.description.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-2">{experience.techStack}</p>
      </div>
    ))}
  </section>
);

export default WorkExperience;