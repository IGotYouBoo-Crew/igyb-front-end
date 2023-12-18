import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle, inputStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "./FormInput";

const backendURL = process.env.REACT_APP_BACKEND;

export default function CreateAccountForm() {
    let [data, setData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);

    async function handleClick(event) {
        event.preventDefault();
        let newData = { username: "", password: "" };
        newData.username = document.getElementsByName("username")[0].value;
        newData.password = document.getElementsByName("password")[0].value;
        newData.email = document.getElementsByName("email")[0].value.toLowerCase();
        newData.pronouns = document.getElementsByName("pronouns")[0].value;
        setData(newData);
    }

    useEffect(() => {
        if (data.username.length > 0) {
            postNewUser();
        }
        // eslint-disable-next-line
    }, [data]);

    async function postNewUser() {
        let response = await fetch(backendURL + "account/newUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (responseData.errors) {
            return;
        }
        setUserData(responseData);
        return responseData;
    }

    const inputs = ["username", "password", "email", "pronouns"]
    return (
        <form className="flex flex-col mb-2">
            {inputs.map((value, i) => {
                return <FormInput key={i} value={value} />
            })}
            <button
                className={buttonStyle.default + colourways.accounts.outlineButton}
                onClick={(e) => handleClick(e)}
            >
                CREATE ACCOUNT
            </button>
        </form>
    );
}
