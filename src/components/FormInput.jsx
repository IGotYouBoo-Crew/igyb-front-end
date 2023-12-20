import colourways from "../constants/colourways";
import { inputStyle } from "../constants/styles";

export default function FormInput({ value, location }) {
    return (
        <>
            <label htmlFor={value} className="uppercase">{value}: </label>
            <input
                type={value === "password" ? "password" : "text"}
                name={value}
                id={value + "Input"}
                placeholder={value}
                className={inputStyle.default + colourways[location].input}
            />
        </>
    );
}