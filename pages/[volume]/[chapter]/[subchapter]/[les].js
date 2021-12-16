import LesLayout from "../../../../components/layouts/Les";

const Les = ({ data, subchapters }) => {
    const typeLes = {
        theory: "blue",
        practice: "green",
        action: "yellow",
        exercise: "orange",
    }[data.attributes.les];

    // console.log(data.attributes.les,typeLes)

    return (
        <LesLayout
            type={typeLes}
            title={`In ${data.attributes.les}`}
            subchapters={subchapters}
        >
            <main className="w-9/12">
                <header className="flex flex-row w-max">
                    <h1 className="text-6xl font-bold">
                        {data.attributes.title}
                    </h1>
                    <span className="text-6xl font-extralight">
                        {data.attributes.subtitle}
                    </span>
                </header>

                <p className="mt-5">{data.attributes.content}</p>
            </main>
        </LesLayout>
    );
};

export default Les;

export async function getStaticPaths() {
    // fetch all layers in subchapters in chapters

    const res = await fetch(
        "https://got-cms.herokuapp.com/api/les-contents?populate=*"
    );
    const res_json = await res.json();
    const data = res_json.data;
    // console.log(data)

    const paths = [];

    data.forEach((les) => {
        // console.log(les)
        try {
            const attr = les.attributes;
            const isTrue = () => {
                return (
                    attr.subchapter_practice.data ||
                    attr.subchapter_action.data ||
                    attr.subchapter_exercise.data
                );
            };
            // console.log(attr.subchapter_theory.data)
            if (isTrue()) {
                // console.log([attr.subchapter_theory.data, attr.subchapter_practice.data, attr.subchapter_action.data, attr.subchapter_exercise.data].map((i)=>{if(i){return(i)}}))
                // console.log(les.id)
                // console.log(attr.subchapter_theory.data)
                if (attr.subchapter_theory.data) {
                    // console.log(attr.subchapter_theory.data)
                    paths.push({
                        params: {
                            les: "/",
                            subchapter:
                                isTrue().attributes.subchapter.toString(),
                            chapter:
                                attr.from_chapter.data.attributes.chapter.toString(),
                            volume: attr.from_volume.data.attributes.volume.toString(),
                        },
                    });
                } else {
                    paths.push({
                        params: {
                            les: attr.les,
                            subchapter:
                                isTrue().attributes.subchapter.toString(),
                            chapter:
                                attr.from_chapter.data.attributes.chapter.toString(),
                            volume: attr.from_volume.data.attributes.volume.toString(),
                        },
                    });
                }
            }
        } catch (e) {console.log(les, e)}
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
    // const res = await fetch(`https://got-cms.herokuapp.com/api/les-contents?filters[les]=${params.les}`)
    const res = await fetch(
        `https://got-cms.herokuapp.com/api/les-contents?populate=*&filters[les]=${params.les}&filters[subchapter_${params.les}][subchapter]=${params.subchapter}`
    );
    const res_json = await res.json();
    const data = res_json.data[0];
    // console.log(data)
    const resChapters = await (
        await fetch(
            `https://got-cms.herokuapp.com/api/chapters?filters[chapter]=${params.chapter}&populate=*`
        )
    ).json();
    const subchapters = resChapters.data[0].attributes.subchapters.data.length;
    // console.log(chaptersLength)

    return {
        props: {
            data,
            subchapters,
        },
    };
}
