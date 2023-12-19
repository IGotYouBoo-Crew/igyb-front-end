import { useState } from "react";
import FormInput from "../FormInput";
import { buttonStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";

export default function EditableField({ fieldName, fieldData }) {
    let [editing, setEditing] = useState(false);

    
    function handleClick(e) {
        e.preventDefault();
        setEditing(!editing);
    }
    return (
        <div>
            {editing ? (
                <FormInput value={fieldName} location={"accounts"} />
            ) : (
                <button onClick={(e) => handleClick(e)} className={buttonStyle.subtle + colourways.accounts.subtleButton}>
                    {fieldName} : {fieldData || "--- Change ---"}
                </button>
            )}
        </div>
    );
}