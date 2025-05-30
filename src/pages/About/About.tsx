import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import styles from "./About.module.css"; // Importando o CSS
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-5 lg:px-20 pb-40">
      <Card className={styles["card-container"]}>
        <div className={styles["card-flex"]}>
          <CardHeader className={styles["card-header"]}>
            <img
              src="https://placehold.co/600x500" // Substitua pelo seu URL de imagem
              alt="Profile"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardContent className={styles["card-content"]}>
            <CardTitle className={styles["card-title"]}>Quem sou eu?</CardTitle>
            <CardTitle className={`${styles["card-name"]} mt-5`}>
              Gerson Junior
            </CardTitle>
            <CardTitle className={`${styles["card-subtitle"]} mt-2`}>
              Desenvolvedor <span className="span-subtitle">Full-Stack</span>
            </CardTitle>
            <CardDescription className={`${styles["card-description"]} mt-10`}>
              Meu nome é Gerson Junior, desenvolvedor Full-Stack apaixonado por
              criar interfaces modernas, rápidas e responsivas com React,
              Tailwind CSS e JavaScript. Também tenho sólida experiência em PHP,
              MySQL e otimização de SEO, garantindo que cada projeto seja não
              apenas bonito e performático, mas também eficiente, seguro e bem
              posicionado nos motores de busca. Utilizo as melhores tecnologias
              para entregar soluções digitais de alta qualidade, focadas em
              performance, usabilidade e resultados.
            </CardDescription>
            <CardFooter className={`${styles["card-footer"]} mt-5`}>
              <Button
                className={styles["button-about"]}
                variant="outline"
                asChild
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5522992747427&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["icon-link"]}
                >
                  <FaWhatsapp className={`${styles["icon"]}`} />
                </a>
              </Button>
              <Button
                className={styles["button-about"]}
                variant="outline"
                asChild
              >
                <a
                  href="https://instagram.com/devgerson_junior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["icon-link"]}
                >
                  <FaInstagram className={styles["icon"]} />
                </a>
              </Button>
              <Button
                className={styles["button-about"]}
                variant="outline"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/gerson-junior-498337253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["icon-link"]}
                >
                  <FaLinkedin className={`${styles["icon"]}`} />
                </a>
              </Button>
              <Button
                className={styles["button-about"]}
                variant="outline"
                asChild
              >
                <a
                  href="https://github.com/GersonJunior7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["icon-link"]}
                >
                  <FaGithub className={`${styles["icon"]}`} />
                </a>
              </Button>
            </CardFooter>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default About;
