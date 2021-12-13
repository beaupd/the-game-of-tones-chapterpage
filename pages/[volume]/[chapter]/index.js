const ChapterIndex = () => {
    return (
        <></>
    )
}

export default ChapterIndex

export async function getStaticPaths() {

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({   }) {


    return {
        props: {

        }
    }
}
