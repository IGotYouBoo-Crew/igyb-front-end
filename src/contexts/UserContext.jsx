import { createContext, useState } from "react";

export const defaultUserContextData = false

const UserContext = createContext(defaultUserContextData);

export default UserContext;

export function UserProvider(props) {
    const [userData, setUserData] = useState(defaultUserContextData);
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {props.children}
        </UserContext.Provider>
    );
}
