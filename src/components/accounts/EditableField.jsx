import { useState } from "react";
import FormInput from "../FormInput";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import { IoClose } from "react-icons/io5";

export default function EditableField({ fieldName, fieldData }) {
    let [editing, setEditing] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setEditing(!editing);
    }

    return (
        <div>
            {editing ? (
                <div className="flex flex-row items-center justify-between">
                    <FormInput value={fieldName} location={"accounts"} placeholder={fieldData} />
                    <IoClose className="text-2xl -mt-6" onClick={(e) => handleClick(e)} />
                </div>
            ) : (
                <button
                    onClick={(e) => handleClick(e)}
                    className={buttonStyle.subtle + colourways.accounts.subtleButton}
                >
                    {fieldName} : {fieldData || "--- Change ---"}
                </button>
            )}
        </div>
    );
}
