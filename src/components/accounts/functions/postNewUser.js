/**
 * POST route for new user creation
 * @date 22/12/2023 - 11:41:34
 *
 * @export
 * @async
 * @param {{username:String, password:String, email:String, (pronouns:String):optional, (profilePicture:String):optional}} formData
 * @returns {{data:object, username:string, role:string,}}
 */
export default async function postNewUser(formData) {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/newUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
    });
    return await response.json();
}