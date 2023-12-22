import { useContext, useEffect, useState } from "react";
import colourways from "../../constants/colourways";
import { buttonStyle, containerStyle, disneyStudios, imageStyle } from "../../constants/styles";
import EditableField from "./EditableField";
import { IoClose, IoPencil } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import patchUser from "./functions/patchUser";
import checkErrorInResponse from "../functions/checkErrorInResponse";
import getCookieResponse from "./functions/getCookieResponse";
import getDataFromListOfInputs from "../functions/getDataFromListOfInputs";
import { emailCheckFailed, passwordCheckFailed, usernameCheckFailed } from "./functions/accountDataValidation";
import ErrorMessage from "../ErrorMessage";

/**
 * A container for holding editable account data
 * @date 22/12/2023 - 12:06:05
 *
 * @export
 * @param {{ accountData: {_id:string, username:string, role:string, email:string, profilePicture:string, pronouns:string} } }  
 * @returns {HTMLElement}
 */
export default function AccountContainer({ accountData, fade }) {
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
        event.preventDefault();
        let newData = getDataFromListOfInputs(editableFieldsKeys);
        let validationError =
            (newData.password && passwordCheckFailed(newData.password)) ||
            (newData.email && emailCheckFailed(newData.email)) ||
            (newData.username && usernameCheckFailed(newData.username));
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }
        setFormData(newData);
    }

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            updateUser();

            async function updateUser() {
                // patchUser sends formData to API patch route
                let responseData = await patchUser(accountData, formData);

                // checks for error message and sets the errorMessage state to display.
                if (checkErrorInResponse(responseData)) {
                    setErrorMessage(responseData.errors);
                    return;
                }
                // getCookieResponse() sends the user cookie to the API
                let cookieResponseData = await getCookieResponse();
                setUserData(cookieResponseData);

                // refreshes the page to update the user data on display
                window.location.reload();
                return responseData;
            }
        }
        // eslint-disable-next-line
    }, [formData]);

    return (
        <form className={containerStyle.account + colourways.accounts.container + disneyStudios.fadeAway[fade]}>
            <div className="flex flex-row justify-between items-center w-full min-w-fit md:w-1/2 mb-2 duration-1000 transition-all ease-in-out">
                {/* Title alternates between edit state */}
                <h1 className="text-xl md:text-2xl mb-4">
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
                ? editableFieldsKeys.map((key, index) => {
                      return (
                          <EditableField
                              fieldName={key}
                              fieldData={editableFields[key]}
                              key={index}
                              isPhoto={key === "profilePicture"}
                          />
                      );
                  })
                : Object.keys(accountData).map((key, index) => {
                      return (
                          <p
                              key={index}
                              className="text-left w-full mb-1 md:w-1/2 md:text-lg md:mb-2 duration-1000 transition-all ease-in-out "
                          >
                              {key === "profilePicture" ? (
                                  <div className="flex flex-row justify-start items-center">
                                      <span className="capitalize">{key}</span> :{" "}
                                      <img
                                          src={accountData[key]}
                                          alt="Profile Pic"
                                          className={imageStyle.profilePicture}
                                      />
                                  </div>
                              ) : (
                                  <div>
                                      <span className="capitalize">{key}</span>: {accountData[key]}
                                  </div>
                              )}
                          </p>
                      );
                  })}

            {editable ? (
                <button
                    onClick={(e) => handleSubmit(e)}
                    className={buttonStyle.default + colourways.accounts.outlineButton}
                >
                    submit
                </button>
            ) : (
                ""
            )}
            <ErrorMessage error={errorMessage} />
        </form>
    );
}
