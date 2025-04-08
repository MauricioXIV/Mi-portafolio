import React, { useContext } from "react";
import elmau from "../images/elmau.jpg";
import { LanguageContexto } from "../context/LanguageContext";

const Navbar = () => {

    const {idioma} = useContext(LanguageContexto)

    return (
        idioma == 1 ? (
        <div className="navbar">
            <div className="imagen flex justify-end">
            <img className="w-9 h-9 rounded-full" src={elmau} alt="Mauricio"/>
            </div>
            <div className="yo justify"><div className="w-full justify-self-start">Mauricio Rodríguez</div><div className="text-xxs justify-self-start">Web Developer</div></div>
            <div className="apartado"><a href="#inicio">Inicio</a></div>
            <div className="apartado"><a href="#proyectos">Proyectos</a></div>
            <div className="apartado"><a href="#sobremi">Sobre mí</a></div>
            <div className="apartado"><a href="#skills">Skills</a></div>
        </div>) : (
            <div className="navbar">
            <div className="imagen flex justify-end">
            <img className="w-9 h-9 rounded-full" src={elmau} alt="Mauricio"/>
            </div>
            <div className="yo justify"><div className="w-full justify-self-start">Mauricio Rodríguez</div><div className="text-xxs justify-self-start">Web Developer</div></div>
            <div className="apartado"><a href="#inicio">Home</a></div>
            <div className="apartado"><a href="#proyectos">Projects</a></div>
            <div className="apartado"><a href="#sobremi">About me</a></div>
            <div className="apartado"><a href="#skills">Skills</a></div>
        </div>
        )
    )
}

export default Navbar;