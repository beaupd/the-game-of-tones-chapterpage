import Link from "next/link"
import Pencil from "../icons/Pencil";
import Gear from "../icons/Gear";
import Running from "../icons/Running";
import Bulb from "../icons/Bulb";

const SubChapterSubMenu = ({ className = "", subChapter, chapter, volume }) => {
    return (
        <ul
            className={`${className} relative flex items-center justify-center -translate-y-4`}
        >
            <li className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-full">
                <Link href={`/${volume}/${chapter}/${subChapter}/`}>
                    <span className="cursor-pointer relative flex items-end justify-center">
                        <a
                            className="absolute z-20 after:content-[''] after:block after:absolute after:bg-blue after:h-full after:w-full after:left-0 after:top-0 after:skew-x-[30deg] before:content-[''] before:block before:absolute before:bg-blue before:h-full before:w-full before:left-0 before:top-0 before:skew-x-[-30deg] after:-translate-x-4 before:translate-x-4 bg-blue"
                            style={{ transform: "translateY(-66px)" }}
                        >
                            <Bulb className="relative z-10" fill="white" />
                        </a>
                    </span>
                </Link>
            </li>
            <li className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-full">
                <Link href={`/${volume}/${chapter}/${subChapter}/practice`}>
                    <span className="cursor-pointer relative flex items-end justify-center">
                        <a
                            className="absolute z-20 after:content-[''] after:block after:absolute after:bg-green after:h-full after:w-full after:left-0 after:top-0 after:skew-x-[30deg] before:content-[''] before:block before:absolute before:bg-green before:h-full before:w-full before:left-0 before:top-0 before:skew-x-[-30deg] after:-translate-x-4 before:translate-x-4 bg-green"
                            style={{
                                transform: "rotate(-60deg) translateY(-66px)",
                            }}
                        >
                            <Gear className="relative z-10" fill="white"/>
                        </a>
                    </span>
                </Link>
            </li>
            <li className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-full">
                <Link href={`/${volume}/${chapter}/${subChapter}/action`}>
                    <span className="cursor-pointer relative flex items-end justify-center">
                        <a
                            className="absolute z-20 after:content-[''] after:block after:absolute after:bg-yellow after:h-full after:w-full after:left-0 after:top-0 after:skew-x-[30deg] before:content-[''] before:block before:absolute before:bg-yellow before:h-full before:w-full before:left-0 before:top-0 before:skew-x-[-30deg] after:-translate-x-4 before:translate-x-4 bg-yellow"
                            style={{
                                transform: "rotate(-120deg) translateY(-66px)",
                            }}
                        >
                            <Running className="relative z-10" fill="white" />
                        </a>
                    </span>
                </Link>
            </li>
            <li className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-full">
                <Link href={`/${volume}/${chapter}/${subChapter}/exercise`}>
                    <span className="cursor-pointer relative flex items-end justify-center">
                        <a
                            className="absolute z-20 after:content-[''] after:block after:absolute after:bg-orange after:h-full after:w-full after:left-0 after:top-0 after:skew-x-[30deg] before:content-[''] before:block before:absolute before:bg-orange before:h-full before:w-full before:left-0 before:top-0 before:skew-x-[-30deg] after:-translate-x-4 before:translate-x-4 bg-orange"
                            style={{
                                transform: "rotate(-180deg) translateY(-66px)",
                            }}
                        >
                            <Pencil className="relative z-10" fill="white" />
                        </a>
                    </span>
                </Link>
            </li>
        </ul>
    );
};

export default SubChapterSubMenu;
