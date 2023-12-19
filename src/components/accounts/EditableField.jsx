import { useState } from "react";
import FormInput from "../FormInput";

export default function EditableField({ fieldName, fieldData }) {
    let [editing, setEditing] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setEditing(!editing);
    }
    return (
        <div>
            {editing ? (
                <button onClick={(e) => handleClick(e)}>
                    {fieldName} : {fieldData}
                </button>
            ) : (
                <FormInput value={fieldName} />
            )}
        </div>
    );
}
