import React from "react";
import { FaFilePdf } from 'react-icons/fa';


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
    </div>
    </>
  );
}
export default Inicio;