import Image from "next/image";
import CircleItems from "../CircleItems";
import {useState, useEffect, useContext} from "react"
import ContextProvider, { GlobalContext } from "../providers/ContextProvider";

const OnionMenu = ({}) => {
    const [atChapter, setAtChapter] = useContext(GlobalContext);
    const [itemsControl, setItemsControl] = useState({
        items1: "hidden",
        items2: "hidden",
        items3: "hidden"
    })

    useEffect(()=>{
        for(let i = 1; i <= 3; i++) {
            let it = `items${i}`
            if (i < atChapter) {
                setItemsControl(prevState => ({...prevState, [it]:"hide"}))
            } else if (i==atChapter) {
                setItemsControl(prevState => ({...prevState, [it]:"show"}))
            }else{
                setItemsControl(prevState => ({...prevState, [it]:"hidden"}))
            }
        }
        // console.log(at, itemsControl)
    },[atChapter])

    const circulairMenu = {
        hidden: {
            opacity: 0,
            transform: "scale(2)",
            transition: {
                type: "spring",
                stiffness: 60
            }
        },
        show: {
            opacity: 1,
            transform: "scale(1)",
            transition: {
                type: "spring",
                stiffness: 60
            }
        },
        hide: {
            opacity: 0,
            transform: "scale(0.5)",
            transition: {
                type: "spring",
                stiffness: 60
            }
        }

    }

    return (
        <div className="w-96 h-96 overflow-hidden relative rounded-full flex justify-center items-center">
            <Image src="/hue_circle.png" layout="fill" objectFit="cover" />
            <div className="bg-white bg-opacity-40 w-full h-full z-20 absolute rounded-full"></div>

            <div className="bg-purple-500 bg-opacity-60 w-88 h-88 z-30 absolute rounded-full"></div>

            <div className="z-50">
                <CircleItems variants={circulairMenu} animate={itemsControl.items1} initial="hidden" center={true} chapter="1" volume="1"/>
                <CircleItems variants={circulairMenu} animate={itemsControl.items2} initial="hidden" center={false} chapter="2" volume="1"/>
                <CircleItems variants={circulairMenu} animate={itemsControl.items3} initial="hidden" center={false} chapter="3" volume="1"/>
            </div>
        </div>
    );
};

export default OnionMenu;
