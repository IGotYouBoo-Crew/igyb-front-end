import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import FormInput from "../FormInput";
import ErrorMessage from "../ErrorMessage";

const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function CreateAccountForm() {
    let [data, setData] = useState({ username: "", password: "" });
    let { setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleClick(event) {
        event.preventDefault();
        let newData = {};
        inputs.forEach((inputName) => {
            newData[inputName] = document.getElementsByName(inputName)[0].value;
        });
        newData.email = newData.email.toLowerCase();
        // console.log(newData.password)
        // console.log(passwordCheckFailed(newData.password))
        // if(passwordCheckFailed(newData.password)){
        //     console.log("flag inside if check")
        //     return
        // }
        // console.log("flag after if check")
        setData(newData);
    }

    // function passwordCheckFailed(password) {
    //     console.log(password)
    //     console.log(password.length)
    //     let passwordRequirements = [
    //         {
    //             errorMessage: "Password length must be greater than 8",
    //             test: password.length > 8,
    //         },
    //         {
    //             errorMessage: "Password must contain at least one uppercase letter",
    //             test: password.match(/[A-Z]+/g) || true,
    //         },
    //         {
    //             errorMessage: "Password must contain at least one number",
    //             test: password.match(/[0-9]/) || true,
    //         },
    //     ];
    //     let pass = false
    //     for (let index = 0; index < passwordRequirements.length; index++) {
    //         const requirement = array[index];
    //         console.log(requirement.errorMessage + ", " + requirement.test)
    //         if(!requirement.test){
    //             setError(requirement.errorMessage)
    //             return
    //         } else {
    //             pass = true
                
    //         }

            
    //     }
    //     passwordRequirements.forEach(requirement => {
    //     });
    //     return pass
    // }

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
        setUserData(responseData);
        return responseData;
    }

    const inputs = ["username", "password", "email", "pronouns"];

    return (
        <form className="flex flex-col mb-2">
            {inputs.map((value, i) => {
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
