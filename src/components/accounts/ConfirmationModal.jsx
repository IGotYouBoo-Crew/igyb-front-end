import { IoClose } from "react-icons/io5";
import colourways from "../../constants/colourways";
import { buttonStyle } from "../../constants/styles";
import deleteUser from "./functions/deleteUser";

export default function ConfirmationModal({ handleClose, isVisible }) {


    async function getDeleteAccount(){
        await deleteUser()
        window.location.reload()
    }

    if (!isVisible) {
        return null;
    }
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
            id="postForm"
            onClick={handleClose}
        >
            <div
                className={
                    "text-white bg-red-600 w-9/12 rounded-3xl h-fit p-8 flex flex-col justify-center items-spread "
                }
            >
                    <button className="text-white text-2xl -mt-4 ml-auto" onClick={handleClose}>
                        <IoClose />
                    </button>
                <div className="flex flex-row items-start justify-center ">
                    <h1 className="mt-4 -mr-2 w-9/12 font-bold text-2xl text-center uppercase">
                        Are you sure you want to delete your account?
                    </h1>
                </div>

                <button
                    type="button"
                    className={buttonStyle.default + colourways.accounts.redWarningButton}
                    onClick={getDeleteAccount}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
