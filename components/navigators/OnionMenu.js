import Image from "next/image"

const OnionMenu = () => {
    return (
        <div className="w-96 h-96 overflow-hidden relative rounded-full flex justify-center items-center">
            <Image
                    src="/hue_circle.png"
                    layout="fill"
                    objectFit="cover"
                />
            <div className="bg-white bg-opacity-40 w-full h-full z-20 absolute rounded-full"></div>

            <div className="bg-purple-500 bg-opacity-60 w-88 h-88 z-30 relative rounded-full">
                
            </div>
        </div>
    )
}

export default OnionMenu