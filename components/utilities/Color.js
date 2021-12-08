import {useState} from "react"

const Color = ({children, color, className=""}) => {
    const [isCopied, setCopied] = useState(false)
    const onCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(color)
    }

    return (
        <div className={`relative w-full h-full items-center flex justify-center ${className}`} onClick={onCopy} onMouseLeave={()=>setCopied(false)} style={{background: `#${color}`}}>
            {children}
            <span className={`absolute w-max left-1/2 bottom-0 translate-y-full -translate-x-1/2 text-black ${isCopied ? "visible" : "hidden"} bg-white shadow px-5 py-3 rounded`}>Copied #{color}</span>
        </div>
    )
}
export default Color