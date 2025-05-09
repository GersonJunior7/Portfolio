import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiElementor, SiPhp, SiSass, SiTypescript, SiWordpress } from "react-icons/si"; // Ícone do Sass
import { SiTailwindcss } from "react-icons/si"; // Ícone do Tailwind CSS

import styles from "./Skills.module.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

const Skills: React.FC = () => {
  const skills = [
    {
      id: 1,
      title: "HTML5",
      icon: <FaHtml5 size={50} color="#E34F26" />,
      description:
        "A versão mais recente da linguagem de marcação usada para estruturar conteúdo na web, incluindo textos, imagens e vídeos. Ele introduz novos elementos e APIs para melhorar a funcionalidade e a semântica das páginas web.",
    },
    {
      id: 2,
      title: "CSS3",
      icon: <FaCss3Alt size={50} color="#1572B6" />,
      description:
        "Uma linguagem de estilo usada para descrever a apresentação de um documento HTML. Com CSS, você pode controlar o layout, as cores, fontes, e outras propriedades visuais das páginas web.",
    },
    {
      id: 3,
      title: "JavaScript",
      icon: <FaJsSquare size={50} color="#F7DF1E" />,
      description:
        "Uma linguagem de programação que permite adicionar interatividade às páginas web. Com JS, é possível criar animações, formular validações, e fazer requisições ao servidor sem precisar recarregar a página.",
    },
    {
      id: 4,
      title: "TypeScript",
      icon: <SiTypescript size={50} color="#3178C6" />,
      description:
        "Um superset do JavaScript que adiciona tipagem estática ao código, ajudando a evitar erros e melhorar a produtividade no desenvolvimento. Muito utilizado em aplicações modernas com React, Node.js, entre outros.",
    },
    {
      id: 5,
      title: "Bootstrap",
      icon: <FaBootstrap size={50} color="#563D7C" />,
      description:
        "Um framework front-end que facilita a criação de páginas web responsivas e estéticas. Ele oferece componentes prontos como botões, barras de navegação, modais, e muito mais, com um design consistente.",
    },
    {
      id: 6,
      title: "Sass",
      icon: <SiSass size={50} color="#CC6699" />,
      description:
        "Um pré-processador CSS que adiciona funcionalidades avançadas ao CSS, como variáveis, aninhamento de regras e mixins, tornando o código mais organizado e reutilizável.",
    },
    {
      id: 7,
      title: "Tailwind Css",
      icon: <SiTailwindcss size={50} color="#06B6D4" />,
      description:
        "Um framework CSS baseado em utilitários que permite um controle preciso sobre o design da página, utilizando classes para definir estilos diretamente nos elementos HTML, tornando a construção de layouts rápida e flexível.",
    },
    {
      id: 8,
      title: "React",
      icon: <FaReact size={50} color="#61DBFB" />,
      description:
        "Uma biblioteca JavaScript para a criação de interfaces de usuário interativas e reutilizáveis. React facilita a construção de componentes dinâmicos e eficientes, melhorando a experiência do desenvolvedor.",
    },
    {
      id: 9,
      title: "PHP",
      icon: <SiPhp size={50} color="#8A2BE2" />,
      description:
        "Uma linguagem de programação de uso geral, principal voltada para o desenvolvimento de sites dinâmicos. Com PHP, você pode criar funcionalidades interativas, processar formulários e manipular dados em servidores.",
    },
    {
      id: 10,
      title: "SQL",
      icon: <FaDatabase size={50} color="#00618B" />,
      description:
        "Uma linguagem de consulta estruturada usada para gerenciar dados em bancos de dados relacionais. Com SQL, você pode criar, ler, atualizar e excluir dados, além de estruturar consultas complexas.",
    },
    {
      id: 11,
      title: "Git",
      icon: <FaGitAlt size={50} color="#F05032" />,
      description:
        "Um sistema de controle de versão distribuído que permite acompanhar o histórico de alterações no código, colaborar com outras pessoas e gerenciar diferentes versões de um projeto de forma eficiente.",
    },
    {
      id: 12,
      title: "GitHub",
      icon: <FaGithub size={50} color="#fff" />,
      description:
        "Uma plataforma baseada em Git usada para hospedagem de código, colaboração entre desenvolvedores, versionamento de projetos e integração contínua. Amplamente utilizada no desenvolvimento open-source e profissional.",
    },
    {
      id: 13,
      title: "WordPress",
      icon: <SiWordpress size={50} color="#21759B" />,
      description:
        "Um CMS (Sistema de Gerenciamento de Conteúdo) amplamente utilizado para criar sites e blogs com facilidade. Permite gerenciamento de conteúdo dinâmico e integração com plugins para funcionalidades extras.",
    },
    {
      id: 14,
      title: "Elementor",
      icon: <SiElementor size={50} color="#92003B" />,
      description:
        "Um dos construtores visuais mais populares para WordPress. Com Elementor, é possível criar páginas arrastando e soltando elementos, otimizando o processo de criação visual sem necessidade de codificação.",
    },
  ];

  return (
    <div className={styles.background}>
      <div className="container mx-auto px-5 lg:px-20 py-20">
        <div className={`${styles["content-title-skills"]} text-center`}>
          <h1 className={`${styles["title-skills"]} font-bold text-white`}>
            Meus Conhecimentos
          </h1>
        </div>
        <div className={`${styles["content-group-skills"]} text-white`}>
          <div className="mx-auto grid grid-cols-3 sm:grid-cols-3 py-20 md:grid-cols-5 gap-8 max-w-md md:max-w-4xl">
            {skills.map((skill) => (
              <Dialog key={skill.id} >
                <DialogTrigger>
                  <div
                    className={`${styles["card"]} card flex justify-center items-center`}
                  >
                    {skill.icon}
                  </div>
                </DialogTrigger>
                <DialogContent className={styles['dialog-content']}>
                  <DialogHeader>
                    <DialogTitle className="text-white">{skill.title}</DialogTitle>
                    <DialogDescription>{skill.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
