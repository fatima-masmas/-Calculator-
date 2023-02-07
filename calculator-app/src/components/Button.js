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
const Button = ({value}) => {
    const { calc, setCalc } = useContext(CalcContext);
    console.log(setCalc);
    
    // use commaClick 
    const commaClick = () =>{
        setCalc({
            ...calc,
            
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })

    }

    // use click C

    const restClick = () => {
        setCalc({ sing: '', num: 0, res: 0})
    }

    // use click nummer 
    const handleClickButton = () => {
        const numberString = value.toString()
        let numberValue;
        if(numberString === '0' && calc.num === 0){
            numberValue ="0"
        } else {
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }
    // use click operationen 
    const signClick = () => {
        setCalc({
            sing: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
        
    // use click equal
    const equalClick = () => {
        if(calc.res && calc.num){
            const math = (a, b, sign) => {
                const result = {
                    '+':  (a, b) => a + b,
                    '-':  (a, b) => a - b,
                    'X':  (a, b) => a * b,
                    '/':  (a, b) => a / b
                }
                return result[sign](a, b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sing),
                sing: '',
                num: 0  
            })
        }
     
    }

    // use persenClick

    const persenClick = ()=> {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }
    const handleBtnClick = () => {
        const results = {
            '.': commaClick,
            'C': restClick, 
            '/': signClick,
            'X': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalClick,
            '%': persenClick
        }
        if(results[value]){
            return results[value]()    
        } else {
            return handleClickButton()
        }
        
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button