

const Button = ({children, onClick}) => {
  return (
    <button className="button-style" onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
