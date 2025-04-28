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

import styles from "./Projects.module.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Projects: React.FC = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto Baby-Move",
      descricao:
        "Projeto que envolve o desenvolvimento de um aplicativo para bebês em movimento.",
      imagem: "https://placehold.co/500x400",
      tecnologia: "HTML5",
    },
    {
      id: 2,
      titulo: "Projeto Webinar",
      descricao:
        "Aplicativo de monitoramento de saúde com recursos para controlar exercícios e alimentação.",
        imagem: "https://placehold.co/500x400",
      tecnologia: "CSS3",

    },
    {
      id: 3,
      titulo: "Projeto Tunas Arquitetura",
      descricao: "Plataforma de ensino interativo para crianças.",
      imagem: "https://placehold.co/500x400",
      tecnologia: "JavaScript",
    },
    {
      id: 4,
      titulo: "Projeto Colégio Aprovado",
      descricao:
        "Aplicativo para monitoramento de sustentabilidade e consumo de energia.",
        imagem: "https://placehold.co/500x400",
      tecnologia: "React",
    },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-20 py-50">
      <div className={`${styles["content-title-projects"]} text-center`}>
        <h1 className={`${styles["title-projects"]} font-bold text-white`}>
          Meus Projetos
        </h1>
      </div>
      <div className={styles["content-group"]}>
        <div className="mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-screen-xxl">
          {projetos.map((projeto) => (
            <Dialog key={projeto.id}>
              <DialogTrigger>
                <div
                  className={`${styles["card"]} flex justify-center items-center`}
                >
                  <div className={styles["card-image"]}>
                    <img
                      src={projeto.imagem}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className={styles["overlay"]}></div>
                    <div className={styles["text-overlay"]}>
                      {projeto.titulo}
                    </div>
                    <div className={styles["view-project-btn"]}>
                      <button className={styles["view-btn"]}>
                        Visualizar Projeto
                      </button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{projeto.tecnologia}</DialogTitle>
                  <DialogDescription>{projeto.descricao}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
