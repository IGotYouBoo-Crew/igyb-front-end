/**
 * Description placeholder
 * @date 20/12/2023 - 23:46:51
 *
 * @export
 * @async
 * @returns {JSON} cookieResponseData JSON
 */
export default async function getCookieResponse() {
    let cookieResponse = await fetch(process.env.REACT_APP_BACKEND_URL + "/account/cookieCheck", {
        method: "POST",
        credentials: "include",
    });
    return await cookieResponse.json();
}
