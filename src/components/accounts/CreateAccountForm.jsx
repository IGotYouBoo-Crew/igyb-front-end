import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "../FormInput";
import ErrorMessage from "../ErrorMessage";
import {
    emailCheckFailed,
    passwordCheckFailed,
    usernameCheckFailed,
} from "./functions/accountDataValidation";
import getDataFromListOfInputs from "../functions/getDataFromListOfInputs";
import checkErrorInResponse from "../functions/checkErrorInResponse";
import postNewUser from "./functions/postNewUser";
import { photoCheckFailed } from "../posts/postDataValidation";

export default function CreateAccountForm({ fade }) {
    let [formData, setFormData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleClick(event) {
        event.preventDefault();
        let newFormData = getDataFromListOfInputs(inputsList);
        let validationError =
            usernameCheckFailed(newFormData.username) ||
            passwordCheckFailed(newFormData.password) ||
            emailCheckFailed(newFormData.email) ||
            (newFormData.profilePicture && photoCheckFailed(newFormData.profilePicture));
        if (!(formData.username && formData.username.length > 0)) {
            setError("Username required");
        }
        if (validationError) {
            setError(validationError);
            return;
        }
        setFormData(newFormData);
    }

    // creates an account when formData is updated
    useEffect(() => {
        if (formData.username && formData.username.length > 0) {
            createAccount();
            setError(false);
        }

        async function createAccount() {
            let responseData = await postNewUser(formData);
            if (checkErrorInResponse(responseData)) {
                setError(responseData.errors);
                return;
            }
            fade();
            let newUserData = {};
            newUserData.username = responseData.username;
            newUserData.role = responseData.role;
            setTimeout(() => {
                setUserData(newUserData);
            }, 300);
            return newUserData;
        }
        // eslint-disable-next-line
    }, [formData]);

    const inputsList = ["username", "password", "email", "pronouns", "profilePicture"];

    return (
        <form className="flex flex-col mb-2">
            {inputsList.map((value, i) => {
                return <FormInput key={i} value={value} location={"accounts"} />;
            })}
            <ErrorMessage error={error} />
            <button
                className={buttonStyle.default + colourways.accounts.outlineButton}
                onClick={(e) => handleClick(e)}
            >
                create account
            </button>
        </form>
    );
}
