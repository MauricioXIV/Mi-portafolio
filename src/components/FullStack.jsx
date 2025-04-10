import React, { useContext } from "react";
import { LanguageContexto } from "../context/LanguageContext";

const FullStack = ( { gato, inicio } ) => {

    const { idioma } = useContext(LanguageContexto)

    return (
        idioma == 1 ? (
        <>
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
                    <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4"><a href="https://github.com/MauricioXIV/MarketMaster" className="flex"><img src={gato} className="w-12" />MarketMaster</a></button>
                          </div>
                          <div className="contenedor-tecnologia">
                            <div className="tecnologia">React</div>
                            <div className="tecnologia">Django</div>
                            <div className="tecnologia">Python</div>
                            <div className="tecnologia sm:w-1/2 lg:w-1/3 lg:mx-2">JavaScript</div>
                            <div className="tecnologia sm:w-1/2 lg:w-1/3 lg:mx-2">PostgreSQL</div>
                          </div>
                        </div>
                        <div className="imagenmaster sm:ml-0 lg:ml-0 sm:justify-center">
                          <div className="laimagen sm:h-auto lg:h-auto"><img src={inicio} className="w-full rounded-lg"/></div>
                          <div className="text-white w-full text-center self-start"> Visita <a href="https://marketmasterplus.netlify.app/login">MarketMaster <u>aquí</u></a></div>
                        </div>
                      </div>
                    </div>
        </> ) : (<>
                            <div className="contenedor-marketmaster">
                            <div className="w-2/3 mb-4"><h3 className="text-lg text-blue-900 font-semibold">Full Stack</h3></div>
                              <div className="marketmaster">
                                <div className="infomaster">
                                  <h1 className="text-xl mb-4">MarketMaster</h1>
                                  <p className="text-base mb-4">MarketMaster is an application that simulates the interaction between a customer and an online store.</p>
                                  <p className="text-base mb-4"> Customers can add products to their cart, view the total of their purchase, and complete the payment. It features an authentication system,
                                     a personalized profile, and a virtual currency to make purchases.</p>
                                  <p className="text-base mb-4">Customers can also view their purchase history and see the products they've bought.
                                  </p>
                                  <div className="lg:w-2/3 larguito:w-full larguito:justify-self-start md:w-full sm:w-full flex">
                                  <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4"><a href="https://github.com/MauricioXIV/MarketMaster" className="flex"><img src={gato} className="w-12" />MarketMaster</a></button>
                                  </div>
                                  <div className="contenedor-tecnologia">
                                    <div className="tecnologia">React</div>
                                    <div className="tecnologia">Django</div>
                                    <div className="tecnologia">Python</div>
                                    <div className="tecnologia sm:w-1/2 lg:w-1/3 lg:mx-2">JavaScript</div>
                                    <div className="tecnologia sm:w-1/2 lg:w-1/3 lg:mx-2">PostgreSQL</div>
                                  </div>
                                </div>
                                <div className="imagenmaster sm:ml-0 lg:ml-0 sm:justify-center">
                                  <div className="laimagen sm:h-auto lg:h-auto"><img src={inicio} className="w-full rounded-lg"/></div>
                                  <div className="text-white w-full text-center self-start"> Visit <a href="https://marketmasterplus.netlify.app/login">MarketMaster <u>here</u></a></div>
                                </div>
                              </div>
                            </div>
                            </>
        )
    )
}

export default FullStack