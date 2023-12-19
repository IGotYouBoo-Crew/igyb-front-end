import { useState } from "react";
import colourways from "../constants/colourways";
import { buttonStyle, containerStyle } from "../constants/styles";
import FormInput from "./FormInput";

export default function AccountContainer({ userData }) {
    let [editable, setEditable] = useState(false);
    

    let editableFields = { ...userData };
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
                : Object.keys(userData).map((key, index) => {
                      return (
                          <p key={index} className="w-full ">
                              {key} : {userData[key]}
                          </p>
                      );
                  })}
            <div className="flex flex-row w-full justify-center items-center mt-5">
                {editable ? (
                    <button
                        onClick={(e) => handleClick(e)}
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
