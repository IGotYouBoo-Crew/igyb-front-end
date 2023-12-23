import { createContext, useState } from "react";

export const defaultSearchUserContextData = false

const SearchUserContext = createContext(defaultSearchUserContextData);

export default SearchUserContext;

export function SearchUserProvider(props) {
    const [searchUserData, setSearchUserData] = useState(defaultSearchUserContextData);
    return (
        <SearchUserContext.Provider value={{ searchUserData, setSearchUserData }}>
            {props.children}
        </SearchUserContext.Provider>
    );
}
