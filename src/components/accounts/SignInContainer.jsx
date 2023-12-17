import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

const backendURL = process.env.REACT_APP_BACKEND_TEST;
const inputStyle =
    "focus:outline text-black placeholder:text-sm md:placeholder:text-base rounded-3xl pl-5 pr-3 py-3 mt-2 mb-4 outline-honey";
const buttonStyle =
    "outline-white outline w-fit py-2 px-4 rounded-3xl mx-auto hover:bg-honey hover:outline-white active:bg-indigo";

export default function SignInContainer() {
    let [data, setData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);

    // TODO: figure out how to make the submit button just submit without redirecting
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
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
        setUserData(responseData)
        return responseData;
    }

    return (
        <div className="h-1/2 w-1/3 min-h-fit min-w-fit p-8 text-white bg-periwinkle rounded-3xl flex flex-col items-center justify-center">
            <form className="flex flex-col">
                <label>USERNAME: </label>
                <input
                    type="text"
                    name="username"
                    id="usernameInput"
                    placeholder="USERNAME"
                    className={inputStyle}
                />
                <label>PASSWORD: </label>
                <input
                    type="password"
                    name="password"
                    id="passwordInput"
                    placeholder="PASSWORD"
                    className={inputStyle}
                />
                <button className={buttonStyle} onClick={(e) => handleClick(e)}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
}
