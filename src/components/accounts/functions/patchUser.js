

/**
 * Description placeholder
 * @date 20/12/2023 - 23:41:31
 *
 * @export
 * @async
 * @param accountData {Object}
 * @param formData {Object}
 * @returns {JSON} responseData
 */
export default async function patchUser(accountData, formData, ) {
    let response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/account/" + accountData._id,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),
        }
    );
    return await response.json();
}