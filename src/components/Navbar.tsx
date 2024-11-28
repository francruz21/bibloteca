import React from 'react';

import { IoIosArrowDown } from "react-icons/io";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom p-4 shadow-md flex justify-between items-center w-full">
      <div className="flex items-center space-x-2">
        <img
          src="/assets/icons/icono.png" 
          alt="Logo Biblioteca Electrónica UNSa"
          className="h-12 w-15" 
        />
        <span className="text-white text-xl font-semibold justify-start text-justify">
          Biblioteca <br /> Electrónica UNSa
        </span>
      </div>

      <ul className="flex justify-center space-x-12 text-white">
    
        <li className="relative group">
          <button className="hover:text-green-300 transition-all duration-300 font-poppins flex items-center">
            Facultades
            <IoIosArrowDown className="ml-2" /> 
          </button>
          <ul className="absolute left-0 hidden space-y-4 bg-white text-blue-950 group-hover:block p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out z-10">
            <li><a href="https://biblioeco.unsa.edu.ar/webbibeco/" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Cs Económicas</a></li>
            <li><a href="http://bibexa.unsa.edu.ar/" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Cs Exactas</a></li>
            <li><a href="#ciencias-salud" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Cs de la Salud</a></li>
            <li><a href="#ciencias-naturales" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Cs Naturales</a></li>
            <li><a href="http://humani.unsa.edu.ar/biblioteca/" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Humanidades</a></li>
            <li><a href="#ingenieria" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Ingeniería</a></li>
          </ul>
        </li>

        <li className="relative group">
          <button className="hover:text-green-300 transition-all duration-300 font-poppins flex items-center">
            Institutos
            <IoIosArrowDown className="ml-2" /> 
          </button>
          <ul className="absolute left-0 hidden space-y-4 bg-white text-blue-950  group-hover:block p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out z-10">
            <li><a href="#fac-humanidades" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Fac. Humanidades</a></li>
            <li><a href="#inenco" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Inenco</a></li>
            <li><a href="#inbemi" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Inbemi</a></li>
            <li><a href="#iniqui" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Iniqui</a></li>
          </ul>
        </li>


        <li className="relative group">
          <button className="hover:text-green-300 transition-all duration-300 font-poppins flex items-center">
            Sedes
            <IoIosArrowDown className="ml-2" /> 
          </button>
          <ul className="absolute left-0 hidden space-y-4  bg-white text-blue-950  group-hover:block p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out z-10">
            <li><a href="#oran" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Orán</a></li>
            <li><a href="#sur" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Sur</a></li>
            <li><a href="#tartagal" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Tartagal</a></li>
          </ul>
        </li>

  
        <li className="relative group">
          <button className="hover:text-green-300 transition-all duration-300 font-poppins flex items-center">
            Otro
            <IoIosArrowDown className="ml-2" /> 
          </button>
          <ul className="absolute right-0 hidden space-y-4  bg-white text-blue-950  group-hover:block p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out z-10 max-w-xs">
            <li><a href="#elibros" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">E-libros</a></li>
            <li><a href="#revistas" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Revistas</a></li>
            <li><a href="#bibliotecas-virtuales" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Bibliotecas Virtuales</a></li>
            <li><a href="#repositorios" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Repositorios</a></li>
            <li><a href="#iniqui" className="block hover:text-green-100-300 p-2 rounded-md transition-all duration-200">Bibliotecas Virtuales</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
