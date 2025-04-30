import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles["background"]} text-white py-6`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Texto com direitos reservados */}
        <p className={`${styles['paragraph-footer']} text-lg`}>
          Copyright © 2025{" "}
          <a href="http://devgersonjunior.com/" target="_blank">
            devgersonjunior.com
          </a>
          . Todos os direitos reservados.
        </p>

        {/* Ícones de redes sociais */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className={styles["icon"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
