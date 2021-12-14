import MenuCircle from "../icons/MenuCircle"
import Link from "next/link"
import Music from "../icons/Music"
import User from "../icons/User"


const LesLayout = ({ children, type, title }) => {

    const color = {
        bgColor: {
            "blue": "bg-blue",
            "green": "bg-green",
            "yellow": "bg-yellow",
            "orange": "bg-orange"
        }[type],
        bgColorLight: {
            "blue": "bg-blue-light",
            "green": "bg-green-light",
            "yellow": "bg-yellow-light",
            "orange": "bg-orange-light"
        }[type]
    }


    return (
        <div className="grid absolute top-0 left-0 w-full h-full" style={{ gridTemplateColumns: "60px auto", gridTemplateRows: "60px auto", }}>
            <div className={`${color.bgColor} col-span-1 row-start-1 row-end-3 flex items-center justify-between flex-col`}>
                <header className="mt-3">
                    <Link href="/home">
                        <button >
                            <MenuCircle className="hover:scale-100 scale-90 transition-transform"/>
                            <span className="text-white text-sm">Menu</span>
                        </button>
                    </Link>
                </header>
                <h2 className="-rotate-90 whitespace-nowrap text-2xl text-white">{title}</h2>
                <span></span>
            </div>

            <div className={`${color.bgColorLight} col-start-2 col-end-3 row-span-1 flex flex-row justify-end items-center`}>
                <ul className="flex flex-row items-center">
                    <li className="rounded-full p-2 bg-white"><Music width="30" height="30"/></li>
                    <li className="text-3xl mx-2 h-10 bg-white block" style={{width: "2px"}}></li>
                    <li className="rounded-full p-2 bg-white"><User width="30" height="30"/></li>
                </ul>
            </div>

            <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-full h-full flex flex-col items-center mt-14">
                {children}
            </div>
        </div>
    )
}

export default LesLayout