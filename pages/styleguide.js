import Main from "../components/layouts/Main";
import Color from "../components/utilities/Color";
import Spinner from "../components/Spinner";
import GrayButton from "../components/utilities/GrayButton";
import PurpleButton from "../components/utilities/PurpleButton";
import { useRouter } from "next/router";
import HorizontalDots from "../components/navigators/HorizontalDots";
import OnionMenu from "../components/navigators/OnionMenu";
import Lock from "../components/icons/Lock";
import Music from "../components/icons/Music";
import MenuCircle from "../components/icons/MenuCircle";
import User from "../components/icons/User";
import Pencil from "../components/icons/Pencil";
import Gear from "../components/icons/Gear";
import Running from "../components/icons/Running";
import Bulb from "../components/icons/Bulb";
import VerticalDots from "../components/navigators/VerticalDots"
import SubChapterSubMenu from "../components/navigators/SubChapterSubMenu"

const Styleguide = () => {
    const router = useRouter();

    return (
        <Main className="flex justify-center">
            <button
                onClick={() => router.back()}
                className="absolute left-5 top-5"
            >
                Back
            </button>
            <div className="container flex justify-center">
                <div className="w-11/12">
                    <h1 className="text-5xl mt-5">Styleguide</h1>

                    <section className="my-24 relative">
                        <header className="mb-5">
                            <h2 className="text-xl">Colors:</h2>
                        </header>
                        <ul className="flex w-full justify-center flex-wrap h-96">
                            <ul className="flex w-full justify-center flex-wrap ">
                                <li className="flex-1">
                                    <Color
                                        color="3F51B5"
                                        className="text-white"
                                    >
                                        #3F51B5
                                    </Color>
                                </li>
                                <li className="flex-1">
                                    <Color
                                        color="54BA54"
                                        className="text-white"
                                    >
                                        #54BA54
                                    </Color>
                                </li>
                                <li className="flex-1">
                                    <Color
                                        color="E7EF37"
                                        className="text-white"
                                    >
                                        #E7EF37
                                    </Color>
                                </li>
                                <li className="flex-1">
                                    <Color
                                        color="FF9400"
                                        className="text-white"
                                    >
                                        #FF9400
                                    </Color>
                                </li>
                            </ul>
                            <ul className="flex w-full justify-center flex-wrap ">
                                <li className="flex-1">
                                    <Color color="CDD5E9">#CDD5E9</Color>
                                </li>
                                <li className="flex-1">
                                    <Color color="C8E8C7">#C8E8C7</Color>
                                </li>
                                <li className="flex-1">
                                    <Color color="F4F4D7">#F4F4D7</Color>
                                </li>
                                <li className="flex-1">
                                    <Color color="F9DDB3">#F9DDB3</Color>
                                </li>
                            </ul>
                        </ul>
                    </section>

                    <section className="my-24">
                        <header className="mb-5">
                            <h2 className="text-xl">Components:</h2>
                        </header>

                        <ul>
                            <li>
                                <Spinner />
                            </li>
                        </ul>
                    </section>

                    <section className="my-24">
                        <header className="mb-5">
                            <h2 className="text-xl">Icons:</h2>
                        </header>

                        <ul className="flex flex-row w-full">
                            <li className="px-5">
                                <MenuCircle width="44" height="44" />
                            </li>
                            <li className="px-5">
                                <Lock width="44" height="44" />
                            </li>
                            <li className="px-5">
                                <Lock width="44" height="44" active={true} />
                            </li>
                            <li className="px-5">
                                <Music width="44" height="44" />
                            </li>

                            <li className="px-5">
                                <User />
                            </li>
                            <li className="px-5">
                                <Gear />
                            </li>
                            <li className="px-5">
                                <Bulb />
                            </li>
                            <li className="px-5">
                                <Pencil />
                            </li>
                            <li className="px-5">
                                <Running />
                            </li>
                        </ul>
                    </section>

                    <section className="my-24">
                        <header className="mb-5">
                            <h2 className="text-xl">Utilities:</h2>
                        </header>

                        <ul className="flex w-full items-stretch relative">
                            <li className="">
                                <GrayButton>Button</GrayButton>
                            </li>
                            <li className="px-5">
                                <PurpleButton>Button</PurpleButton>
                            </li>
                            <li className="relative">
                                <Color
                                    color="3F51B5"
                                    className="text-white px-5"
                                >
                                    #3F51B5
                                </Color>
                            </li>
                        </ul>
                    </section>

                    <section className="my-24">
                        <header className="mb-5">
                            <h2 className="text-xl">Navigations:</h2>
                        </header>

                        <ul className="flex w-full items-stretch relative">
                            <li>
                                <HorizontalDots>
                                    <li className="inline relative z-20 pl-4">
                                        <a
                                            className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors bg-purple-500 `}
                                        >
                                            Intro
                                        </a>
                                    </li>
                                    <li className="inline relative z-20 pl-4">
                                        <button
                                            className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 bg-gray-300`}
                                        >
                                            1
                                        </button>
                                    </li>
                                    <li className="inline relative z-20 pl-4">
                                        <button
                                            className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 bg-gray-300`}
                                        >
                                            2
                                        </button>
                                    </li>
                                    <li className="inline relative z-20 pl-4">
                                        <button
                                            className={`rounded-full block h-16 w-16  flex justify-center items-center hover:bg-purple-500 transition-colors active:bg-purple-500 bg-gray-300`}
                                        >
                                            3
                                        </button>
                                    </li>
                                </HorizontalDots>
                            </li>
                            <li className="px-14">
                                <OnionMenu
                                    progress={{
                                        volume: 1,
                                        chapter: 1,
                                        subchapter: 3,
                                        intro: false,
                                    }}
                                    at={1}
                                />
                            </li>
                            <li className="px-14">
                                <SubChapterSubMenu className="translate-y-32"/>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </Main>
    );
};

export default Styleguide;
