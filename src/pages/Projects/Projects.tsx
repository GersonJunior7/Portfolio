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
import video from "../../assets/video-project/Baby-Move/baby.mp4";

import styles from "./Projects.module.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";

const Projects: React.FC = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto Baby-Move",
      descricao:
        "Site desenvolvido para a Baby Move, empresa focada no monitoramento pré-natal com tecnologia de ponta. O projeto teve como objetivo apresentar a solução de forma clara e confiável para gestantes e profissionais da saúde. Atuei como desenvolvedor front-end na i3Group, participando desde a estruturação da interface até a implementação das funcionalidades, garantindo uma experiência responsiva e alinhada à marca.",
      descricao2: "",
        imagem: "https://placehold.co/500x400",
      videoUrl: video, // apenas o caminho
      tecnologia: [
        <FaCss3Alt size={30} color="#00BFFF" />,
        <FaHtml5 size={30} color="#00BFFF" />,
        <FaJsSquare size={30} color="#00BFFF" />,
        <FaBootstrap size={30} color="#00BFFF" />,
        <SiPhp size={30} color="#00BFFF" />,
      ],
    },
    {
      id: 2,
      titulo: "Projeto Webinar",
      descricao:
        "Aplicativo de monitoramento de saúde com recursos para controlar exercícios e alimentação.",
      imagem: "https://placehold.co/500x400",
      tecnologia: [
        <FaCss3Alt size={30} color="#00BFFF" />,
        <FaHtml5 size={30} color="#00BFFF" />,
        <FaJsSquare size={30} color="#00BFFF" />,
        <FaBootstrap size={30} color="#00BFFF" />,
        <SiPhp size={30} color="#00BFFF" />,
      ],
    },
    {
      id: 3,
      titulo: "Projeto Tunas Arquitetura",
      descricao: "Plataforma de ensino interativo para crianças.",
      imagem: "https://placehold.co/500x400",
      tecnologia: [
        <FaCss3Alt size={30} color="#00BFFF" />,
        <FaHtml5 size={30} color="#00BFFF" />,
        <FaJsSquare size={30} color="#00BFFF" />,
        <FaBootstrap size={30} color="#00BFFF" />,
        <SiPhp size={30} color="#00BFFF" />,
      ],
    },
    {
      id: 4,
      titulo: "Projeto Colégio Aprovado",
      descricao:
        "Aplicativo para monitoramento de sustentabilidade e consumo de energia.",
      imagem: "https://placehold.co/500x400",
      tecnologia: [
        <FaCss3Alt size={30} color="#00BFFF" />,
        <FaHtml5 size={30} color="#00BFFF" />,
        <FaJsSquare size={30} color="#00BFFF" />,
        <FaBootstrap size={30} color="#00BFFF" />,
        <SiPhp size={30} color="#00BFFF" />,
      ],
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
              <DialogTrigger asChild>
                <div
                  className={`${styles["card"]} flex justify-center items-center cursor-pointer`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && e.currentTarget.click()
                  }
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
                      <div className={styles["view-btn"]}>
                        Visualizar Projeto
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className={styles["dialog-container"]}>
                <div className={styles.dialogContent}>
                  {/* Vídeo à esquerda */}
                  <div className={styles["container-video"]}>
                    <video
                      className={styles.video}
                      controls
                      autoPlay
                      muted
                      loop
                    >
                      <source src={projeto.videoUrl} type="video/mp4" />
                    </video>
                    <div className={styles["button-project"]}>
                      <Button>Acessar WebSite</Button>
                      <Button>GitHub</Button>
                    </div>
                  </div>

                  {/* Conteúdo à direita */}
                  <div className={styles.info}>
                    <DialogHeader>
                      <DialogTitle className="text-left">{projeto.titulo}</DialogTitle>
                      <DialogDescription className="text-left">{projeto.descricao}</DialogDescription>
                      <DialogDescription>{projeto.descricao2}</DialogDescription>
                    </DialogHeader>

                    <div className={styles.techList}>
                      <ul>
                        {Array.isArray(projeto.tecnologia) &&
                          projeto.tecnologia.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
