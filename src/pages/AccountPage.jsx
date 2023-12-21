import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { buttonStyle } from "../constants/styles";
import colourways from "../constants/colourways";
import AccountContainer from "../components/accounts/AccountContainer";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default function AccountPage() {
    let { userData, setUserData } = useContext(UserContext);
    let [signedInUserData, setSignedInUserData] = useState(false)


    async function handleClick(e) {
        e.preventDefault();
        await fetch(backendUrl + "/account/signOut", { method: "POST", credentials: "include" });
        setUserData(null);
    }

    useEffect(() => {
        console.log(signedInUserData)
        getSignedInUserData()
        // eslint-disable-next-line
    }, [])
    
    async function getSignedInUserData(){
        let response = await fetch(backendUrl + "/account/" + userData.username, {credentials: "include"})
        let responseData = await response.json()
        responseData = responseData.data
        responseData.role = responseData.role.name
        setSignedInUserData(responseData)
    }

    // TODO: fix up all this
    return (
        <div className={"flex flex-col justify-start h-screen w-9/12 items-center pt-16"}>
            {signedInUserData ? <AccountContainer accountData={signedInUserData} /> : ""}

            <button
                className={"mt-6 bg-red-400 hover:bg-red-600 active:bg-red-700 " + buttonStyle.default + colourways.accounts.outlineButton}
                onClick={(e) => handleClick(e)}
            >
                LogOut
            </button>
        </div>
    );
}
