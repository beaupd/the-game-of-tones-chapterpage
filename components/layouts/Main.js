const Main = ({children, className}) => {
    return (
        <div className={`w-full h-full absolute left-0 top-0 ${className}`}>
            {children}
        </div>
    )
}

export default Main