

/**
 * Description placeholder
 * @date 21/12/2023 - 01:53:57
 *
 * @export
 * @param {responseData} Object
 * @returns {responseData.errors} Object
 */
export default function checkErrorInResponse(responseData) {
    if (responseData.errors) {
        if (responseData.errors.includes("E11000")) {
            let key = responseData.errors.split("key: {")[1].split(":")[0];
            responseData.errors = `The ${key} entered is already associated with an account. \nPlease log in to the account, or try another ${key}`;
        }
        return responseData.errors;
    } else {
        return false;
    }
}
