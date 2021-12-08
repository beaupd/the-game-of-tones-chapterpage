
import Head from "next/head"
import "../styles/global.css"

const Website = ({ Component, pageProps, router }) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} key={router.route} />
        </>
    )

}
export default Website