import Main from "../components/layouts/Main";
import Image from "next/image";
import HorizontalDots from "../components/navigators/HorizontalDots";
import { useState } from "react";
import OnionMenu from "../components/navigators/OnionMenu";
import Link from "next/link"

const Home = ({ data }) => {
    const [navData, setNavData] = useState(data.navData);
    const [isAt, setAt] = useState(0)
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
            <OnionMenu progress={data.progress} at={isAt}/>
            <button
                onClick={() => {
                    navData[0].isActive = false;
                }}
                className="relative z-50"
            >
                Change
            </button>
            <HorizontalDots items={navData}>
                <li className="inline relative z-20 pl-4"><Link  href="/1/"><a className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${isAt == 0 ? "bg-purple-500" : "bg-gray-300"}`}>Intro</a></Link></li>
                <li className="inline relative z-20 pl-4"><button className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${isAt == 1 ? "bg-purple-500" : "bg-gray-300"}`} onClick={()=>setAt(1)}>1</button></li>
                <li className="inline relative z-20 pl-4"><button className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${isAt == 2 ? "bg-purple-500" : "bg-gray-300"}`} onClick={()=>setAt(2)}>2</button></li>
                <li className="inline relative z-20 pl-4"><button className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 ${isAt == 3 ? "bg-purple-500" : "bg-gray-300"}`} onClick={()=>setAt(3)}>3</button></li>
            </HorizontalDots>
            <h3 className="relative text-white text-2xl mt-3">Chapters</h3>
        </Main>
    );
};

export async function getServerSideProps() {
    const res = await fetch("http://localhost:1337/api/chapters?populate=*");
    const res_json = await res.json();
    const navData = [];
    const progress = { volume: 1, chapter: 1, subchapter: 3, intro: false };
    // console.log(progress)

    if (progress.intro) {
        navData.push({
            text: "Intro",
            link: "/1/1/",
            unlocked: true,
            isActive: true,
        });
    } else {
        navData.push({
            text: "Intro",
            link: "/1/1/",
            unlocked: true,
            isActive: false,
        });
    }

    res_json.data.forEach((chapter) => {
        let navItem = {};
        let attr = chapter.attributes;
        navItem.text = attr.chapter;
        if (
            attr.volume.data.attributes.volume == progress.volume &&
            attr.chapter == progress.chapter &&
            progress.intro == false
        ) {
            navItem.isActive = true;
        } else {
            navItem.isActive = false;
        }
        navItem.link = `${attr.volume.data.attributes.volume}/${attr.chapter}/`;
        if (progress.chapter >= attr.chapter) {
            navItem.unlocked = true;
        } else {
            navItem.unlocked = false;
        }
        navData.push(navItem);
        // console.log(navItem)
    });

    const data = {};
    data.navData = navData;
    data.progress = progress;
    // console.log(navData);

    return { props: { data } };
}

export default Home;
