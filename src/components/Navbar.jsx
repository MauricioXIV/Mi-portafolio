import React, { useContext, useState } from "react";
import mauadmin from "../images/mauprof.jpg"
import { LanguageContexto } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";
import Slide from "./Slide";
import Fade from "./Fade";
import Zoom from "../components/Zoom";

const Navbar = () => {

    const {idioma} = useContext(LanguageContexto)
    const [isOpen, setIsOpen] = useState(false);

    return (

        idioma == 1 ? (
        <nav className="navbar">
            <div className="imagen flex justify-center peque:justify-end peque:pr-2 esmol:pr-1 sm:pr-2">
            <img className="xs:w-9 xs:h-9 xl:w-11 xl:h-11 rounded-full object-cover" src={mauadmin} alt="Mauricio"/>
            </div>
            <div className="yo justify xl:pb-1"><div className="w-full justify-self-start xl:text-base">Mauricio Rodríguez</div><div className="text-xxs justify-self-start xl:text-xs">Web Developer</div></div>
    
            <ul className="hidden md:flex gap-6 text-gray-200 font-medium md:w-5/12 xl:text-base">
              <li className="w-1/4 md:pl-4 larguito:pl-0"><a className="hover:text-gray-400" href="#inicio">Inicio</a></li>
              <li className="w-1/4"><a className="hover:text-gray-400" href="#proyectos">Proyectos</a></li>
              <li className="w-1/4"><a className="hover:text-gray-400" href="#sobremi">Sobre mí</a></li>
              <li className="w-1/4"><a className="hover:text-gray-400" href="#skills">Skills</a></li>
            </ul>
      
            <button className="md:hidden w-1/12" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
      
            {isOpen ? (
              <Slide key={isOpen}>
              <div className="bg-[#161612] flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
                <a className="hover:text-gray-400" href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
                <a className="hover:text-gray-400" href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
                <a className="hover:text-gray-400" href="#sobremi" onClick={() => setIsOpen(false)}>Sobre mí</a>
                <a className="hover:text-gray-400" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              </div>
              </Slide>
            ) : null}
          </nav>
        ) : (
            <nav className="navbar">
            <div className="imagen flex justify-center peque:justify-end peque:pr-2 esmol:pr-1 sm:pr-2">
            <img className="xs:w-9 xs:h-9 xl:w-11 xl:h-11 rounded-full object-cover" src={mauadmin} alt="Mauricio"/>
            </div>
            <div className="yo justify xl:pb-1"><div className="w-full justify-self-start xl:text-base">Mauricio Rodríguez</div><div className="text-xxs justify-self-start xl:text-xs">Web Developer</div></div>
    
            <ul className="hidden md:flex gap-6 text-gray-200 font-medium md:w-5/12 xl:text-base">
              <li className="w-1/4"><a className="hover:text-gray-400" href="#inicio">Home</a></li>
              <li className="w-1/4"><a className="hover:text-gray-400" href="#proyectos">Projects</a></li>
              <li className="w-1/4"><a className="hover:text-gray-400" href="#sobremi">About me</a></li>
              <li className="w-1/4"><a className="hover:text-gray-400" href="#skills">Skills</a></li>
            </ul>
      
            <button className="md:hidden w-1/12" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
      
            {isOpen ? (
              <Slide key={isOpen}>
              <div className="bg-[#161612] flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
                <a className="hover:text-gray-400" href="#inicio" onClick={() => setIsOpen(false)}>Home</a>
                <a className="hover:text-gray-400" href="#proyectos" onClick={() => setIsOpen(false)}>Projects</a>
                <a className="hover:text-gray-400" href="#sobremi" onClick={() => setIsOpen(false)}>About me</a>
                <a className="hover:text-gray-400" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              </div>
              </Slide>
            ) : null}
          </nav>
        )

    )
}

export default Navbar;