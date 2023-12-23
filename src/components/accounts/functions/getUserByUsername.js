/**
 * GET route to fetch user details from provided username
 * @date 21/12/2023 - 01:15:47
 *
 * @exports
 * @async
 * @param {username:string} username
 * @returns {{username:string, role:string,}} Also returns cookie
 */
export default async function getUserByUsername(username) {
    console.log(process.env.REACT_APP_BACKEND_URL + "/account/" + username)
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/" + username, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    console.log(response)

    return await response.json();
}
