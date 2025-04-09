import React, { useContext } from "react";
import { LanguageContexto } from "../context/LanguageContext";

const Backend = ( { gato, DolceAm, balance } ) => {

    const { idioma } = useContext(LanguageContexto)

    return (
        idioma == 1 ? (
        <>
            <div className="contenedor-marketmaster">
                    <div className="w-2/3 mb-4"><h3 className="text-lg text-blue-900 font-semibold">Backend</h3></div>
                  <div className="marketmaster">
                <div className="infomaster">
                  <h1 className="text-xl mb-4">Dolce Amore</h1>
                    <p className="text-base mb-4">Dolce Amore es una repostería local para la cual elaboré un ERP utilizando tecnologías como FastAPI,                        MongoDB y Python principalmente .</p>
                  <p className="text-base mb-4"> El software cuenta con sistema de autenticación, en él se pueden registrar pedidos e inventarios, cuenta con sistema de cobro y
                    almacena todos los movimientos realizados.</p>
                    <p className="text-base mb-4">Este ERP también tiene su propio sistema contable, capaz de generar automáticamente estados financieros como
                    flujo de efectivo, estado de resultados y balance general.
                    </p>
                    <div className="lg:w-2/3 larguito:w-2/3 md:w-full sm:w-full  flex">
                    <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4"><a href="https://github.com/MauricioXIV/DolceAmoreSecure" className="flex"><img src={gato} className="w-12" />Dolce Amore</a></button>
                    </div>
                    <div className="contenedor-tecnologia">
                    <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">HTML Y CSS</div>
                    <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">FastAPI</div>
                    <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">Python</div>
                    <div className="tecnologia sm:w-1/2 md:w-full lg:w-1/4">MongoDB</div>
                    </div>
                </div>
                <div className="imagenmaster sm:ml-0 ml-10">
                    <div className="laimagen"><img src={DolceAm} className="sm:w-full lg:w-5/6 mb-4 border border-gray-600 rounded-lg"/></div>
                    <div className="laimagen sm:h-auto md:h-auto lg:h-auto"><img src={balance} className="sm:w-full lg:w-2/3 justify-self-end border border-gray-600 rounded-lg"/></div>
                    <div className="text-sm text-gray-700 text-right w-full self-start">**Los datos mostrados forman parte de una prueba ficticia</div>
                </div>
                </div>
            </div>
        </> ) : (
            <div className="contenedor-marketmaster">
            <div className="w-2/3 mb-4"><h3 className="text-lg text-blue-900 font-semibold">Backend</h3></div>
              <div className="marketmaster">
                <div className="infomaster">
                  <h1 className="text-xl mb-4">Dolce Amore</h1>
                  <p className="text-base mb-4">Dolce Amore is a local bakery for which I developed an ERP using technologies such as FastAPI, MongoDB, and primarily Python.</p>
                  <p className="text-base mb-4">The software includes an authentication system, allowing the registration of orders and inventories, 
                    a billing system, and it stores all transaction records.</p>
                  <p className="text-base mb-4">This ERP also has its own accounting system, capable of automatically generating financial 
                    statements such as cash flow, income statement, and balance sheet.
                  </p>
                  <div className="lg:w-2/3 larguito:w-2/3 md:w-full sm:w-full  flex">
                  <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4"><a href="https://github.com/MauricioXIV/DolceAmoreSecure" className="flex"><img src={gato} className="w-12" />Dolce Amore</a></button>
                  </div>
                  <div className="contenedor-tecnologia">
                    <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">HTML Y CSS</div>
                    <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">FastAPI</div>
                    <div className="tecnologia sm:w-1/2 md:w-1/3 lg:w-1/4">Python</div>
                    <div className="tecnologia sm:w-1/2 md:w-full lg:w-1/4">MongoDB</div>
                  </div>
                </div>
                <div className="imagenmaster sm:ml-0 ml-10">
                  <div className="laimagen"><img src={DolceAm} className="sm:w-full lg:w-5/6 mb-4 border border-gray-600 rounded-lg"/></div>
                  <div className="laimagen sm:h-auto md:h-auto lg:h-auto"><img src={balance} className="sm:w-full lg:w-2/3 justify-self-end border border-gray-600 rounded-lg"/></div>
                  <div className="text-sm text-gray-700 text-right w-full self-start">**The displayed data is part of a fictional test.</div>
                </div>
              </div>
            </div>
        )
    )
}

export default Backend