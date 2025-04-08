import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const LanguageContexto = createContext()

const LanguageContext = ({ children }) => {

    const[idioma, setIdioma] = useState(1)

    return(
        <LanguageContexto.Provider value={{
            idioma,
            setIdioma
        }
        }>
            {children}
        </LanguageContexto.Provider>
    )
}

export default LanguageContext