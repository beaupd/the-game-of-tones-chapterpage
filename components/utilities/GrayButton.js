import Link from "next/link"

const GrayButton = ({ children, className, href = "" }) => {
    return (
        <Link href={href}>
            <button className={`flex flex-row px-14 py-4 bg-gray-200 flex items-center justify-center ${className}`}>
                {children}
            </button>
        </Link>
    )
}

export default GrayButton