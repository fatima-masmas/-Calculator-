import React from "react";
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from 'react-textfit';

const Screen = () => {
    const { calc} = useContext (CalcContext);
    return (
        <Textfit className="screen">0321432</Textfit>
    )
}

export default Screen;