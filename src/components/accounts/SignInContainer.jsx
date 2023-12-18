import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle, inputStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";

const backendURL = process.env.REACT_APP_BACKEND;

export default function SignInContainer() {
    let [data, setData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);

    async function handleClick(event) {
        event.preventDefault();
        let newData = { username: "", password: "" };
        newData.username = document.getElementsByName("username")[0].value;
        newData.password = document.getElementsByName("password")[0].value;
        setData(newData);
    }

    useEffect(() => {
        if (data.username.length > 0) {
            getSignIn();
        }
        // eslint-disable-next-line
    }, [data]);

    async function getSignIn() {
        let response = await fetch(backendURL + "account/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (responseData.errors){
            return
        }
        setUserData(responseData)
        return responseData;
    }

    return (
        <div className={"h-1/2 w-1/3 min-h-fit min-w-fit p-8 rounded-3xl flex flex-col items-center justify-center " + colourways.accounts.container}>
            <form className="flex flex-col">
                <label>USERNAME: </label>
                <input
                    type="text"
                    name="username"
                    id="usernameInput"
                    placeholder="USERNAME"
                    className={inputStyle.default + colourways.accounts.input}
                />
                <label>PASSWORD: </label>
                <input
                    type="password"
                    name="password"
                    id="passwordInput"
                    placeholder="PASSWORD"
                    className={inputStyle.default + colourways.accounts.input}
                />
                <button className={buttonStyle.default + colourways.accounts.outlineButton} onClick={(e) => handleClick(e)}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
}
