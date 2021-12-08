import {useEffect, useState} from "react"
import Spinner from "../components/Spinner"
import Link from "next/link"

const Index = () => {
    const [isLoading, setLoading] = useState(false)

    const Loader = async() => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        setLoading(false)
    }

    useEffect(()=>{
        setLoading(true)
        Loader()
    },[])

    

    return (
        <div className="w-full h-full flex items-center justify-center absolute left-0 top-0">
            <Link href="/onboarding">
            <button className="flex flex-row w-40 h-16 bg-gray-200 flex items-center justify-center">
                {isLoading && (<Spinner  className=""/>)}
                <span className={`${isLoading ? "opacity-70 pointer-events-none" : "opacity-100"} text-lg`}>Start</span>
            </button>
            </Link>
        </div>
    )
}
export default Index