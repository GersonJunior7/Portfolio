import { Button } from "../ui/button";
import "./Banner.css"; // Importando o CSS

const Banner: React.FC = () => {
  return (
    <div className="banner p-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Texto sobre você */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="title font-bold text-white">Soluções Digitais que Ajudam <span className="span-title">Empresas a se Destacarem</span> de Forma Eficiente Online</h2>
            <div className="mt-10">
              <Button className="button-banner">
                Vamos Conversar
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <img
              src="/path-to-your-image.jpg" // Altere com o caminho correto da sua imagem
              alt="Foto sobre mim"
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
