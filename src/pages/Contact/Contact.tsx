import styles from "./Contact.module.css";

import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className="container mx-auto px-5 lg:px-20 py-20">
        <div className={`${styles["content-title-contact"]} text-center mb-10`}>
          <h1
            className={`${styles["title-contact"]} font-bold text-white text-3xl`}
          >
            Entre em Contato
          </h1>
          <p className="text-gray-300 mt-2 text-lg max-w-2xl mx-auto">
            Tem uma ideia ou projeto em mente, ou apenas quer bater um papo?
            Fique à vontade para me enviar uma mensagem. Preencha o formulário
            abaixo e responderei o mais rápido possível!
          </p>
        </div>

        <form className="grid max-w-2xl mx-auto p-1 rounded-2xl shadow-md">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              className={styles["input-form"]}
              placeholder="Nome"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              className={styles["input-form"]}
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              className={styles["input-form"]}
              type="tel"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              className={styles["input-area"]}
              placeholder="Escreva sua mensagem aqui..."
              rows={50}
            />
          </div>

          <Button
            type="submit"
            variant="ghost"
            className={`${styles["button-form"]} w-full mt-5`}
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
