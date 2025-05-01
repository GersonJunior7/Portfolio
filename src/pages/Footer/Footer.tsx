import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles["background"]} text-white`}>
      <div className="container mx-auto px-5 lg:px-20 py-8 flex justify-between items-center">
        {/* Texto com direitos reservados */}
        <p className={`${styles['paragraph-footer']} text-lg`}>
          Copyright © 2025{" "}
          <a href="" target="_blank">
            devgersonjunior.com
          </a>
          . 
        </p>

        {/* Ícones de redes sociais */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/GersonJunior7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gerson-junior-498337253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5522992747427&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://instagram.com/devgerson_junior"
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
