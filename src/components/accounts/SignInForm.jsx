import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "../FormInput";
import ErrorMessage from "../ErrorMessage";

const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function SignInForm() {
    let [stateData, setStateData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleClick(event) {
        event.preventDefault();
        let formData = { username: "", password: "" };
        formData.username = document.getElementsByName("username")[0].value;
        formData.password = document.getElementsByName("password")[0].value;
        setStateData(formData);
    }

    useEffect(() => {
        if (stateData.username.length > 0) {
            getSignIn();
        }
        // eslint-disable-next-line
    }, [stateData]);

    async function getSignIn() {
        let response = await fetch(backendURL + "/account/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(stateData),
        });
        
        const responseData = await response.json();

        if (responseData.errors) {
            setError(responseData.errors);
            return;
        }

        setUserData(responseData);
        return responseData;
    }

    const inputs = ["username", "password"];

    return (
        <form className="flex flex-col">
            {inputs.map((value, i) => {
                return <FormInput key={i} value={value} location="accounts" />;
            })}
            <ErrorMessage error={error} />
            <button
                className={buttonStyle.default + colourways.accounts.outlineButton}
                onClick={(e) => handleClick(e)}
            >
                sign in
            </button>
        </form>
    );
}
