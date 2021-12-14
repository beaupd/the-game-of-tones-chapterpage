import Head from "next/head"
import "../styles/global.css"
import ContextProvider from "../components/providers/ContextProvider"

const Website = ({ Component, pageProps, router }) => {
    return (
        <ContextProvider>
            <Head>
                <link rel="shortcut icon" href="/logo.svg"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} key={router.route} />
        </ContextProvider>
    )

}
export default Website