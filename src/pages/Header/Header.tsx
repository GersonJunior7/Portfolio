import styles from "./Header.module.css"; // Importando o CSS
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header  className={`${styles.header} fixed top-0 left-0 w-full z-50`}>
      <div className="container mx-auto px-5 lg:px-20 py-8">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-2xl font-bold">DevGerson</h1>
          </div>

          {/* Navbar para telas grandes */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <a href="#sobre" className="text-white text-1xl font-bold hover:text-gray-400">
                      Sobre
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <a
                      href="#habilidades"
                      className="text-white text-1xl font-bold hover:text-gray-400"
                    >
                      Habilidades
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <a
                      href="#projetos"
                      className="text-white text-1xl font-bold hover:text-gray-400"
                    >
                      Projetos
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <a
                      href="#contato"
                      className="text-white text-1xl font-bold hover:text-gray-400"
                    >
                      Contato
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Menu Hambúrguer para telas pequenas */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {/* Ícone do hambúrguer */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Menu de navegação visível em telas pequenas */}
        {isMenuOpen && (
          <div className="md:hidden mt-5">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-4">
                <NavigationMenuItem className={`${styles['navegacao-mobile']}`}>
                  <NavigationMenuTrigger>
                    <a href="#sobre" className="text-white hover:text-gray-400">
                      Sobre
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem className={`${styles['navegacao-mobile']}`}>
                  <NavigationMenuTrigger>
                    <a
                      href="#habilidades"
                      className= "text-white hover:text-gray-400"
                    >
                      Habilidades
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem className={`${styles['navegacao-mobile']}`}>
                  <NavigationMenuTrigger>
                    <a
                      href="#projetos"
                      className="text-white hover:text-gray-400"
                    >
                      Projetos
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                <NavigationMenuItem >
                  <NavigationMenuTrigger>
                    <a
                      href="#contato"
                      className="text-white hover:text-gray-400"
                    >
                      Contato
                    </a>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
