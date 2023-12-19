import { useContext } from "react";
import MainLayout from "../components/MainLayout";
import SignInContainer from "../components/accounts/SignInContainer";
import UserContext from "../contexts/UserContext";
import AccountPage from "./AccountPage";



export default function SignInPage() {
    let { userData } = useContext(UserContext);
    
    return (
        <MainLayout>
            <div className="bg-honey h-[calc(95vh)] py-24 flex flex-col justify-center items-center">
                {userData ? (
                    <AccountPage />
                ) : (
                    <SignInContainer />
                )}
            </div>
        </MainLayout>
    );
}
