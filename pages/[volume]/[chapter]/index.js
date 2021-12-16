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
        "http://localhost:1337/api/chapters?populate=*"
    );
    const res_json = await res.json();
    const data = res_json.data;
    // console.log(data)

    const paths = [];

    data.forEach((chapter) => {
        let attr = chapter.attributes
        paths.push({
            params: {
                chapter: attr.chapter.toString(),
                volume: attr.volume.data.attributes.volume.toString(),
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
    // const res = await fetch(`http://localhost:1337/api/les-contents?populate=*&filters[les]=theory&filters[subchapter_theory][subchapter]=${params.subchapter}`)
    // const res = await fetch(
    //     `http://localhost:1337/api/les-contents?populate=*&filters[les]=${params.les}&filters[subchapter_${params.les}][subchapter]=${params.subchapter}`
    // );
    const res = await fetch(`http://localhost:1337/api/chapters?populate=*&filters[chapter]=${params.chapter}`)
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
