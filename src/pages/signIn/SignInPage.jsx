import { useContext } from "react";
import MainLayout from "../../components/MainLayout";
import SignInContainer from "../../components/accounts/SignInContainer";
import UserContext from "../../contexts/UserContext";

const backendUrl = process.env.REACT_APP_BACKEND

export default function SignInPage() {
    let {userData, setUserData} = useContext(UserContext)
    async function handleClick(e){
        e.preventDefault()
        await fetch(backendUrl + "account/signOut", {method: "POST", credentials: 'include'})
        setUserData(null)
    }
    return (
        <MainLayout>
            <div className="bg-honey h-[calc(80vh)] flex flex-col justify-center items-center">
                <SignInContainer />
                <button onClick={(e)=>handleClick(e)}>LogOut</button>
            </div>
        </MainLayout>
    )
}
