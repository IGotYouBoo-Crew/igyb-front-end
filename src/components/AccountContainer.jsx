import { useContext, useEffect, useState } from "react";
import colourways from "../constants/colourways";
import { buttonStyle, containerStyle } from "../constants/styles";
import FormInput from "./FormInput";
import UserContext from "../contexts/UserContext";

const backendURL = process.env.REACT_APP_BACKEND;

export default function AccountContainer({ accountData }) {
    let [editable, setEditable] = useState(false);
    let [data, setData] = useState({ username: "", password: "" });
    let { userData, setUserData } = useContext(UserContext);
    let [error, setError] = useState(false);

    async function handleSubmit(event) {
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
            patchUser();
        }
        // eslint-disable-next-line
    }, [data]);

    async function patchUser() {
        let response = await fetch(backendURL + "/account/" + userData.username, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (responseData.errors) {
            if (responseData.errors.split(" ")[0] === "E11000") {
                let key = responseData.errors.split("key: {")[1].split(":")[0]
                responseData.errors = `The ${key} entered is already associated with an account. \nPlease log in to the account, or try another ${key}`
            }
            setError(responseData.errors);
            return;
        }
        setUserData(responseData);
        return responseData;
    }


    let editableFields = { ...accountData };
    delete editableFields._id;
    delete editableFields.role;
    editableFields.password = "";

    function handleClick(e) {
        e.preventDefault();
        setEditable(!editable);
    }
    return (
        <div className={containerStyle.account + colourways.accounts.container}>
            {editable
                ? Object.keys(editableFields).map((key, index) => {
                      return <FormInput location={"accounts"} value={key} key={index} />;
                  })
                : Object.keys(accountData).map((key, index) => {
                      return (
                          <p key={index} className="w-full ">
                              {key} : {accountData[key]}
                          </p>
                      );
                  })}
            <div className="flex flex-row w-full justify-center items-center mt-5">
                {editable ? (
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className={
                            "w-1/3 min-w-[90px] " + buttonStyle.default + colourways.accounts.outlineButton
                        }
                    >
                        Submit changes
                    </button>
                ) : (
                    ""
                )}

                <button
                    onClick={(e) => handleClick(e)}
                    className={"w-1/3 min-w-[90px] " + buttonStyle.default + colourways.accounts.outlineButton}
                >
                    {editable ? "Cancel editing" : "Edit"}
                </button>

            </div>
        </div>
    );
}
