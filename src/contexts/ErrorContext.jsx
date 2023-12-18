import { createContext, useState } from "react";

export const defaultErrorContextData = null

const ErrorContext = createContext(defaultErrorContextData);

export default ErrorContext;

export function ErrorProvider(props) {
    const [errorData, setErrorData] = useState(defaultErrorContextData);
    return (
        <ErrorContext.Provider value={{ errorData, setErrorData }}>
            {props.children}
        </ErrorContext.Provider>
    );
}
