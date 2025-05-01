import { FaCheckCircle } from "react-icons/fa";
import styles from "./Confirm.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";

const Confirm: React.FC = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className={`${styles.background} bg-[#020418] min-h-screen flex flex-col`}>
      <Header />
      <div className="flex-grow flex items-center justify-center px-5 lg:px-20">
        <div className="text-center max-w-2xl">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            Sua mensagem foi enviada com sucesso!
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Obrigado por entrar em contato. Em breve responderei!
          </p>
          <Button
            onClick={handleBackHome}
            variant="ghost"
            className="px-6 py-3 text-white border border-white hover:bg-white hover:text-black transition-all duration-200"
          >
            Voltar para a página inicial
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirm;
