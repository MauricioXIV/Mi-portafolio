import React from "react";
import { FaFilePdf } from 'react-icons/fa';
import ReactLogo from "../assets/react.svg";
import Html from "../images/html.png";

const Inicio = () => {
  return (
    <>
    <div className="presentation">
      <h2>Web Developer</h2>
      <h1>Mauricio Rodríguez Ballesteros</h1>
      <p>Full stack React & Django</p>
    </div>
    <div className="botonlogo">
      <div className="w-2/3 flex sm:justify-evenly maso:justify-evenly md:justify-evenly larguito:justify-evenly lg:justify-center">
      <button className="boton"><a href="https://www.linkedin.com/in/mauricio-rodr%C3%ADguez-ballesteros-36058a343/">Linkedin -></a></button>
      <button className="boton"><a href="https://github.com/MauricioXIV?tab=overview&from=2025-02-01&to=2025-02-18">GitHub -></a></button>
      </div>
      <div className="w-2/3 flex sm:justify-center my-4">
      <button className="boton bg-[#161612] border font-semibold flex items-center"><a className="flex items-center w-full" href="../public/curriculum.pdf" download="CurriculumMauricio"><FaFilePdf className="ml-2 w-1/6"/><div className="w-5/6 larguito:mr-4 lg:mr-0 xl:mr-6">Descargar CV</div></a></button>
      </div>
      <div className="imagenes">
        <div className="aimag"><img src={ReactLogo} /></div>
        <div className="aimag"><img
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
        alt="Django Logo"
        className="w-16 invert"
      /></div>
        <div className="aimag"><img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="JavaScript Logo"
        className="w-8"
      /></div>
        <div className="aimag"><img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        alt="Python Logo"
        className="w-8"
      /></div>
        <div className="aimag"><img
        src={Html}
        alt="HTML5 Logo"
        className="w-10"
      /></div>
        <div className="aimag"><img
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
        alt="CSS3 Logo"
        className="w-8"
      /></div>
        <div className="aimag"><img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
        alt="Git Logo"
        className="w-16"
      /></div>
      </div>
    </div>
    <div className="proyectos">
      <div className="w-2/3"><h3>Proyectos</h3></div>
      <div className="w-2/3"><h1 className="text-xl font-medium mb-4">Mis proyectos</h1></div>
      <div className="w-2/3 flex rounded-lg text-center">
        <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 flex bg-gray-600 rounded-xl h-10 items-center">
          <div className="w-1/3 text-gray-400 text-sm">Todos</div>
          <div className="w-1/3 text-gray-400 text-sm">Full Stack</div>
          <div className="w-1/3 text-gray-400 text-sm">Backend</div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Inicio;