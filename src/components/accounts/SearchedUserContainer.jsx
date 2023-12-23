import { useContext, useState } from "react";
import colourways from "../../constants/colourways";
import { buttonStyle } from "../../constants/styles";
import ConfirmationModal from "./ConfirmationModal";
import SearchUserContext from "../../contexts/SearchUserContext";
import AccountContainer from "./AccountContainer";

export default function SearchedUserContainer() {
    let { searchUserData } = useContext(SearchUserContext);
    let [showConfirmation, setShowConfirmation] = useState(false);
    let [fade] = useState(false);

    async function handleClickDelete(e) {
        e.preventDefault();
        setShowConfirmation(true);
    }

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
                searchedUserId={searchUserData._id}
            />
            {searchUserData ? <AccountContainer accountData={searchUserData} searchedUser={true} /> : ""}
            <button
                className={buttonStyle.default + colourways.accounts.redWarningButton}
                onClick={(e) => handleClickDelete(e)}
            >
                Delete Account
            </button>
        </div>
    );
}
