import colourways from "../constants/colourways";
import { inputStyle } from "../constants/styles";

export default function FormInput({ value, location, placeholder = false }) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full">
      <label htmlFor={value} className="uppercase">
        {value}:{" "}
      </label>
      <input
        type={value === "password" ? "password" : "text"}
        name={value}
        id={value + "Input"}
        placeholder={placeholder || value}
        className={inputStyle.smaller + colourways[location].input}
      />
    </div>
  );
}
