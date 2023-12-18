import { useContext } from "react";
import MainLayout from "../../components/MainLayout";
import SignInContainer from "../../components/accounts/SignInContainer";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";

const backendUrl = process.env.REACT_APP_BACKEND;

export default function SignInPage() {
    let { userData, setUserData } = useContext(UserContext);
    async function handleClick(e) {
        e.preventDefault();
        await fetch(backendUrl + "account/signOut", { method: "POST", credentials: "include" });
        setUserData(null);
    }
    return (
        <MainLayout>
            <div className="bg-honey h-[calc(95vh)] py-24 flex flex-col justify-center items-center">
                {userData ? (
                    <button className={buttonStyle.default + colourways.accounts.outlineButton} onClick={(e) => handleClick(e)}>LogOut</button>
                ) : (
                    <SignInContainer />
                )}
            </div>
        </MainLayout>
    );
}
