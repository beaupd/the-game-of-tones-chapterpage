import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lock from "./icons/Lock";

const CircleItems = ({ center, progress, chapter, volume, variants, animate }) => {
    const itemsContainerRef = useRef();
    const [atItem, setItem] = useState(
        progress.intro == true
            ? 0
            : progress.chapter == chapter
            ? progress.subchapter
            : 10
    );
    const [lockStates, setLockStates] = useState({
        lock1: "hidden",
        lock2: "hidden",
        lock3: "hidden",
        lock4: "hidden",
        lock5: "hidden",
    });
    const [isCenter, setIsCenter] = useState(center);


    useEffect(() => {
        const items = itemsContainerRef.current.children;
        const space = 360 / items.length;
        const offset = 135;
        const spaceCenter = 130;
        const firstCenter = center ? true : false;
        let index = 0;

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            item.style.position = "absolute";
            item.classList.add(
                "bg-white",
                "rounded-full",
                "w-20",
                "h-20",
                "flex",
                "items-center",
                "justify-center"
            );
            // console.log(i, atItem);
            if (i <= atItem && i != 0) {
                // item.getElementsByTagName("span")[0].style.display = "none"
                let lock = `lock${i}`
                
                setLockStates(prevState => ({...prevState, [lock]: "show"}))
                // console.log(lock, "\n\n", lockStates)
                // console.log(item.getElementsByTagName("span"))
            }
            if (firstCenter && i == 0) {
                // item
            } else {
                item.style.transform = `rotate(${
                    space * index + offset
                }deg) translateY(${spaceCenter}px)`;
                let childs = item.children;
                for (let x = 0; x < childs.length; x++) {
                    let c = childs[x];
                    c.style.transform = `rotate(-${space * index + offset}deg)`;
                }
                index++;
            }
        }
    }, []);

    return (
        <>
            {isCenter ? (
                <motion.ul
                 variants={variants}
                 animate={animate}
                    ref={itemsContainerRef}
                    className="w-full h-full flex justify-center items-center text-xl font-bold"
                >
                    <li>
                        <Link href={`/${volume}/${chapter}/`}>Intro</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock2}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/1`}>1</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock3}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/2`}>2</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock4}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/3`}>3</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock5}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/4`}>4</Link>
                    </li>
                </motion.ul>
            ) : (
                <motion.ul
                variants={variants}
                    ref={itemsContainerRef}
                    animate={animate}
                    className="w-full h-full flex justify-center items-center text-xl font-bold"
                >
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock1}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/1`}>1</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock2}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/2`}>2</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock3}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/3`}>3</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock4}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/4`}>4</Link>
                    </li>
                    <li>
                        <span className="absolute bg-white z-50">
                            <Lock
                                control={lockStates.lock5}
                                width="30"
                                height="30"
                            />
                        </span>
                        <Link href={`/${chapter}/5`}>5</Link>
                    </li>
                </motion.ul>
            )}
        </>
    );
};

export default CircleItems;
