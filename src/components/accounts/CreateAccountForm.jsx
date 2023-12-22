import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "../FormInput";
import ErrorMessage from "../ErrorMessage";
import { emailCheckFailed, passwordCheckFailed, usernameCheckFailed } from "./functions/accountDataValidation";
import getDataFromListOfInputs from "../functions/getDataFromListOfInputs";
import checkErrorInResponse from "../functions/checkErrorInResponse";
import postNewUser from "./functions/postNewUser";

export default function CreateAccountForm() {
    let [formData, setFormData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleClick(event) {
        event.preventDefault();
        let newFormData = getDataFromListOfInputs(inputsList);
        let validationError =
            (newFormData.password && passwordCheckFailed(newFormData.password)) ||
            (newFormData.email && emailCheckFailed(newFormData.email)) ||
            (newFormData.username && usernameCheckFailed(newFormData.username));
        if (validationError) {
            setError(validationError);
            return;
        }
        setFormData(newFormData);
    }

    // creates an account when formData is updated
    useEffect(() => {
        if (formData.username.length > 0) {
            createAccount();
        }

        async function createAccount() {
            let responseData = await postNewUser(formData);
            if (checkErrorInResponse(responseData)) {
                setError(responseData.errors);
                return;
            }
            let newUserData = {};
            newUserData.username = responseData.username;
            newUserData.role = responseData.role;
            setUserData(newUserData);
            return newUserData;
        }
        // eslint-disable-next-line
    }, [formData]);

    const inputsList = ["username", "password", "email", "pronouns"];

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
