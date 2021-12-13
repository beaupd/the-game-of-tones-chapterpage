const Layer = ({ data }) => {
    return (
        <>{data.attributes.content}</>
    )
}

export default Layer

export async function getStaticPaths() {

    // fetch all layers in subchapters in chapters

    const res = await fetch("http://localhost:1337/api/les-contents?populate=*")
    const res_json = await res.json()
    const data = res_json.data
    // console.log(data)

    const paths = []

    data.forEach((les) => {
        
        const attr = les.attributes
        const isTrue = () => {return attr.subchapter_theory.data || attr.subchapter_practice.data || attr.subchapter_action.data || attr.subchapter_exercise.data}
        // console.log(attr.subchapter_theory.data)
        if (isTrue()) {
            // console.log([attr.subchapter_theory.data, attr.subchapter_practice.data, attr.subchapter_action.data, attr.subchapter_exercise.data].map((i)=>{if(i){return(i)}}))
            // console.log(les.id)
            paths.push({
                params:{
                    les: attr.les,
                    subchapter: ((isTrue()).attributes.subchapter).toString(),
                    chapter: (attr.from_chapter.data.attributes.chapter).toString(),
                    volume: (attr.from_volume.data.attributes.volume).toString()
                }
            })
        }
    })

    // const layers = [] // list of objects of all layers

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    // props for layer in subchapter in chapter
    const res = await fetch(`http://localhost:1337/api/les-contents?filters[les]=${params.les}`)
    const res_json = await res.json()
    const data = res_json.data[0]
    // console.log(data)

    return {
        props: {
            data
        }
    }
}