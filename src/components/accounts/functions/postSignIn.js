/**
 * POST route to sign in user with provided username and password
 * @date 21/12/2023 - 01:15:47
 *
 * @exports
 * @async
 * @param {{username:string, password:string}} userDetails Object
 * @returns {{username:string, role:string,}} Also returns cookie
 */
export default async function postSignIn(userDetails) {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userDetails),
    });

    return await response.json();
}
