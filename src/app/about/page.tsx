import Skills from "@/app/components/Skills";

const About: React.FC = () => {
    const aboutText = "I'm a junior developer with a strong passion for front-end development, AI integration, and building meaningful projects that have an impact.";
    return (
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            {aboutText}
          </p>
          <Skills />
          <a 
            href="/public/lol.docx" 
            download 
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Download My Resume
          </a>
        </div>
      </section>
    );
  };
  
export default About;
  