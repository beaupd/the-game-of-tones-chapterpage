import LesLayout from "../../../../components/layouts/Les";

const SubchapterIndex = ({ data, subchapters }) => {
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

export default SubchapterIndex;

export async function getStaticPaths() {
    // fetch all layers in subchapters in chapters

    const res = await fetch(
        "http://localhost:1337/api/les-contents?populate=*"
    );
    const res_json = await res.json();
    const data = res_json.data;
    // console.log(data)

    const paths = [];

    data.forEach((les) => {
        const attr = les.attributes;
        const isTrue = () => {
            return (
                attr.subchapter_theory.data ||
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
                        subchapter: isTrue().attributes.subchapter.toString(),
                        chapter:
                            attr.from_chapter.data.attributes.chapter.toString(),
                        volume: attr.from_volume.data.attributes.volume.toString(),
                    },
                });
            } else {
                paths.push({
                    params: {
                        les: attr.les,
                        subchapter: isTrue().attributes.subchapter.toString(),
                        chapter:
                            attr.from_chapter.data.attributes.chapter.toString(),
                        volume: attr.from_volume.data.attributes.volume.toString(),
                    },
                });
            }
        }
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
    const res = await fetch(`http://localhost:1337/api/les-contents?populate=*&filters[les]=theory&filters[subchapter_theory][subchapter]=${params.subchapter}`)
    // const res = await fetch(
    //     `http://localhost:1337/api/les-contents?populate=*&filters[les]=${params.les}&filters[subchapter_${params.les}][subchapter]=${params.subchapter}`
    // );
    const res_json = await res.json();
    const data = res_json.data[0];
    // // console.log(data)
    const resChapters = await (
        await fetch(
            `http://localhost:1337/api/chapters?filters[chapter]=${params.chapter}&populate=*`
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
