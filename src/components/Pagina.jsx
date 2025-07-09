import React, { useContext, useEffect, useState } from "react";
import { FaFilePdf } from 'react-icons/fa';
import ReactLogo from "../assets/react.svg";
import Html from "../images/html.png";
import gato from "../images/github.png";
import inicio from "../images/mercadu.png";
import gears from "../images/gears.png"
import DolceAm from "../images/DolceAm.png";
import balance from "../images/balance.png";
import prof from "../images/mauprof.jpg";
import { LanguageContexto } from "../context/LanguageContext";
import Todos from "./Todos";
import Backend from "./Backend";
import FolEstack from "./FolEstack";
import Zoom from "../components/Zoom";
import Fade from "../components/Fade"
import { useInView } from 'react-intersection-observer';

const Pagina = () => {

    const { idioma, setIdioma } = useContext(LanguageContexto)

    const [proyecto, setProyecto] = useState(0)

    const { ref: refInicio, inView: inViewInicio } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

    return (
        idioma == 1 ? (
        <>
            <section id="inicio" className="h-full overflow-x-hidden mb-32">
            <Zoom key={idioma}>
            <div className="presentation">
              <h2>Web Developer</h2>
              <h1>Mauricio Rodríguez Ballesteros</h1>
              <p className="xl:text-2xl">Full stack React & Django</p>
            </div>
            <div className="botonlogo">
              <div className="w-2/3 flex xs:justify-center sm:justify-evenly maso:justify-evenly md:justify-evenly larguito:justify-evenly lg:justify-center">
              <button className="boton p-2 h-auto"><a href="https://www.linkedin.com/in/mauricio-rodr%C3%ADguez-ballesteros-36058a343/">Linkedin<span className="whitespace-nowrap">→</span></a></button>
              <button className="boton p-2 h-auto"><a href="https://github.com/MauricioXIV?tab=overview&from=2025-02-01&to=2025-02-18">GitHub<span className="whitespace-nowrap">→</span></a></button>
              </div>
              <div className="w-full flex justify-center my-4">
              <button className="boton bg-[#161612] border font-semibold flex items-center sm:max-w-[150px] xs:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/MauricioCVEspañol.pdf" download="CurriculumMauricioProf"><div className="xs:w-1/6 flex justify-end"><FaFilePdf className="xs:w-3 xs:h-3 md:w-4 md:h-4"/></div><div className="w-5/6 xs:text-xs sm:text-sm lg:text-base flex justify-center items-center pb-0.5">Curriculum Vitae</div>
                </a>
              </button>
              <button className="boton bg-[#161612] border font-semibold flex items-center sm:max-w-[150px] xs:max-w-[140px] xs:text-xs md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/MauricioHarvardCVEspañol.pdf" download="CurriculumMauricioHarvard"><div className="xs:w-1/6 flex justify-end"><FaFilePdf className="xs:w-3 xs:h-3 md:w-4 md:h-4"/></div><div className="w-5/6 xs:text-xs sm:text-sm lg:text-base flex justify-center items-center pb-0.5">CV (estilo Harvard)</div>
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
            </Zoom>
            </section>
            <section className="w-full flex flex-wrap justify-center items-center bg-stone-950 scroll-mt-14" id="proyectos" >
            <div className="proyectos">
              <div className="w-2/3 mt-6 text-blue-900 mb-1"><div className="xl:text-lg">Proyectos</div></div>
              <div className="w-2/3"><div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">Mis proyectos</div></div>
              <div className="w-2/3 flex rounded-lg text-center">
                <div className=" xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex bg-gray-600 rounded-xl h-10 items-center mb-14">
                  <div onClick={() => setProyecto(0)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer xl:text-base">Todos</div>
                  <div onClick={() => setProyecto(1)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer xl:text-base">Full Stack</div>
                  <div onClick={() => setProyecto(2)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer xl:text-base">Backend</div>
                </div>
              </div>
            </div>
            </section>
            <div className="bg-stone-950">
            {proyecto == 0 && (<Fade key={proyecto}>
              <Todos gato={gato} inicio={inicio} DolceAm={DolceAm} balance={balance} gears={gears}/>
              </Fade>)}
            {proyecto == 1 && (<Fade key={proyecto}>
              <FolEstack gato={gato} inicio={inicio} gears={gears} />
              </Fade>)}
            {proyecto == 2 && (<Fade key={proyecto}>
              <Backend gato={gato} DolceAm={DolceAm} balance={balance} />
              </Fade>)}
            </div>
            <div className="proyectos pt-10 mb-4">
              <section className="proyectos pt-12 mb-4 scroll-mt-8" id="sobremi" >
              <div className="w-2/3 text-blue-900 mb-5"><div className="xl:text-lg">Sobre mí</div></div>
              <div className="w-2/3 flex flex-wrap">
                <div className="flex flex-wrap larguito:w-1/2 lg:w-1/2 lg:h-5/6">
                <div className="text-xl mb-4 flex w-full xl:text-2xl font-semibold text-gray-200">
                Mauricio Rodríguez Ballesteros</div>
                    <p className="text-base mb-4 lg:w-full xl:text-lg">Estudiante de <b className="text-gray-200">Administración de Empresas</b>, actualmente curso el
                    octavo y último semestre de la carrera en la Universidad Autónoma de Occidente, ubicada en Mazatlán, Sinaloa, México.</p>
                    <p className="text-base mb-4 lg:w-full xl:text-lg"> A lo largo de mi formación universitaria, descubrí una fuerte afinidad por el análisis, la resolución de problemas y la innovación, 
                      lo que me llevó a explorar el mundo de la tecnología. En 2024, comencé a formarme de manera autodidacta en <b className="text-gray-200">ciencias de la computación</b>, encontrando en el desarrollo web una vía ideal para combinar mis habilidades 
                      administrativas con soluciones tecnológicas que generen impacto real.</p>
                    <p className="text-base mb-4 lg:w-full xl:text-lg">Cuento con una <b className="text-gray-200">certificación en inglés</b> otorgada por American English Academy, 
                    y una <b className="text-gray-200">certificación en Ciencias Computacionales</b> avalada por la Universidad de Harvard, lo cual respalda mi compromiso con el aprendizaje continuo y la excelencia académica.
                    </p>
                    <p className="text-base mb-4 lg:w-full xl:text-lg">Tengo 23 años y soy originario de Mazatlán. En mi tiempo libre disfruto de la lectura, 
                      el ejercicio y la música, actividades que complementan mi desarrollo personal y profesional.
                    </p>
                </div>
                <div className="imagenmaster sm:ml-0 items-end lg:w-1/2">
                  <div className="laimagen"><img src={prof} alt="Mauricio" className="sm:w-1/2 md:w-1/2 larguito:w-2/3 lg:w-2/3 mb-4 border border-gray-600 justify-self-center rounded-lg"/></div>
                  <div className="w-full justify-evenly flex flex-wrap">
                    <p className="w-full text-center mb-2">Descargar:</p>
                    <div className="w-2/5"><a href="/ingles.pdf" download="CertificadoInglesMauricio"><button className="elboton">Certificado Inglés</button></a></div>
                    <div className="w-2/5"><a href="/CertificadoCS50x.pdf" download="CertificadoCS50xMauricio"><button className="elboton">Certificado Ciencias Comp.</button></a></div>
                  </div>
                </div>
              </div>
              </section>
              <div className="contenedor-marketmaster pt-12">
              <section className="contenedor-marketmaster scroll-mt-8" id="skills" >
            <div className="w-2/3 mb-4 mt-12"><div className="text-blue-900 xl:text-lg">Skills</div></div>
              <div className="marketmaster">
                <div className="infomaster larguito:w-full lg:w-full">
                  <div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">Mis skills principales</div>
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
                      <div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">Mis skills secundarias</div>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">FastAPI</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">Flask</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">SQLite</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">MongoDB</div>
                      </div>
                      <div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">Poseo conocimiento en</div>
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
                <section id="inicio" className="h-full overflow-x-hidden mb-32">
                <Zoom key={idioma}>
                <div className="presentation">
                  <h2>Web Developer</h2>
                  <h1>Mauricio Rodríguez Ballesteros</h1>
                  <p className="xl:text-2xl">Full stack React & Django</p>
                </div>
                <div className="botonlogo">
                  <div className="w-2/3 flex xs:justify-center sm:justify-evenly maso:justify-evenly md:justify-evenly larguito:justify-evenly lg:justify-center">
                  <button className="boton p-2 h-auto"><a href="https://www.linkedin.com/in/mauricio-rodr%C3%ADguez-ballesteros-36058a343/">Linkedin<span className="whitespace-nowrap">→</span></a></button>
                  <button className="boton p-2 h-auto"><a href="https://github.com/MauricioXIV?tab=overview&from=2025-02-01&to=2025-02-18">GitHub<span className="whitespace-nowrap">→</span></a></button>
                  </div>
            <div className="w-full flex justify-center my-4">
              <button className="boton bg-[#161612] border font-semibold flex items-center sm:max-w-[150px] xs:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/MauricioCV.pdf" download="CurriculumMauricioProf"><div className="xs:w-1/6 flex justify-end"><FaFilePdf className="xs:w-3 xs:h-3 md:w-4 md:h-4"/></div><div className="w-5/6 xs:text-xs sm:text-sm lg:text-base flex justify-center items-center pb-0.5">Curriculum Vitae</div>
                </a>
              </button>
              <button className="boton bg-[#161612] border font-semibold flex items-center sm:max-w-[150px] xs:max-w-[140px] xs:text-xs md:max-w-[160px] lg:max-w-[180px]">
                <a className="flex items-center w-full" href="/MauricioHarvardCV.pdf" download="CurriculumMauricioHarvard"><div className="xs:w-1/6 flex justify-end"><FaFilePdf className="xs:w-3 xs:h-3 md:w-4 md:h-4"/></div><div className="w-5/6 xs:text-xs sm:text-sm lg:text-base flex justify-center items-center pb-0.5">CV (Harvard style)</div>
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
                </Zoom>
                </section>
                <section className="w-full flex flex-wrap justify-center items-center bg-stone-950 scroll-mt-14" id="proyectos" >
                <div className="proyectos">
                  <div className="w-2/3 mt-6 text-blue-900 mb-1"><div className="xl:text-lg">Projects</div></div>
                  <div className="w-2/3"><div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200 ">My projects</div></div>
                  <div className="w-2/3 flex rounded-lg text-center">
                    <div className="xs:w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex bg-gray-600 rounded-xl h-10 items-center mb-14">
                      <div onClick={() => setProyecto(0)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer xl:text-base">All</div>
                      <div onClick={() => setProyecto(1)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer xl:text-base">Full Stack</div>
                      <div onClick={() => setProyecto(2)} className="w-1/3 text-gray-400 text-sm hover:text-gray-200 hover:cursor-pointer xl:text-base">Backend</div>
                    </div>
                  </div>
                </div>
                </section>
            <div className="bg-stone-950">
            {proyecto == 0 && (<Fade key={proyecto}>
              <Todos gato={gato} inicio={inicio} DolceAm={DolceAm} balance={balance} gears={gears}/>
              </Fade>)}
            {proyecto == 1 && (<Fade key={proyecto}>
              <FolEstack gato={gato} inicio={inicio} gears={gears} />
              </Fade>)}
            {proyecto == 2 && (<Fade key={proyecto}>
              <Backend gato={gato} DolceAm={DolceAm} balance={balance} />
              </Fade>)}
            </div>
                <div className="proyectos pt-10 mb-4">
                  <section className="proyectos pt-12 mb-4 scroll-mt-8" id="sobremi" >
                  <div className="w-2/3 text-blue-900 mb-5"><div className="xl:text-lg">About me</div></div>
                  <div className="w-2/3 flex flex-wrap">
                    <div className="flex flex-wrap larguito:w-1/2 lg:w-1/2 lg:h-5/6">
                    <div className="text-xl mb-4 flex mt-1 w-full xl:text-2xl font-semibold text-gray-200">
                    Mauricio Rodríguez Ballesteros</div>
                        <p className="text-base mb-4 lg:w-full xl:text-lg">I am a <b className="text-gray-200">Business Administration </b>student, currently in the eighth and final semester of my degree at the 
                        Universidad Autonoma de Occidente, located in Mazatlan, Sinaloa, Mexico.</p>
                        <p className="text-base mb-4 lg:w-full xl:text-lg"> Throughout my academic journey, I discovered a strong affinity for analysis, problem-solving, and innovation, 
                          which led me to explore the world of technology. In 2024, I began self-studying <b className="text-gray-200">Computer Science</b>,  finding in web development the ideal way to merge 
                          my administrative skills with technological solutions that create real impact.</p>
                        <p className="text-base mb-4 lg:w-full xl:text-lg">I hold an <b className="text-gray-200">English certification </b> from the American English Academy 
                        and a <b className="text-gray-200">Computer Science certification</b> endorsed by Harvard University, which reflect my commitment to continuous learning and academic excellence.
                        </p>
                        <p className="text-base mb-4 lg:w-full xl:text-lg">I am 23 years old and originally from Mazatlán. In my free time, I enjoy reading, working out, 
                          and listening to music, activities that complement my personal and professional growth.
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
                <div className="w-2/3 mb-4 mt-8"><div className="text-blue-900 xl:text-lg">Skills</div></div>
                  <div className="marketmaster">
                    <div className="infomaster larguito:w-full lg:w-full">
                      <div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">My main skills</div>
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
                      <div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">My secondary skills</div>
                      <div className="contenedor-tecnologiadebajo">
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">FastAPI</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">Flask</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">SQLite</div>
                        <div className="tecnologiadebajo xs:w-1/2 sm:w-1/2 md:w-1/3 larguito:w-1/4 lg:w-1/4">MongoDB</div>
                      </div>
                      <div className="text-xl mb-4 xl:text-2xl font-semibold text-gray-200">I have knowledge in</div>
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