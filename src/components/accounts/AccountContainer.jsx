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
        </div>
    );
}
