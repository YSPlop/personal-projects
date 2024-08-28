import { FaReact, FaNodeJs, FaAws, FaLaravel } from 'react-icons/fa';
import '../styles/skills.module.css'

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="overflow-hidden relative">
          <div className="whitespace-nowrap animate-scroll">
            <div className="inline-block text-center mx-6">
              <FaLaravel size={50} className="text-red-500 mx-auto mb-4" />
              <p className="text-lg">Laravel</p>
            </div>
            <div className="inline-block text-center mx-6">
              <FaReact size={50} className="text-blue-500 mx-auto mb-4" />
              <p className="text-lg">React.js</p>
            </div>
            <div className="inline-block text-center mx-6">
              <FaNodeJs size={50} className="text-green-500 mx-auto mb-4" />
              <p className="text-lg">Node.js</p>
            </div>
            <div className="inline-block text-center mx-6">
              <FaAws size={50} className="text-yellow-500 mx-auto mb-4" />
              <p className="text-lg">AWS</p>
            </div>
            {/* Duplicate the items for endless effect */}
            <div className="inline-block text-center mx-6">
              <FaLaravel size={50} className="text-red-500 mx-auto mb-4" />
              <p className="text-lg">Laravel</p>
            </div>
            <div className="inline-block text-center mx-6">
              <FaReact size={50} className="text-blue-500 mx-auto mb-4" />
              <p className="text-lg">React.js</p>
            </div>
            <div className="inline-block text-center mx-6">
              <FaNodeJs size={50} className="text-green-500 mx-auto mb-4" />
              <p className="text-lg">Node.js</p>
            </div>
            <div className="inline-block text-center mx-6">
              <FaAws size={50} className="text-yellow-500 mx-auto mb-4" />
              <p className="text-lg">AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
