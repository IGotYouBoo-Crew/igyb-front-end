
/**
 * Description placeholder
 * @date 21/12/2023 - 01:15:47
 *
 * @exports
 * @async
 * @param {stateData} stateData Object
 * @returns {JSON} responseData JSON
 */
export default async function postSignIn(stateData) {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(stateData),
    });
    
    return await response.json();
}