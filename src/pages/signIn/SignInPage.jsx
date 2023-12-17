import MainLayout from "../../components/MainLayout";
import SignInContainer from "./components/Container";

export default function SignInPage() {
    return (
        <MainLayout>
            <div className="bg-honey h-[calc(80vh)] flex flex-col justify-center items-center">
                <SignInContainer />

            </div>
        </MainLayout>
    )
}
