import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import "./About.css"; // Importando o CSS
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="card-container">
        <div className="card-flex">
          <CardHeader className="card-header">
            <img
              src="https://via.placeholder.com/250" // Substitua pelo seu URL de imagem
              alt="Profile"
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardContent className="card-content">
            <CardTitle className="card-title">Quem sou eu?</CardTitle>
            <CardTitle className="card-name mt-5">Gerson Junior</CardTitle>
            <CardTitle className="card-subtitle mt-2">
              Desenvolvedor <span className="span-subtitle">Full-Stack</span>
            </CardTitle>
            <CardDescription className="card-description mt-10">
              Me chamo Gerson Junior, desenvolvedor front-end apaixonado por
              criar interfaces modernas e rápidas com React, Tailwind CSS, e
              JavaScript. Com foco em performance e design responsivo, uso as
              melhores ferramentas para entregar soluções digitais de alta
              qualidade.
            </CardDescription>
            <CardFooter className="card-footer mt-5">
              <Button className="button-about" variant="outline" asChild>
                <a
                  href="https://wa.me/seunumerowhats"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="icon mr-2" style={{ color: "#986DFF" }}/>
                </a>
              </Button>
              <Button className="button-about" variant="outline" asChild>
                <a
                  href="https://instagram.com/seuuser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon mr-2" style={{ color: "#986DFF" }}/>
                </a>
              </Button>
              <Button className="button-about" variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/seuuser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon mr-2" style={{ color: "#986DFF" }}/>
                </a>
              </Button>
              <Button className="button-about" variant="outline" asChild>
                <a
                  href="https://github.com/seuuser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon mr-2" style={{ color: "#986DFF" }}  />
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
