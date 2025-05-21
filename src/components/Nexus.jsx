import React, { useContext } from "react";
import { LanguageContexto } from "../context/LanguageContext";

const Nexus = ( { gato, gears } ) => {

    const { idioma } = useContext(LanguageContexto)

    return (
        idioma == 1 ? (
        <>
            <div className="contenedor-marketmaster">
            <div className="w-2/3 mb-2"><h3 className="text-lg text-blue-900 font-semibold">Full Stack</h3></div>
                <div className="marketmaster">
                <div className="infomaster">
                    <div className="text-xl mb-4 xl:text-2xl text-gray-200 font-semibold">Nexus</div>
                    <p className="text-base mb-4 xl:text-lg">Nexus es una red social inspirada en el universo del videojuego Gears of War.</p>
                    <p className="text-base mb-4 xl:text-lg"> En ella puedes iniciar sesión mediante tu cuenta Google, relacionarte con las demás personas mediante el modelo Seguidor y Seguido, realizar publicaciones, recibir notificaciones y 
                        enviar mensajes en tiempo real, además de contar con un diseño y funciones características de Gears of war.</p>
                    <div className="lg:w-2/3 larguito:w-full larguito:justify-self-start md:w-full sm:w-full flex">
                    <button className="bg-gray-700 rounded-lg text-gray-400 text-base xl:text-lg p-2 flex mb-4"><a href="https://github.com/MauricioXIV?tab=repositories" className="flex"><img src={gato} className="w-12" />Nexus</a></button>
                          </div>
                          <div className="contenedor-tecnologia">
                            <div className="tecnologia">React</div>
                            <div className="tecnologia">Django</div>
                            <div className="tecnologia">Python</div>
                            <div className="tecnologia">JavaScript</div>
                            <div className="tecnologia">PostgreSQL</div>
                            <div className="tecnologia">Redis</div>
                          </div>
                        </div>
                        <div className="imagenmaster sm:ml-0 lg:ml-0 sm:justify-center">
                          <div className="laimagen sm:h-auto lg:h-auto"><img src={gears} className="w-full rounded-lg"/></div>
                          <div className="text-white w-full text-center self-start xl:text-lg"> Forma parte de la comunidad Nexus <a href="https://nexussn.netlify.app"><u>aquí</u></a></div>
                        </div>
                      </div>
                    </div>
        </> ) : (<>
                            <div className="contenedor-marketmaster">
                            <div className="w-2/3 mb-2"><h3 className="text-lg text-blue-900 font-semibold">Full Stack</h3></div>
                              <div className="marketmaster">
                                <div className="infomaster">
                                  <div className="text-xl mb-4 xl:text-2xl text-gray-200 font-semibold">Nexus</div>
                                  <p className="text-base mb-4 xl:text-lg">Nexus is a social network inspired by the Gears of War universe.</p>
                                  <p className="text-base mb-4 xl:text-lg"> It allows users to log in with their Google accounts, connect with others through a follower/following model, create posts, receive notifications, and send real-time messages. The platform features a design and 
                                    functionalities that reflect the distinctive aesthetic and atmosphere of Gears of War.</p>
                                  <div className="lg:w-2/3 larguito:w-full larguito:justify-self-start md:w-full sm:w-full flex">
                                  <button className="bg-gray-700 rounded-lg text-gray-400 text-base p-2 flex mb-4 xl:text-lg"><a href="https://github.com/MauricioXIV/MarketMaster" className="flex"><img src={gato} className="w-12" />Nexus</a></button>
                                  </div>
                                  <div className="contenedor-tecnologia">
                                    <div className="tecnologia">React</div>
                                    <div className="tecnologia">Django</div>
                                    <div className="tecnologia">Python</div>
                                    <div className="tecnologia">JavaScript</div>
                                    <div className="tecnologia">PostgreSQL</div>
                                    <div className="tecnologia">Redis</div>
                                  </div>
                                </div>
                                <div className="imagenmaster sm:ml-0 lg:ml-0 sm:justify-center">
                                  <div className="laimagen sm:h-auto lg:h-auto"><img src={gears} alt="Gears" className="w-full rounded-lg"/></div>
                                  <div className="text-white w-full text-center self-start xl:text-lg"> Join the Nexus community <a href="https://nexussn.netlify.app"><u>here</u></a></div>
                                </div>
                              </div>
                            </div>
                            </>
        )
    )
}

export default Nexus