import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiPhp, SiSass } from "react-icons/si"; // Ícone do Sass
import { SiTailwindcss } from "react-icons/si"; // Ícone do Tailwind CSS

import "./Skills.css"; // Importando o CSS

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="content-title-skills text-center">
        <h1 className="title-skills font-bold text-white">Habilidades</h1>
      </div>
      <div className="content-group-skills text-center">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 py-8 md:grid-cols-5 gap-8 max-w-md md:max-w-4xl">
          <div className="card flex justify-center items-center">
            <FaHtml5 size={50} color="#E34F26" />
          </div>
          <div className="card flex justify-center items-center">
            <FaCss3Alt size={50} color="#1572B6" />
          </div>
          <div className="card flex justify-center items-center">
            <FaJsSquare size={50} color="#F7DF1E" />
          </div>
          <div className="card flex justify-center items-center">
            <FaBootstrap size={50} color="#563D7C" />
          </div>
          <div className="card flex justify-center items-center">
            <SiSass size={50} color="#CC6699" />
          </div>
          <div className="card flex justify-center items-center">
            <SiTailwindcss size={50} color="#06B6D4" />
          </div>
          <div className="card flex justify-center items-center">
            <FaReact size={50} color="#61DBFB" />
          </div>
          <div className="card flex justify-center items-center">
            <SiPhp size={50} color="#8A2BE2" />
          </div>
          <div className="card flex justify-center items-center">
            <FaDatabase size={50} color="#00618B" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
