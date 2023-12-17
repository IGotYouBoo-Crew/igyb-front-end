import { useContext } from "react";
import MainLayout from "../../components/MainLayout";
import SignInContainer from "../../components/accounts/SignInContainer";
import UserContext from "../../contexts/UserContext";

export default function SignInPage() {
    let {userData} = useContext(UserContext)
    return (
        <MainLayout>
            <div className="bg-honey h-[calc(80vh)] flex flex-col justify-center items-center">
                <SignInContainer />
                hi, my name is: what?
                my name is: who?
                my name is: chicka chicka {userData ? userData.username : "slim shady"}

            </div>
        </MainLayout>
    )
}
