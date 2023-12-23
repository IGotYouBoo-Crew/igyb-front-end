import { useContext, useState } from "react";
import MainLayout from "../components/MainLayout";
import SignInContainer from "../components/accounts/SignInContainer";
import UserContext from "../contexts/UserContext";
import AccountPage from "./AccountPage";
import SearchBar from "../components/SearchBar";
import getUserByUsername from "../components/accounts/functions/getUserByUsername";
import SearchUserContext from "../contexts/SearchUserContext";
import SearchedUserContainer from "../components/accounts/SearchedUserContainer";

export default function SignInPage() {
    let { userData } = useContext(UserContext);
    let { searchUserData, setSearchUserData } = useContext(SearchUserContext);
    let [searchText, setSearchText] = useState("");
    async function fetchUserByUsername() {
        let fetchedUserData = await getUserByUsername(searchText);
        fetchedUserData = fetchedUserData.data;
        fetchedUserData.role = fetchedUserData.role.name;
        setSearchUserData(fetchedUserData);
    }

    return (
        <MainLayout>
            <div className="bg-honey min-h-[700px] h-full py-8 ">
                <div className="my-auto flex flex-col justify-center items-center ">
                    {userData && userData.role === "Admin" && (
                        <SearchBar
                            className="w-full"
                            location=""
                            searchTarget=" Superstar"
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                            onSearch={fetchUserByUsername}
                        />
                    )}
                    {searchUserData ? <SearchedUserContainer /> : ""}
                    {userData ? <AccountPage /> : <SignInContainer />}
                </div>
            </div>
        </MainLayout>
    );
}
