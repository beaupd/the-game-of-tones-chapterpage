import MenuCircle from "../icons/MenuCircle";
import Link from "next/link"
import Music from "../icons/Music";
import User from "../icons/User";
import { useRouter } from "next/router";
import VerticalDots from "../navigators/VerticalDots";
import ContextProvider, { GlobalContext } from "../providers/ContextProvider";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import SubChapterSubMenu from "../navigators/SubchapterSubMenu";

const LesLayout = ({ children, type, title, subchapters }) => {
    const router = useRouter();
    const query = router.query;
    // console.log(query);
    // console.log(subchapters);
    const {chapter, subChapter} = useContext(GlobalContext);
    const [atChapter, setAtChapter] = chapter;
    const [atSubchapter, setAtSubchapter] = subChapter;
    const [isLocked, setLocked] = useState({})
    const initLockedStates = {}
    
    useEffect(()=> {
        if (query.chapter == atChapter) {
            [...Array(subchapters)].forEach((c,i)=> {
                let sub = `subchapter${i}`
                if (i <= atSubchapter) {
                    initLockedStates[sub] = true
                } else {
                    initLockedStates[sub] = false
                }
            } )
        } else if (query.chapter > atChapter){
            [...Array(subchapters)].forEach((c,i)=> {
                let sub = `subchapter${i}`
                initLockedStates[sub] = false
            } )
        } else {
            [...Array(subchapters)].forEach((c,i)=> {
                let sub = `subchapter${i}`
                initLockedStates[sub] = true
            } )
        }
    
        setLocked(initLockedStates)
    },[])
    


    const color = {
        bgColor: {
            blue: "bg-blue",
            green: "bg-green",
            yellow: "bg-yellow",
            orange: "bg-orange",
        }[type],
        bgColorLight: {
            blue: "bg-blue-light",
            green: "bg-green-light",
            yellow: "bg-yellow-light",
            orange: "bg-orange-light",
        }[type],
    };

    return (
        <div
            className="grid absolute top-0 left-0 w-full h-full"
            style={{
                gridTemplateColumns: "60px auto",
                gridTemplateRows: "60px auto",
            }}
        >
            <div
                className={`${color.bgColor} col-span-1 row-start-1 row-end-3 flex items-center justify-between flex-col`}
            >
                <header className="mt-3">
                    <Link href="/home">
                        <button>
                            <MenuCircle className="hover:scale-100 scale-90 transition-transform" />
                            <span className="text-white text-sm">Menu</span>
                        </button>
                    </Link>
                </header>
                <h2 className="-rotate-90 whitespace-nowrap text-2xl text-white">
                    {title}
                </h2>
                <span></span>
            </div>

            <div
                className={`${color.bgColorLight} col-start-2 col-end-3 row-span-1 flex flex-row justify-end items-center`}
            >
                <ul className="flex flex-row items-center mx-2">
                    <li className="rounded-full p-2 bg-white">
                        <Music width="30" height="30" />
                    </li>
                    <li
                        className="text-3xl mx-2 h-10 bg-white block"
                        style={{ width: "2px" }}
                    ></li>
                    <li className="rounded-full p-2 bg-white">
                        <User width="30" height="30" />
                    </li>
                </ul>
            </div>

            <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-full h-full flex flex-col items-center pt-14 bg-white bg-opacity-75">
                <div className="z-[-1]">
                    <Image
                        src="/audio_visual_bg.png" //jpeg
                        layout="fill"
                        objectFit="cover"
                        // placeholder="blur"
                        // blurDataURL="/audio_visual_bg_low.jpeg"
                        className="z-[-1]"
                    />
                </div>
                {children}
            </div>

            <VerticalDots className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <ul className="p-8 relative flex justify-center flex-col">
                    <li className="my-8 scale-75 origin-right transition-transform">
                        <Link href={`/${query.volume}/${query.chapter}/`}>
                            <a className="rounded-full w-20 h-20 bg-white flex items-center justify-center">
                                Intro
                            </a>
                        </Link>
                        <ul></ul>
                    </li>
                    {[...Array(subchapters)].map((_, idx) => {
                        let i = idx + 1;
                        // console.log(i);
                        if (i == query.subchapter) {
                            return (
                                <li
                                    key={i}
                                    className={`my-8 scale-75 origin-right transition-transform activeItem ${isLocked[`subchapter${i}`] == true ? "unlocked" : ""}`}
                                >
                                    <Link
                                        href={`/${query.volume}/${query.chapter}/${i}`}
                                    >
                                        <a className="rounded-full w-20 h-20 bg-white flex items-center justify-center">
                                            {i}
                                        </a>
                                    </Link>
                                    <SubChapterSubMenu
                                        subChapter={i}
                                        chapter={query.chapter}
                                        volume={query.volume}
                                    />
                                </li>
                            );
                        } else {
                            return (
                                <li
                                    key={i}
                                    className={`transition-all my-8 scale-75 origin-right inactiveItem transition-transform hover:activeItem ${isLocked[`subchapter${i}`] == true ? "unlocked" : ""}`}
                                >
                                    <Link
                                        href={`/${query.volume}/${query.chapter}/${i}`}
                                    >
                                        <a className="rounded-full w-20 h-20 bg-white flex items-center justify-center">
                                            {i}
                                        </a>
                                    </Link>
                                    <SubChapterSubMenu
                                        subChapter={i}
                                        chapter={query.chapter}
                                        volume={query.volume}
                                    />
                                </li>
                            );
                        }
                    })}
                    <li className="block absolute h-[70%] left-1/2 translate-x-1/2 top-28 w-0 border-dashed border-l-8 border-blue-light z-[-1]"></li>
                </ul>
            </VerticalDots>
        </div>
    );
};

export default LesLayout;
