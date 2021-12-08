import Main from "../components/layouts/Main"
import PurpleButton from "../components/utilities/PurpleButton"


const Onboarding = () => {
    return (
        <Main className="flex items-center justify-center flex-col">
            <h1 className="text-4xl">Onboarding</h1>
            <PurpleButton className="mt-14" href="/home">Get started</PurpleButton>
        </Main>
    )
}

export default Onboarding