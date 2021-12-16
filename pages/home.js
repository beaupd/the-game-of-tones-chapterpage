import Main from "../components/layouts/Main";
import Image from "next/image";
import HorizontalDots from "../components/navigators/HorizontalDots";
import { useState, useEffect, useContext } from "react";
import OnionMenu from "../components/navigators/OnionMenu";
import Link from "next/link";
import ContextProvider, {
    GlobalContext,
} from "../components/providers/ContextProvider";
import { motion } from "framer-motion";

const Home = ({ data }) => {
    const [navData, setNavData] = useState(data.navData);
    const {chapter, subChapter} = useContext(GlobalContext);
    const [atChapter, setAtChapter] = chapter;

    return (
        <Main className="bg-black flex justify-center items-center flex-col">
            <div className="absolute w-full h-full left-0 top-0 z-0">
                <Image
                    src="/audio_visual_bg.jpeg" //jpeg
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/audio_visual_bg_low.jpeg"
                    alt="visualisation of audio background"
                />
                <div className="absolute bg-white opacity-30 w-full h-full top-0 left-0"></div>
            </div>

            <h1 className="z-10 relative text-6xl text-white font-bold tracking-tighter mb-4">
                Home
            </h1>
            {atChapter == 0 ? (
                <motion.div 
                    animate={{y: [
                        "0%", 
                        "-5%",
                        "0%"
                    ]}}
                    transition={{repeat: Infinity, type: "tween", duration: 4, ease: "easeInOut"}}
                className="w-96 h-96 overflow-hidden relative rounded-full flex justify-center items-start">
                    <Image
                        src="/bluegradient_circle.png"
                        layout="fill"
                        objectFit="cover"
                        alt="gradient blue circle for volume index"
                    />
                    <h2 className="mt-20 text-2xl relative z-20 text-center text-blue">
                        <span className="uppercase">Volume 1</span> <br />
                        Making Melodies
                    </h2>
                </motion.div>
            ) : (
                <OnionMenu progress={data.progress} at={atChapter} />
            )}
            <div className="my-4"></div>
            <HorizontalDots items={navData}>
                <li className="inline relative z-20 pl-4">
                    <Link href="/1/">
                        <a
                            className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${
                                atChapter == 0 ? "bg-purple-500" : "bg-gray-300"
                            }`}
                        >
                            Intro
                        </a>
                    </Link>
                </li>
                <li className="inline relative z-20 pl-4">
                    <button
                        className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${
                            atChapter == 1 ? "bg-purple-500" : "bg-gray-300"
                        }`}
                        onClick={() => setAtChapter(1)}
                    >
                        1
                    </button>
                </li>
                <li className="inline relative z-20 pl-4">
                    <button
                        className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${
                            atChapter == 2 ? "bg-purple-500" : "bg-gray-300"
                        }`}
                        onClick={() => setAtChapter(2)}
                    >
                        2
                    </button>
                </li>
                <li className="inline relative z-20 pl-4">
                    <button
                        className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${
                            atChapter == 3 ? "bg-purple-500" : "bg-gray-300"
                        }`}
                        onClick={() => setAtChapter(3)}
                    >
                        3
                    </button>
                </li>
            </HorizontalDots>
            <h3 className="relative text-white text-2xl mt-3">Chapters</h3>
        </Main>
    );
};

export async function getServerSideProps(context) {
    // console.log(context)
    const res = await fetch("http://localhost:1337/api/chapters?populate=*");
    const res_json = await res.json();
    
    
    const data = {};

    return { props: { data } };
}

export default Home;
