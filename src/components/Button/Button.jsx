

const Button = ({children, onClick, className="", type='button'}) => {
  return (
    <button className={`button-style ${className}`}onClick={onClick} type={type}>
        {children}
    </button>
  )
}

export default Button
