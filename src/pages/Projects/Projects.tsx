import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import {
  SiElementor,
  SiPhp,
  SiSass,
  SiTypescript,
  SiWordpress,
} from "react-icons/si"; // Ícone do Sass
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
import { useState } from "react";

const Projects: React.FC = () => {
  const [filtro, setFiltro] = useState("todos");
  const projetos = [
    {
      id: 1,
      stack: "front-end",
      titulo: "Porfólio Dev",
      descricao:
        "Este portfólio foi desenvolvido com o objetivo de apresentar meus principais projetos, minhas habilidades como desenvolvedor web e também contar um pouco sobre minha trajetória profissional. A ideia é transmitir, de forma clara e visualmente agradável, quem sou eu, como trabalho e como posso contribuir para soluções digitais eficientes e modernas. Cada detalhe foi pensado para refletir minha identidade profissional e demonstrar minha capacidade técnica.",
      descricao2: "",
      imagem: "https://placehold.co/500x400",
      videoUrl: video, // apenas o caminho
      tecnologia: [
        <FaReact size={30} color="#00BFFF" />,
        <SiTypescript size={30} color="#00BFFF" />,
        <FaJsSquare size={30} color="#00BFFF" />,
        <FaCss3Alt size={30} color="#00BFFF" />,
        <SiTailwindcss size={30} color="#00BFFF" />,
      ],
    },
    {
      id: 2,
      titulo: "Projeto Baby-Move",
      stack: "front-end",
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
      id: 3,
      titulo: "Academia Nexus",
      stack: "backend",
      descricao:
        "Projeto desenvolvido para uma academia local com o objetivo de apresentar a estrutura, os serviços oferecidos e atrair novos alunos. Utilizei WordPress junto ao construtor Elementor para garantir uma entrega rápida, moderna e totalmente responsiva. O site conta com seções bem definidas, como planos de treino, galeria de fotos, informações sobre os instrutores e formulário de contato integrado. Este projeto demonstra minha capacidade de criar soluções visuais e funcionais utilizando ferramentas no-code, atendendo às necessidades do cliente de forma profissional e eficiente.",
      imagem: "https://placehold.co/500x400",
      tecnologia: [
        <SiWordpress size={30} color="#00BFFF" />,
        <SiElementor size={30} color="#00BFFF" />,
        <FaCss3Alt size={30} color="#00BFFF" />,
        <FaHtml5 size={30} color="#00BFFF" />,
      ],
    },
  ];

  const projetosFiltrados =
    filtro === "todos" ? projetos : projetos.filter((p) => p.stack === filtro);

  return (
    <div className="container mx-auto px-5 lg:px-20 py-50">
      <div className={`${styles["content-title-projects"]} text-center`}>
        <h1 className={`${styles["title-projects"]} font-bold text-white`}>
          Meus Projetos
        </h1>

        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant={filtro === "todos" ? "default" : "outline"}
            onClick={() => setFiltro("todos")}
          >
            Ver Todos
          </Button>
          <Button
            variant={filtro === "front-end" ? "default" : "outline"}
            onClick={() => setFiltro("front-end")}
          >
            Front-end
          </Button>
          <Button
            variant={filtro === "backend" ? "default" : "outline"}
            onClick={() => setFiltro("backend")}
          >
            Back-end
          </Button>
        </div>
      </div>
      <div className={styles["content-group"]}>
        <div className="mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-screen-xxl">
          {projetosFiltrados.map((projeto) => (
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
                      <DialogTitle className="text-left">
                        {projeto.titulo}
                      </DialogTitle>
                      <DialogDescription className="text-left">
                        {projeto.descricao}
                      </DialogDescription>
                      <DialogDescription>
                        {projeto.descricao2}
                      </DialogDescription>
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
