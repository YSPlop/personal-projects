const About: React.FC = () => {
    const aboutText = "I'm a junior developer with a strong passion for front-end development, AI integration, and building meaningful projects that have an impact.";
    return (
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            {aboutText}
          </p>
        </div>
      </section>
    );
  };
  
export default About;
  