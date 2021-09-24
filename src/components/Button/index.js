const sytleButton = {
    fontSize: '1em',
    borderRadius: '100%',
    margin: '2%',
    width: '150px',
    height: '150px',
    backgroundColor: 'gray'
}

const Button = ({ name, ...rest }) => {
    return(
        <button { ...rest } style={ sytleButton }>{ name }</button>
    )
}

export default Button