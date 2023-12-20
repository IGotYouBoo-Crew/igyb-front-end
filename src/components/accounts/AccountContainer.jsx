import { useContext, useEffect, useState } from "react";
import colourways from "../../constants/colourways";
import { buttonStyle, containerStyle } from "../../constants/styles";
import EditableField from "./EditableField";
import { IoClose, IoPencil } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";

export default function AccountContainer({ accountData }) {
    let [editable, setEditable] = useState(false);
    let [formData, setFormData] = useState({});
    let [errorMessage, setErrorMessage] = useState(false);
    let { setUserData } = useContext(UserContext);

    let editableFields = { ...accountData };
    delete editableFields._id;
    delete editableFields.role;
    editableFields.password = "";
    let editableFieldsKeys = Object.keys(editableFields);

    function toggleEdit(e) {
        e.preventDefault();
        setEditable(!editable);
    }

    async function handleSubmit(event) {
        let newData = {};
        editableFieldsKeys.forEach((editableFieldName) => {
            let checkValue = document.getElementsByName(editableFieldName);
            if (checkValue.length > 0 && checkValue[0].value) {
                newData[editableFieldName] = checkValue[0].value;
            }
        });
        setFormData(newData);
    }

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            patchUser();
        }
        // eslint-disable-next-line
    }, [formData]);

    async function patchUser() {
        let response = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/account/" + accountData._id,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formData),
            }
        );
        const responseData = await response.json();
        if (responseData.errors) {
            if (responseData.errors.split(" ")[0] === "E11000") {
                let key = responseData.errors.split("key: {")[1].split(":")[0];
                responseData.errors = `The ${key} entered is already associated with an account. \nPlease log in to the account, or try another ${key}`;
            }
            setErrorMessage(responseData.errors);
            return;
        }
        let cookieResponse = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/account/cookieCheck",
            { method: "POST", credentials: "include" }
        );
        let cookieResponseData = await cookieResponse.json();
        // TODO FIX THIS
        setUserData(cookieResponseData);
        window.location.reload();
        return responseData;
    }

    return (
        <div className={containerStyle.account + colourways.accounts.container}>
            <div className="flex flex-row justify-between items-center w-full md:w-1/2 mb-2">
                {/* Title alternates between edit state */}
                <h1 className="text-xl md:text-2xl">
                    {editable ? "Edit Account Details" : "Account Details"}
                </h1>

                {/* Button displays pencil when not editing, and an X when editing */}
                <button onClick={(e) => toggleEdit(e)} className={"px-2 py-1 "}>
                    {editable ? (
                        <IoClose className="text-3xl -mr-2 -mt-2 " />
                    ) : (
                        <IoPencil className="text-xl" />
                    )}
                </button>
            </div>
            {/* When editing, displays list of editable fields. When not editing, displays list of data */}
            {editable
                ? Object.keys(editableFields).map((key, index) => {
                      return (
                          <EditableField
                              fieldName={key}
                              key={index}
                              fieldData={editableFields[key]}
                          />
                      );
                  })
                : Object.keys(accountData).map((key, index) => {
                      return (
                          <p
                              key={index}
                              className="text-left w-full mb-1 md:w-1/2 md:text-lg md:mb-2 "
                          >
                              <span className="capitalize">{key}</span>: {accountData[key]}
                          </p>
                      );
                  })}

            {editable ? (
                <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    className={buttonStyle.default + colourways.accounts.outlineButton}
                >
                    submit
                </button>
            ) : (
                ""
            )}
            <span className="text-red-500">{errorMessage ? errorMessage : ""}</span>
        </div>
    );
}
