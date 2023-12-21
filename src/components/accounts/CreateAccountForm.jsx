import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "../FormInput";
import ErrorMessage from "../ErrorMessage";
import { emailCheckFailed, passwordCheckFailed } from "./functions/accountDataValidation";
import getDataFromListOfInputs from "../functions/getDataFromListOfInputs";

const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function CreateAccountForm() {
    let [data, setData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleClick(event) {
        event.preventDefault();
        let newData = getDataFromListOfInputs(inputsList);
        let validationError =
            passwordCheckFailed(newData.password) || emailCheckFailed(newData.email);
        if (validationError) {
            setError(validationError);
            return;
        }
        setData(newData);
    }

    useEffect(() => {
        if (data.username.length > 0) {
            postNewUser();
        }
        // eslint-disable-next-line
    }, [data]);

    async function postNewUser() {
        let response = await fetch(backendURL + "/account/newUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (responseData.errors) {
            if (responseData.errors.split(" ")[0] === "E11000") {
                let key = responseData.errors.split("key: {")[1].split(":")[0];
                responseData.errors = `The ${key} entered is already associated with an account. \nPlease log in to the account, or try another ${key}`;
            }
            setError(responseData.errors);
            return;
        }
        let newData = {};
        newData.username = responseData.username;
        newData.role = responseData.role;
        setUserData(newData);
        return newData;
    }

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
