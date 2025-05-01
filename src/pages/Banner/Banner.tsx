import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import styles from "./Banner.module.css"; // Importando o CSS

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className="container mx-auto px-5 lg:px-20 py-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Texto sobre você */}
          <div className="flex flex-col justify-center">
            <h2 className={styles.title}>
              Soluções Digitais que Ajudam {}
              <span className={styles["span-title"]}>
                Empresas a se Destacarem
              </span>{" "}
              de Forma Eficiente Online
            </h2>
            <div className="mt-10">
              <a
                href="https://api.whatsapp.com/send?phone=5522992747427&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className={styles["icon-link"]}
              >
                <Button className={styles["button-banner"]}>
                  Vamos Conversar <FaWhatsapp className="icon mr-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/500x500" // Substitua pelo seu URL de imagem
              alt="Profile"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
