import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import Link from "next/link"
import Main from "../components/layouts/Main"
import GrayButton from "../components/utilities/GrayButton"



const Index = () => {
    const [isLoading, setLoading] = useState(false)

    const Loader = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000))
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        Loader()
    }, [])



    return (
        <Main className="flex items-center justify-center">
                <GrayButton href="/onboarding" className={`${isLoading ? "opacity-70 pointer-events-none" : "opacity-100"}`}>
                    {isLoading && (<Spinner className="" />)}
                    <span className={`${isLoading ? "opacity-70" : "opacity-100"} text-lg`}>Start</span>
                </GrayButton>
        </Main>
    )
}
export default Index