import { useContext } from "react";
import MainLayout from "../components/MainLayout";
import SignInContainer from "../components/accounts/SignInContainer";
import UserContext from "../contexts/UserContext";
import AccountPage from "./AccountPage";
import SearchBar from "../components/SearchBar";



export default function SignInPage() {
    let { userData } = useContext(UserContext);
    
    return (
        <MainLayout>
            <div className="bg-honey min-h-fit h-full py-24 my-auto flex flex-col justify-center items-center ">
                {(userData && userData.role === "Admin") && <SearchBar />}
                {userData ? (
                    <AccountPage />
                ) : (
                    <SignInContainer />
                )}
            </div>
        </MainLayout>
    );
}
