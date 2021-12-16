import LesLayout from "../../../components/layouts/Les"

const ChapterIndex = ({data, subchapters}) => {
    // console.log(data.attributes.intro)
    return (
        <LesLayout type="blue" title="Chapter Index" subchapters={subchapters}>
            <main className="w-9/12">
                <header className="flex flex-row w-max">
                    <h1 className="text-6xl font-bold">
                        {data.attributes.intro.data.attributes.title}
                    </h1>
                    <span className="text-6xl font-extralight">
                        {data.attributes.intro.data.attributes.subtitle}
                    </span>
                </header>

                <p className="mt-5">{data.attributes.intro.data.attributes.content}</p>
            </main>
        </LesLayout>
    )
}

export default ChapterIndex

export async function getStaticPaths() {

    const res = await fetch(
        "https://got-cms.herokuapp.com/api/chapters?populate=*&filters[id]=1"
    );
    const res_json = await res.json();
    const data = res_json.data;
    // console.log(data)

    const paths = [];

    
    data.forEach((chapter) => {
        // console.log(chapter, "\n\n\n\n",chapter.attributes)
        const c = chapter
        // console.log(c, c.attributes.volume)

        // const attr = chapter.attributes
        // console.log(attr.chapter,"oooo")
        // console.log("fankermank", c)
        
        // console.log(attr)
        paths.push({
            params: {
                chapter: `${c.attributes.chapter}`,
                volume: `${c.attributes.volume.data.attributes.volume}`,
            },
        })
    });

    // const layers = [] // list of objects of all layers

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // console.log(params)
    // props for layer in subchapter in chapter
    // const res = await fetch(`https://got-cms.herokuapp.com/api/les-contents?populate=*&filters[les]=theory&filters[subchapter_theory][subchapter]=${params.subchapter}`)
    // const res = await fetch(
    //     `https://got-cms.herokuapp.com/api/les-contents?populate=*&filters[les]=${params.les}&filters[subchapter_${params.les}][subchapter]=${params.subchapter}`
    // );
    const res = await fetch(`https://got-cms.herokuapp.com/api/chapters?populate=*&filters[chapter]=${params.chapter}`)
    const res_json = await res.json();
    const data = res_json.data[0];
    // // console.log(data)
    const subchapters = data.attributes.subchapters.data.length;
    // console.log(chaptersLength)



    return {
        props: {
            data,
            subchapters,
        },
    };
}
