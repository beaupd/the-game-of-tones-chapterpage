import Main from "../components/layouts/Main"
import Image from "next/image"
import HorizontalDots from "../components/navigators/HorizontalDots"
import {useState} from "react"
import OnionMenu from "../components/navigators/OnionMenu"

const Home = () => {
    const [navData, setNavData] = useState([
        { text: "Intro", link: "/chapters/1/intro", unlocked: true, isActive: true },
        { text: "1", link: "/chapters/1", unlocked: true, isActive: false },
        { text: "2", link: "/chapters/2", unlocked: true, isActive: false },
        { text: "3", link: "/chapters/3", unlocked: true, isActive: false }
    ])

    return (
        <Main className="bg-black flex justify-center items-center flex-col">
            <div className="absolute w-full h-full left-0 top-0 z-0">
                <Image
                    src="/audio_visual_bg.jpeg"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/audio_visual_bg_low.jpeg"
                />
                <div className="absolute bg-white opacity-30 w-full h-full top-0 left-0"></div>
            </div>


            <h1 className="z-10 relative text-8xl">Home</h1>
            <OnionMenu/>
            <button onClick={()=>{navData[0].isActive = false}} className="relative z-50">Change</button>
            <HorizontalDots items={navData}/>
            <h3 className="relative text-white text-2xl mt-3">Chapters</h3>
        </Main>
    )
}

export default Home