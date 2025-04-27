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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-8">
      <div className="content-title-skills text-center">
        <h1 className="title-skills font-bold text-white">Habilidades</h1>
      </div>
      <div className="content-group-skills text-center">
        <div className="mx-auto grid grid-cols-3 sm:grid-cols-3 py-8 md:grid-cols-5 gap-8 max-w-md md:max-w-4xl">
          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <FaHtml5 size={50} color="#E34F26" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>HTML5</DialogTitle>
                <DialogDescription>
                  A versão mais recente da linguagem de marcação usada para
                  estruturar conteúdo na web, incluindo textos, imagens e
                  vídeos. Ele introduz novos elementos e APIs para melhorar a
                  funcionalidade e a semântica das páginas web.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <FaCss3Alt size={50} color="#1572B6" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>CSS3</DialogTitle>
                <DialogDescription>
                  Uma linguagem de estilo usada para descrever a apresentação de
                  um documento HTML. Com CSS, você pode controlar o layout, as
                  cores, fontes, e outras propriedades visuais das páginas web.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <FaJsSquare size={50} color="#F7DF1E" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>JavaScript</DialogTitle>
                <DialogDescription>
                  Uma linguagem de programação que permite adicionar
                  interatividade às páginas web. Com JS, é possível criar
                  animações, formular validações, e fazer requisições ao
                  servidor sem precisar recarregar a página.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <FaBootstrap size={50} color="#563D7C" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Bootstrap</DialogTitle>
                <DialogDescription>
                  Um framework front-end que facilita a criação de páginas web
                  responsivas e estéticas. Ele oferece componentes prontos como
                  botões, barras de navegação, modais, e muito mais, com um
                  design consistente.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <SiSass size={50} color="#CC6699" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sass</DialogTitle>
                <DialogDescription>
                  Um pré-processador CSS que adiciona funcionalidades avançadas
                  ao CSS, como variáveis, aninhamento de regras e mixins,
                  tornando o código mais organizado e reutilizável.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <SiTailwindcss size={50} color="#06B6D4" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tailwinds css</DialogTitle>
                <DialogDescription>
                  Um framework CSS baseado em utilitários que permite um
                  controle preciso sobre o design da página, utilizando classes
                  para definir estilos diretamente nos elementos HTML, tornando
                  a construção de layouts rápida e flexível.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <FaReact size={50} color="#61DBFB" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>React</DialogTitle>
                <DialogDescription>
                  Uma biblioteca JavaScript para a criação de interfaces de
                  usuário interativas e reutilizáveis. React facilita a
                  construção de componentes dinâmicos e eficientes, melhorando a
                  experiência do desenvolvedor.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <SiPhp size={50} color="#8A2BE2" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>PHP</DialogTitle>
                <DialogDescription>
                  Uma linguagem de programação de uso geral, principalmente
                  voltada para o desenvolvimento de sites dinâmicos. Com PHP,
                  você pode criar funcionalidades interativas, processar
                  formulários e manipular dados em servidores.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="card flex justify-center items-center">
                <FaDatabase size={50} color="#00618B" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>SQL</DialogTitle>
                <DialogDescription>
                  Uma linguagem de consulta estruturada usada para gerenciar
                  dados em bancos de dados relacionais. Com SQL, você pode
                  criar, ler, atualizar e excluir dados, além de estruturar
                  consultas complexas.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Skills;
