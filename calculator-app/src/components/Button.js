import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const getStyleName = btn => {
  
    const className = {
        '=': 'equals',
        'X': 'opt',
        '+': 'opt',
        '-': 'opt',
        '/': 'opt',
    }
    return className[btn]
}
const Button = ({vlaue}) => {
    const { setCalc } = useContext(CalcContext)
    
    // use commaClick 
    const commaClick = () =>{

    }
    const handleBtnClick = () => {
        const result = {
            '.': commaClick()
        }
        return result[vlaue]()
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(vlaue)} button`}>{vlaue}</button>
    )
}

export default Button