import React, { useContext, useEffect, useState } from "react";
import { FaFilePdf } from 'react-icons/fa';
import ReactLogo from "../assets/react.svg";
import Html from "../images/html.png";
import gato from "../images/github.png";
import inicio from "../images/mercadu.jpg";
import DolceAm from "../images/DolceAm.jpeg";
import balance from "../images/balance.png";
import prof from "../images/mauprof.jpg";
import { LanguageContexto } from "../context/LanguageContext";
import Todos from "./Todos";
import FullStack from "./FullStack";
import Backend from "./Backend";

const Pagina = () => {

    const { idioma, setIdioma } = useContext(LanguageContexto)

    const [proyecto, setProyecto] = useState(0)

    return (
        idioma == 1 ? (
        <>
            <section id="inicio">
            <div className="presentation">
              <h2>Web Developer</h2>
              <h1>Mauricio Rodríguez Ballesteros</h1>
              <p>Full stack React & Django</p>
            </div>
            <div className="botonlogo">
              <div className="w-2/3 flex xs:justify-center sm:justify-evenly maso:justify-evenly md:justify-evenly larguito:justify-evenly lg:justify-center">
              <button className="boton p-2 h-auto"><a href="https://www.linkedin.com/in/mauricio-rodr%C3%ADguez-ballesteros-36058a343/">Linkedin<span className="whitespace-nowrap">→</span></a></button>
              <button className="boton p-2 h-auto"><a href="https://github.com/MauricioXIV?tab=overview&from=2025-02-01&to=2025-02-18">GitHub<span className="whitespace-nowrap">→</span></a></button>
              </div>
              <div className="w-full flex justify-center my-4">
              <button className="boton bg-[#161612] border font-semibold flex items-center py-1 sm:max-w-[150px] xs:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/englishcv.pdf" download="CurriculumMauricioProf"><FaFilePdf className="ml-2 w-1/6"/><div className=" w-5/6 xs:text-xs md:text-sm">Curriculum Vitae</div>
                </a>
              </button>
              <button className="boton bg-[#161612] border font-semibold flex items-center py-1 sm:max-w-[150px] xs:max-w-[140px] xs:text-xs md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/harvardcv.pdf" download="CurriculumMauricioHarvard"><FaFilePdf className="ml-2 w-1/6"/><div className="xs:mr-3 w-5/6 xs:text-xs md:text-sm">CV (estilo Harvard)</div>
                </a>
              </button>
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
              <div className="w-2/3 flex justify-center mb-4">
              <button onClick={() => setIdioma(1)} className="boton self-end p-2 mr-4">Español</button>
              <button onClick={() => setIdioma(0)} className="boton justify-self-start p-2 ml-4">English</button>
              </div>
            </div>
            </section>
            <section className="w-full flex flex-wrap justify-center items-center bg-stone-950 scroll-mt-16" id="proyectos" >
            <div className="proyectos">
              <div className="w-2/3 mt-6 text-blue-900 mb-1"><div>Proyectos</div></div>
              <div className="w-2/3"><h1 className="text-xl font-medium mb-4">Mis proyectos</h1></div>
              <div className="w-2/3 flex rounded-lg text-center">
                <div className=" xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex bg-gray-600 rounded-xl h-10 items-center mb-16">
                  <div onClick={() => setProyecto(0)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer">Todos</div>
                  <div onClick={() => setProyecto(1)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer">Full Stack</div>
                  <div onClick={() => setProyecto(2)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer">Backend</div>
                </div>
              </div>
            </div>
            </section>
            {proyecto == 0 && (
            <Todos gato={gato} inicio={inicio} DolceAm={DolceAm} balance={balance} />)}
            {proyecto == 1 && (
                <FullStack gato={gato} inicio={inicio} />)}
            {proyecto == 2 && (
                <Backend gato={gato} DolceAm={DolceAm} balance={balance} />)}
            <div className="proyectos pt-10 mb-4">
              <section className="proyectos pt-12 mb-4 scroll-mt-8" id="sobremi" >
              <div className="w-2/3 text-blue-900"><div>Sobre mí</div></div>
              <div className="w-2/3 flex flex-wrap">
                <div className="flex flex-wrap larguito:w-1/2 lg:w-1/2 lg:h-5/6">
                <h1 className="text-xl font-medium mb-4 flex mt-1 w-full">
                Mauricio Rodríguez Ballesteros</h1>
                    <p className="text-base mb-4 lg:w-full ">Estudiante de <b className="text-gray-200">Administración de Empresas</b>, actualmente curso el
                    octavo y último semestre de la carrera en la Universidad Autónoma de Occidente, ubicada en Mazatlán, Sinaloa, México.</p>
                    <p className="text-base mb-4 lg:w-full"> Desde 2024 me volví autodidacta en <b className="text-gray-200">ciencias de la computación</b>, encontrando mi pasión
                    en el desarrollo de aplicaciones en las que pueda plasmar mis conocimientos adquiridos durante mis estudios profesionales.</p>
                    <p className="text-base mb-4 lg:w-full">Dispongo de una <b className="text-gray-200">certificación en inglés</b> por parte de American English Academy, 
                    así como de una <b className="text-gray-200">certificación en Ciencias Computacionales</b> avalada por la Universidad de Harvard.
                    </p>
                    <p className="text-base mb-4 lg:w-full">Tengo 23 años y soy originario de Mazatlán. Mis principales pasatiempos son 
                    la lectura, el ejercicio y la música.
                    </p>
                </div>
                <div className="imagenmaster sm:ml-0 items-end lg:w-1/2">
                  <div className="laimagen"><img src={prof} alt="Mauricio" className="sm:w-1/2 md:w-1/2 larguito:w-2/3 lg:w-2/3 mb-4 border border-gray-600 justify-self-center rounded-lg"/></div>
                  <div className="w-full justify-evenly flex flex-wrap">
                    <p className="w-full text-center mb-2">Descargar:</p>
                    <div className="w-1/3"><a href="/ingles.pdf" download="CertificadoInglesMauricio"><button className="elboton">Certificado Inglés</button></a></div>
                    <div className="w-1/3"><a href="/CertificadoCS50x.pdf" download="CertificadoCS50xMauricio"><button className="elboton">Certificado Ciencias Comp.</button></a></div>
                  </div>
                </div>
              </div>
              </section>
              <div className="contenedor-marketmaster pt-12">
              <section className="contenedor-marketmaster scroll-mt-8" id="skills" >
            <div className="w-2/3 mb-4 mt-12"><h3 className="text-lg text-blue-900">Skills</h3></div>
              <div className="marketmaster">
                <div className="infomaster larguito:w-full lg:w-full">
                  <h1 className="text-xl mb-4">Mis skills principales</h1>
                  <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">React</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Django</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Django REST Framework</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">JavaScript</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Python</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">HTML</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">CSS</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Tailwindcss</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Git</div>
                      </div>
                      <h1 className="text-xl mb-4">Mis skills secundarias</h1>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">FastAPI</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">Flask</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">SQLite</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">MongoDB</div>
                      </div>
                      <h1 className="text-xl mb-4">Poseo conocimiento en</h1>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/3 largo:w-1/3 xl:w-1/3">C</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/3 largo:w-1/3 xl:w-1/3">Algoritmos</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/3 largo:w-1/3 xl:w-1/3">Bootstrap</div>
                      </div>
                </div>
              </div>
              </section>
            </div>
            </div>
            </>) : (
                <>
                <section id="inicio">
                <div className="presentation">
                  <h2>Web Developer</h2>
                  <h1>Mauricio Rodríguez Ballesteros</h1>
                  <p>Full stack React & Django</p>
                </div>
                <div className="botonlogo">
                  <div className="w-2/3 flex xs:justify-center sm:justify-evenly maso:justify-evenly md:justify-evenly larguito:justify-evenly lg:justify-center">
                  <button className="boton p-2 h-auto"><a href="https://www.linkedin.com/in/mauricio-rodr%C3%ADguez-ballesteros-36058a343/">Linkedin<span className="whitespace-nowrap">→</span></a></button>
                  <button className="boton p-2 h-auto"><a href="https://github.com/MauricioXIV?tab=overview&from=2025-02-01&to=2025-02-18">GitHub<span className="whitespace-nowrap">→</span></a></button>
                  </div>
                  <div className="w-full flex justify-center my-4">
              <button className="boton bg-[#161612] border font-semibold flex items-center py-1 sm:max-w-[150px] xs:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/curriculum.pdf" download="CurriculumMauricio"><FaFilePdf className="ml-2 w-1/6"/><div className="w-5/6 md:mr-4 larguito:mr-4 lg:mr-0  xs:text-xs md:text-sm">Curriculum Vitae</div>
                </a>
              </button>
              <button className="boton bg-[#161612] border font-semibold flex items-center py-1 sm:max-w-[150px] xs:max-w-[140px] xs:text-xs md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/harvardcv.pdf" download="CurriculumMauricioHarvard"><FaFilePdf className="ml-2 w-1/6"/><div className="md:mr-4 larguito:mr-4 w-5/6 xs:text-xs md:text-sm">CV (Harvard)</div>
                </a>
              </button>
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
                  <div className="w-2/3 flex justify-center mb-4">
                    <button onClick={() => setIdioma(1)} className="boton self-end p-2 mr-4">Español</button>
                    <button onClick={() => setIdioma(0)} className="boton justify-self-start p-2 ml-4">English</button>
                  </div>
                </div>
                </section>
                <section className="w-full flex flex-wrap justify-center items-center bg-stone-950 scroll-mt-16" id="proyectos" >
                <div className="proyectos">
                  <div className="w-2/3 mt-6 text-blue-900 mb-1"><div>Projects</div></div>
                  <div className="w-2/3"><h1 className="text-xl font-medium mb-4">My projects</h1></div>
                  <div className="w-2/3 flex rounded-lg text-center">
                    <div className="xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex bg-gray-600 rounded-xl h-10 items-center mb-16">
                      <div onClick={() => setProyecto(0)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer">All</div>
                      <div onClick={() => setProyecto(1)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer">Full Stack</div>
                      <div onClick={() => setProyecto(2)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer">Backend</div>
                    </div>
                  </div>
                </div>
                </section>
                {proyecto == 0 && (
                    <Todos gato={gato} inicio={inicio} DolceAm={DolceAm} balance={balance} />)}
                {proyecto == 1 && (
                    <FullStack gato={gato} inicio={inicio} />)}
                {proyecto == 2 && (
                    <Backend gato={gato} DolceAm={DolceAm} balance={balance} />)}
                <div className="proyectos pt-10 mb-4">
                  <section className="proyectos pt-12 mb-4 scroll-mt-16" id="sobremi" >
                  <div className="w-2/3 text-blue-900"><div>About me</div></div>
                  <div className="w-2/3 flex flex-wrap">
                    <div className="flex flex-wrap larguito:w-1/2 lg:w-1/2 lg:h-5/6">
                    <h1 className="text-xl font-medium mb-4 flex mt-1 w-full">
                    Mauricio Rodríguez Ballesteros</h1>
                        <p className="text-base mb-4 lg:w-full "><b className="text-gray-200">Business Administration </b>student, currently in my eighth and final semester at
                        Universidad Autónoma de Occidente, located in Mazatlán, Sinaloa, Mexico.</p>
                        <p className="text-base mb-4 lg:w-full"> Since 2024 I have become self-taught in <b className="text-gray-200">Computer Science</b>, discovering my passion for developing applications 
                        where I can apply the knowledge I have acquired during my professional studies.</p>
                        <p className="text-base mb-4 lg:w-full">I hold an <b className="text-gray-200">English certification </b> from the American English Academy, 
                        as well as a <b className="text-gray-200">Computer Science certification</b> endorsed by Harvard University.
                        </p>
                        <p className="text-base mb-4 lg:w-full">I am 23 years old and originally from Mazatlán. My main hobbies are reading, exercising, and listening music.
                        </p>
                    </div>
                    <div className="imagenmaster sm:ml-0 items-end lg:w-1/2">
                      <div className="laimagen"><img src={prof} alt="Mauricio" className="sm:w-1/2 md:w-1/2 larguito:w-2/3 lg:w-2/3 mb-4 border border-gray-600 justify-self-center rounded-lg"/></div>
                      <div className="w-full justify-evenly flex flex-wrap">
                        <p className="w-full text-center mb-2">Download:</p>
                        <div className="w-1/3"><a href="/ingles.pdf" download="CertificadoInglesMauricio"><button className="elboton">English certificate</button></a></div>
                        <div className="w-1/3"><a href="/CertificadoCS50x.pdf" download="CertificadoCS50xMauricio"><button className="elboton">CS certificate</button></a></div>
                      </div>
                    </div>
                  </div>
                  </section>
                  <div className="contenedor-marketmaster pt-12">
                  <section className="contenedor-marketmaster pt-12" id="skills" >
                <div className="w-2/3 mb-4 mt-12"><h3 className="text-lg text-blue-900 font-semibold">Skills</h3></div>
                  <div className="marketmaster">
                    <div className="infomaster larguito:w-full lg:w-full">
                      <h1 className="text-xl mb-4">My main skills</h1>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">React</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Django</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Django REST Framework</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">JavaScript</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Python</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">HTML</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">CSS</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Tailwindcss</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/4 lg:w-1/4">Git</div>
                      </div>
                      <h1 className="text-xl mb-4">My secondary skills</h1>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">FastAPI</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">Flask</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">SQLite</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">MongoDB</div>
                      </div>
                      <h1 className="text-xl mb-4">I have knowledge in</h1>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/3 largo:w-1/3 xl:w-1/3">C</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/3 largo:w-1/3 xl:w-1/3">Algorythms</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/3 md:w-1/3 larguito:w-1/3 largo:w-1/3 xl:w-1/3">Bootstrap</div>
                      </div>
                    </div>
                  </div>
                  </section>
                </div>
                </div>
                </>
            )
    )
}

export default Pagina