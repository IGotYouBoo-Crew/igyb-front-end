import { useState } from "react";
import FormInput from "../FormInput";
import { buttonStyle, imageStyle } from "../../constants/styles";
import colourways from "../../constants/colourways";
import { IoClose, IoPencil } from "react-icons/io5";

export default function EditableField({ fieldName, fieldData, isPhoto = false }) {
    let [editing, setEditing] = useState(false);
    let [hovering, setHovering] = useState(false);

    function handleHover() {
        setHovering(true);
    }
    function handleHoverEnd() {
        setHovering(false);
    }

    function handleClick(e) {
        e.preventDefault();
        setHovering(false)
        setEditing(!editing);
    }

    let visibility = {
        true: " opacity-100 ml-4 ",
        false: " opacity-0 ",
    };

    if (editing) {
        return (
            <div className="flex flex-row items-center justify-between w-full min-w-fit max-w-[410px]">
                <FormInput value={fieldName} location={"accounts"} placeholder={fieldData} />
                <IoClose className="text-2xl -mt-6" onClick={(e) => handleClick(e)} />
            </div>
        );
    } else {
        return (
            <div className="flex flex-row items-center">
                <button
                    onClick={(e) => handleClick(e)}
                    className={
                        buttonStyle.subtle +
                        colourways.accounts.subtleButton +
                        " flex flex-row items-center whitespace-nowrap" 
                    }
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverEnd}
                >
                    <span className="capitalize mr-2">{fieldName}:</span> {" "}
                    {isPhoto ? (
                        <img
                            src={fieldData}
                            alt="Profile Pic"
                            className={imageStyle.profilePicture}
                        ></img>
                    ) : (
                        fieldData || "--- Change ---"
                    )}
                </button>
                <button onClick={handleClick}
                    className={
                        "text-xl duration-300 ease-in-out transition-all mb-6 -ml-2  " +
                        visibility[hovering]
                    }
                >
                    <IoPencil
                    />
                </button>
            </div>
        );
    }
}
