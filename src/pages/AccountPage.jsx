import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { buttonStyle } from "../constants/styles";
import colourways from "../constants/colourways";
import AccountContainer from "../components/AccountContainer";

const backendUrl = process.env.REACT_APP_BACKEND;

export default function AccountPage() {
    let { userData, setUserData } = useContext(UserContext);
    let [signedInUserData, setSignedInUserData] = useState(false)


    async function handleClick(e) {
        e.preventDefault();
        await fetch(backendUrl + "/account/signOut", { method: "POST", credentials: "include" });
        setUserData(null);
    }

    useEffect(() => {
        callApi()
        // eslint-disable-next-line
    }, [])
    
    async function callApi(){
        let response = await fetch(backendUrl + "/account/" + userData.username)
        let responseData = await response.json()
        responseData = responseData.data
        responseData.role = responseData.role.name
        console.log(responseData)
        setSignedInUserData(responseData)
    }
    console.log(signedInUserData)

    // TODO: fix up all this
    return (
        <div className={"flex flex-col justify-around h-screen w-9/12 items-center"}>
            <p>This is the account page</p>
            <p>{JSON.stringify(userData)}</p>
            {signedInUserData ? <AccountContainer accountData={signedInUserData} /> : ""}

            <button
                className={"mt-6 " + buttonStyle.default + colourways.accounts.outlineButton}
                onClick={(e) => handleClick(e)}
            >
                LogOut
            </button>
        </div>
    );
}
