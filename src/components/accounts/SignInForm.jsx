import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle, inputStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";

const backendURL = process.env.REACT_APP_BACKEND;


export default function SignInForm(){
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
    const inputs = [username, password]
    return(
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
                        SIGN IN
                    </button>
            </form>
    )
}