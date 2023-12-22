/**
 * PATCH route for user to update user data
 * @date 20/12/2023 - 23:41:31
 *
 * @export
 * @async
 * @param {{_id:string}} accountData
 * @param {{(username:string):optional, (password:string):optional, (profilePicture:string):optional, (pronouns:string):optional, (email:string):optional,   }} formData Must contain at least one of the optional values
 * @returns {{message:object}} Returns updatedUser details
 */
export default async function patchUser(accountData, formData) {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/" + accountData._id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
    });
    return await response.json();
}
