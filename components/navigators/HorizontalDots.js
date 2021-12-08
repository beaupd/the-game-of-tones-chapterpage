import Link from "next/link"
import { useState, useEffect } from "react"



const HorizontalDots = ({ items }) => {
    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        setNavItems(items)
    }, [items])

    return (
        <nav className="z-50 relative">
            <ul className="flex flex-row justify-center relative overflow-hidden">
                <div className="absolute top-1/2 -translate-y-1/2 bg-white h-2 w-11/12 z-10 ml-5 "></div>
                {navItems.map((item, i) => {
                    return (
                        <li key={i} className="inline relative z-20 pl-4">
                            <Link href={item.link}>
                                <a className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${item.isActive ? "bg-purple-500" : "bg-gray-300"}`}>
                                    <span>{item.text}</span>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default HorizontalDots