import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { SiPhp, SiSass } from "react-icons/si"; // Ícone do Sass
import { SiTailwindcss } from "react-icons/si"; // Ícone do Tailwind CSS

import styles from "./Cta.module.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

const Cta: React.FC = () => {
  return (
    <div className={`${styles.background} bg-[#020418]`}>
      <div className="container mx-auto px-5 lg:px-20 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start lg:items-center gap-10">
          {/* Título à esquerda */}
          <div className="text-left">
            <h1 className={`${styles["title-cta"]} font-extrabold text-white`}>
              Transforme Suas Ideias em <br />{" "}
              <span className={styles["span-color"]}>Resultados</span>{" "}
              Excepcionais!
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-xl">
              Com experiência em desenvolvimento Full-stack e paixão por criar
              soluções criativas e eficientes, estou pronto para transformar
              suas necessidades em realidade. Vamos construir juntos a próxima
              grande ideia!
            </p>
          </div>

          {/* Botão à direita */}
          <div>
            <a
              href="https://wa.me/5511999999999"
              className={`${styles["button-cta"]} flex items-center justify-center gap-2`}
            >
              <span>Entrar em contato</span>
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
