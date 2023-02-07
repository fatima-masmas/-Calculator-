
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
    return (
        <button className={`${getStyleName(vlaue)} button`}>{vlaue}</button>
    )
}

export default Button