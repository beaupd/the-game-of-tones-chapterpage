import Image from "next/image";
import CircleItems from "../CircleItems";
import {useState, useEffect} from "react"

const OnionMenu = ({ progress }) => {

    const [prog, setProgress] = useState(progress)

    useEffect(() =>{
        setProgress(progress)
    },[progress])

    return (
        <div className="w-96 h-96 overflow-hidden relative rounded-full flex justify-center items-center">
            <Image src="/hue_circle.png" layout="fill" objectFit="cover" />
            <div className="bg-white bg-opacity-40 w-full h-full z-20 absolute rounded-full"></div>

            <div className="bg-purple-500 bg-opacity-60 w-88 h-88 z-30 absolute rounded-full"></div>

            <div className="z-50">
                <CircleItems center={progress.chapter == 1 ? true : false} progress={prog} chapter="1" volume="1">
                </CircleItems>
            </div>
        </div>
    );
};

export default OnionMenu;
