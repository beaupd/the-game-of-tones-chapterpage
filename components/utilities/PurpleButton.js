import Link from "next/link"

const PurpleButton = ({ children, className, href = "" }) => {
    return (
        <Link href={href}>
            <button className={`flex flex-row px-5 py-3 bg-purple-500 flex items-center justify-center text-white rounded-full ${className}`}>
                {children}
            </button>
        </Link>
    )
}

export default PurpleButton