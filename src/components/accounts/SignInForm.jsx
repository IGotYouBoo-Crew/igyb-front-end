import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "../FormInput";
import ErrorMessage from "../ErrorMessage";
import getDataFromListOfInputs from "../getDataFromListOfInputs";
import checkErrorInResponse from "./functions/checkErrorInResponse";
import postSignIn from "./functions/postSignIn";

export default function SignInForm() {
    let [stateData, setStateData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleClick(event) {
        event.preventDefault();
        let formData = getDataFromListOfInputs(inputs);
        setStateData(formData);
    }

    useEffect(() => {
        if (stateData.username.length > 0) {
            getSignIn();

            async function getSignIn() {
                let responseData = await postSignIn(stateData);
                if (checkErrorInResponse(responseData)) {
                    setError(responseData.errors);
                    return;
                }
                setUserData(responseData);
                return responseData;
            }
        }
        // eslint-disable-next-line
    }, [stateData]);

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
