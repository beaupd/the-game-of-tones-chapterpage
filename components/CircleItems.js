import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lock from "./icons/Lock";
import ContextProvider, { GlobalContext } from "./providers/ContextProvider";

const CircleItems = ({ center, volume, variants, animate, circleChapter }) => {
    const itemsContainerRef = useRef();
    const { chapter, subChapter } = useContext(GlobalContext);
    const [atChapter, setAtChapter] = chapter;
    const [atSubchapter, setAtSubchapter] = subChapter;
    const [atItem, setItem] = useState(atSubchapter);

    const [lockStates, setLockStates] = useState({
        lock1: "hidden",
        lock2: "hidden",
        lock3: "hidden",
        lock4: "hidden",
        lock5: "hidden",
    });
    const lockContainer = {
        hidden: {
            opacity: 1,
            transition: {
                when: "afterChildren",
                delay: 1,
            },
        },
        show: {
            opacity: 0,
            pointerEvents: "none",
            transition: {
                when: "afterChildren",
                delay: 1,
            },
        },
    };

    useEffect(() => {
        const items = itemsContainerRef.current.children;
        const space = 360 / items.length;
        const offset = 135;
        const spaceCenter = 120;
        const firstCenter = center ? true : false;
        let index = 0;
        let newLockStates = {};

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
            let lock = `lock${i}`;
            if (circleChapter == atChapter) {
                if (i <= atItem) {
                    newLockStates[lock] = "show";
                } else {
                    newLockStates[lock] = "hidden";
                }
            } else if (circleChapter > atChapter) {
                newLockStates[lock] = "hidden";
                // console.
            } else {
                newLockStates[lock] = "show";
            }
            if (firstCenter && i == 0) {
                // console.log(items)
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
        // console.log(circleChapter,newLockStates)
        setLockStates(newLockStates);
    }, [atItem]);

    return (
        <>
            {center ? (
                <motion.ul
                    variants={variants}
                    animate={animate}
                    ref={itemsContainerRef}
                    className="w-full h-full flex justify-center items-center text-xl font-bold"
                >
                    <li>
                        <Link href={`/${volume}/${circleChapter}/`}>Intro</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock1}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock1}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/1`}>1</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock2}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock2}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/2`}>2</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock3}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock3}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/3`}>3</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock4}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock4}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/4`}>4</Link>
                    </li>
                    {/* <button
                        onClick={() => {
                            setItem((atItem) => atItem + 1);
                        }}
                    >
                        next
                    </button> */}
                </motion.ul>
            ) : (
                <motion.ul
                    variants={variants}
                    ref={itemsContainerRef}
                    animate={animate}
                    className="w-full h-full flex justify-center items-center text-xl font-bold"
                >
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock0}
                            className="absolute bg-white z-50 p-5 rounded-full"
                        >
                            <Lock
                                control={lockStates.lock0}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/`}>intro</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock1}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock1}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/2`}>2</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock2}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock2}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/3`}>3</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock3}
                            className="absolute bg-white z-50"
                        >
                            <Lock
                                control={lockStates.lock3}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/4`}>4</Link>
                    </li>
                    <li>
                        <motion.span
                            variants={lockContainer}
                            initial="hidden"
                            animate={lockStates.lock4}
                            className="absolute bg-white z-40"
                        >
                            <Lock
                                control={lockStates.lock4}
                                width="30"
                                height="30"
                            />
                        </motion.span>
                        <Link href={`/${volume}/${circleChapter}/5`}>5</Link>
                    </li>
                </motion.ul>
            )}
        </>
    );
};

export default CircleItems;
