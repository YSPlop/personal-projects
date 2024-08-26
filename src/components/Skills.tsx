import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <FaReact size={50} className="text-blue-500 mx-auto mb-4" />
            <p className="text-lg">React.js</p>
          </div>
          <div className="text-center">
            <FaNodeJs size={50} className="text-green-500 mx-auto mb-4" />
            <p className="text-lg">Node.js</p>
          </div>
          <div className="text-center">
            <FaAws size={50} className="text-yellow-500 mx-auto mb-4" />
            <p className="text-lg">AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
