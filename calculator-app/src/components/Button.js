
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
    const handleBtnClick = () =>{
        console.log(vlaue);
    }
    return (
        <button onClick={handleBtnClick} className={`${getStyleName(vlaue)} button`}>{vlaue}</button>
    )
}

export default Button