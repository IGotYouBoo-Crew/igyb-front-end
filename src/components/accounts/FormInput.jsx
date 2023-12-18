import colourways from "../../constants/colourways";
import { inputStyle } from "../../constants/styles";

export default function FormInput({ value }) {
    return (
        <>
            <label for="{value}">{value.toUpperCase()}: </label>
            <input
                type={value === "password" ? "password" : "text"}
                name={value}
                id={value + "Input"}
                placeholder={value.toUpperCase()}
                className={inputStyle.default + colourways.accounts.input}
            />
        </>
    );
}
