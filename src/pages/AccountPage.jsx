import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { buttonStyle } from "../constants/styles";
import colourways from "../constants/colourways";
import AccountContainer from "../components/accounts/AccountContainer";
import ConfirmationModal from "../components/accounts/ConfirmationModal";
import checkErrorInResponse from "../components/functions/checkErrorInResponse";
import ErrorMessage from "../components/ErrorMessage";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default function AccountPage() {
    let { userData, setUserData } = useContext(UserContext);
    let [signedInUserData, setSignedInUserData] = useState(false);
    let [showConfirmation, setShowConfirmation] = useState(false);
    let [errorMessage, setErrorMessage] = useState(false);
    let [fade, setFade] = useState(false);

    async function handleClickLogOut(e) {
        e.preventDefault();
        await fetch(backendUrl + "/account/signOut", { method: "POST", credentials: "include" });
        setFade(true);
        setTimeout(() => {
            setUserData(null);
            setFade(false);
        }, 800);
    }

    async function handleClickDelete(e) {
        e.preventDefault();
        setShowConfirmation(true);
    }

    useEffect(() => {
        getSignedInUserData();
        // eslint-disable-next-line
    }, []);

    async function getSignedInUserData() {
        let response = await fetch(backendUrl + "/account/" + userData.username, {
            credentials: "include",
        });
        let responseData = await response.json();
        if (checkErrorInResponse(responseData)) {
            setErrorMessage(responseData.errors);
            return;
        }
        responseData = responseData.data;
        responseData.role = responseData.role.name;
        setSignedInUserData(responseData);
    }

    // TODO: fix up all this
    return (
        <div
            className={
                "flex flex-col justify-start h-screen w-9/12 items-center pt-16 " +
                (fade ? " animate-fade-away " : " animate-fade-towards ")
            }
        >
            <ConfirmationModal
                isVisible={showConfirmation}
                handleClose={() => setShowConfirmation(false)}
            />
            {signedInUserData ? <AccountContainer accountData={signedInUserData} /> : ""}
            <ErrorMessage error={errorMessage} />

            <button
                className={buttonStyle.default + colourways.accounts.redWarningButton}
                onClick={(e) => handleClickLogOut(e)}
            >
                LogOut
            </button>
            {errorMessage ? (
                ""
            ) : (
                <button
                    className={buttonStyle.default + colourways.accounts.redWarningButton}
                    onClick={(e) => handleClickDelete(e)}
                >
                    Delete Account
                </button>
            )}
        </div>
    );
}
