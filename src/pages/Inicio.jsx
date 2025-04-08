import React from "react";
import { FaFilePdf } from 'react-icons/fa';
import ReactLogo from "../assets/react.svg";
import Html from "../images/html.png";
import gato from "../images/github.png";
import inicio from "../images/mercadu.jpg";
import DolceAm from "../images/DolceAm.jpeg";
import balance from "../images/balance.png";
import prof from "../images/mauprof.jpg";

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
      <div className="w-2/3 mt-6 text-blue-900 mb-1"><div>Proyectos</div></div>
      <div className="w-2/3"><h1 className="text-xl font-medium mb-4">Mis proyectos</h1></div>
      <div className="w-2/3 flex rounded-lg text-center">
        <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 flex bg-gray-600 rounded-xl h-10 items-center mb-16">
          <div className="w-1/3 text-gray-400 text-sm">Todos</div>
          <div className="w-1/3 text-gray-400 text-sm">Full Stack</div>
          <div className="w-1/3 text-gray-400 text-sm">Backend</div>
        </div>
      </div>
    </div>
    <div className="contenedor-marketmaster">
    <div className="w-2/3 mb-4"><h3 className="text-lg text-blue-900 font-semibold">Full Stack</h3></div>
      <div className="marketmaster">
        <div className="infomaster">
          <h1 className="text-xl mb-4">MarketMaster</h1>
          <p className="text-base mb-4">MarketMaster es una aplicación que simula la interacción
          entre un cliente y una tienda en línea.</p>
          <p className="text-base mb-4"> El cliente puede agregar productos a su carrito, ver el total de su compra y realizar el pago.
          Cuenta con sistema de autenticación, perfil personalizado y una moneda virtual para realizar compras.</p>
          <p className="text-base mb-4">El cliente puede visualizar su historial de compras y ver los productos que ha adquirido.
          </p>
          <div className="lg:w-2/3 larguito:w-full larguito:justify-self-start md:w-full sm:w-full flex">
          <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4"><a href="https://github.com/MauricioXIV/MarketMaster" className="flex"><img src={gato} className="w-12 border border-gray-600" />MarketMaster</a></button>
          </div>
          <div className="contenedor-tecnologia">
            <div className="tecnologia">React</div>
            <div className="tecnologia">Django</div>
            <div className="tecnologia">Python</div>
            <div className="tecnologia sm:w-1/2 lg:w-1/5">JavaScript</div>
            <div className="tecnologia sm:w-1/2 lg:w-1/5 lg:break-words">PostgreSQL</div>
          </div>
        </div>
        <div className="imagenmaster sm:ml-0 lg:ml-0 sm:justify-center">
          <div className="laimagen sm:h-auto lg:h-auto"><img src={inicio} className="w-full"/></div>
          <div className="text-white w-full text-center self-start"> Visita <a href="https://marketmasterplus.netlify.app/login">MarketMaster <u>aquí</u></a></div>
        </div>
      </div>
    </div>
    <div className="contenedor-marketmaster">
    <div className="w-2/3 mb-4 mt-12"><h3 className="text-lg text-blue-900 font-semibold">Backend</h3></div>
      <div className="marketmaster">
        <div className="infomaster">
          <h1 className="text-xl mb-4">Dolce Amore</h1>
          <p className="text-base mb-4">Dolce Amore es una repostería local para la cual elaboré un ERP utilizando tecnologías como FastAPI,
            MongoDB y Python principalmente .</p>
          <p className="text-base mb-4"> El software cuenta con sistema de autenticación, en él se pueden registrar pedidos e inventarios, cuenta con sistema de cobro y
            almacena todos los movimientos realizados.</p>
          <p className="text-base mb-4">Este ERP también tiene su propio sistema contable, capaz de generar automáticamente estados financieros como
            flujo de efectivo, estado de resultados y balance general.
          </p>
          <div className="lg:w-2/3 larguito:w-2/3 md:w-full sm:w-full  flex">
          <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4"><a href="https://github.com/MauricioXIV/MarketMaster" className="flex"><img src={gato} className="w-12" />Dolce Amore</a></button>
          </div>
          <div className="contenedor-tecnologia">
            <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">HTML Y CSS</div>
            <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">FastAPI</div>
            <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">Python</div>
            <div className="tecnologia sm:w-1/2 md:w-full lg:w-1/4">MongoDB</div>
          </div>
        </div>
        <div className="imagenmaster sm:ml-0 ml-10">
          <div className="laimagen"><img src={DolceAm} className="sm:w-full lg:w-5/6 mb-4 border border-gray-600"/></div>
          <div className="laimagen sm:h-auto md:h-auto lg:h-auto"><img src={balance} className="sm:w-full lg:w-2/3 justify-self-end border border-gray-600"/></div>
          <div className="text-sm text-gray-700 text-right w-full self-start">**Los datos mostrados forman parte de una prueba ficticia</div>
        </div>
      </div>
    </div>
    <div className="proyectos pt-10 mb-4">
      <div className="w-2/3 text-blue-900"><div>Sobre mí</div></div>
      <div className="w-2/3 flex flex-wrap"><h1 className="text-xl font-medium mb-4 flex mt-1 w-full">
        Mauricio Rodríguez Ballesteros</h1>
        <div className="flex flex-wrap larguito:w-1/2 lg:w-1/2 lg:h-5/6">
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
          <div className="laimagen"><img src={prof} alt="Mauricio" className="sm:w-1/2 md:w-1/2 larguito:w-2/3 lg:w-2/3 mb-4 border border-gray-600 justify-self-center"/></div>
          <div className="w-full justify-evenly flex flex-wrap">
            <p className="w-full text-center mb-2">Descargar:</p>
            <div className="w-1/3"><a href="../public/ingles.pdf" download="CertificadoInglesMauricio"><button className="elboton">Certificado Inglés</button></a></div>
            <div className="w-1/3"><a href="/CertificadoCS50x.pdf" download="CertificadoCS50xMauricio"><button className="elboton">Certificado Ciencias Comp.</button></a></div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}
export default Inicio;