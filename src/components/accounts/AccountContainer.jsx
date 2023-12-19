import { useState } from "react";
import colourways from "../../constants/colourways";
import { containerStyle } from "../../constants/styles";
import EditableField from "./EditableField";
import { IoClose, IoPencil } from "react-icons/io5";

export default function AccountContainer({ accountData }) {
    let [editable, setEditable] = useState(false);

    let editableFields = { ...accountData };
    delete editableFields._id;
    delete editableFields.role;
    editableFields.password = "";
    console.log(editableFields);

    function toggleEdit(e) {
        e.preventDefault();
        setEditable(!editable);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let newData = {};
        let editedUsername = document.getElementsByName("username");
        let editedPassword = document.getElementsByName("password");
        let editedEmail = document.getElementsByName("email");
        let editedPronouns = document.getElementsByName("pronouns");

        if (editedUsername && editedUsername[0].value) {
            newData.username = editedUsername[0].value;
        }
        if (editedPassword.length > 0 && editedPassword[0].value) {
            newData.password = editedPassword[0].value;
        }
        if (editedEmail.length > 0 && editedEmail[0].value) {
            newData.email = editedEmail[0].value;
        }
        if (editedPronouns.length > 0 && editedPronouns[0].value) {
            newData.pronouns = editedPronouns[0].value;
        }
        console.log(newData);
        // setData(newData);
    }

    // useEffect(() => {
    //     if (data.username.length > 0) {
    //         patchUser();
    //     }
    //     // eslint-disable-next-line
    // }, [data]);

    // async function patchUser() {
    //     let response = await fetch(backendURL + "/account/" + userData.username, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         credentials: "include",
    //         body: JSON.stringify(data),
    //     });
    //     const responseData = await response.json();
    //     if (responseData.errors) {
    //         if (responseData.errors.split(" ")[0] === "E11000") {
    //             let key = responseData.errors.split("key: {")[1].split(":")[0]
    //             responseData.errors = `The ${key} entered is already associated with an account. \nPlease log in to the account, or try another ${key}`
    //         }
    //         setError(responseData.errors);
    //         return;
    //     }
    //     setUserData(responseData);
    //     return responseData;
    // }

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

            {editable ? <button onClick={(e) => handleSubmit(e)}>submit</button> : ""}
        </div>
    );
}
