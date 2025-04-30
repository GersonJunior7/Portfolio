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
              <Button className={styles["button-banner"]}>
                Vamos Conversar <FaWhatsapp className="icon mr-2" />
              </Button>
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
