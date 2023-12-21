/**
 * Description placeholder
 * @date 20/12/2023 - 23:46:51
 *
 * @export
 * @async
 * @returns {JSON} cookieResponseData JSON
 */
export default async function deleteUser(userId="") {
    let deleteResponse = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/" + userId, {
        method: "DELETE",
        credentials: "include",
    });
    return await deleteResponse.json();
}
