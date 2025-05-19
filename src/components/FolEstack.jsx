import React from "react";
import FullStack from "./FullStack";
import Nexus from "./Nexus";

const FolEstack = ( { gato, inicio, gears }) => {

    return (
            <>
                <Nexus gato={gato} gears={gears} />
                <FullStack gato={gato} inicio={inicio} />
            </>
    )
}

export default FolEstack