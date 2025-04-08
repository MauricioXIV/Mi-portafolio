import React from "react";
import FullStack from "./FullStack";
import Backend from "./Backend";

const Todos = ( { gato, inicio, DolceAm, balance }) => {

    return (
        <>
                <FullStack gato={gato} inicio={inicio} />
                <Backend gato={gato} DolceAm={DolceAm} balance={balance} />
            </>
    )
}

export default Todos