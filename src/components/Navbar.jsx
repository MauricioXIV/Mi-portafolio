import React from "react";
import elmau from "../images/elmau.jpg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imagen">
            <img className="w-9 h-9 justify-self-center rounded-full lg:ml-8 md:ml-10 sm:ml-16" src={elmau} />
            </div>
            <div className="yo">Mauricio Rodríguez<div className="text-xxs">Web Developer</div></div>
            <div className="apartado pl-5">Inicio</div>
            <div className="apartado">Proyectos</div>
            <div className="apartado">Sobre mí</div>
        </div>
    )
}

export default Navbar;