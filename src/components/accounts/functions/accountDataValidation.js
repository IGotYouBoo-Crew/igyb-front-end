export function stringExists(someString, requiredField = "") {
    let response = false;
    console.log(someString === undefined || null || "");
    if (someString === undefined || null || "") {
        response = `${requiredField} is required`;
    }
    return response;
}

/**
 * Checks password passes validation.
 * @date 21/12/2023 - 11:04:19
 *
 * @export
 * @param {String} password
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function passwordCheckFailed(password) {
    let response = stringExists(password, "Password");
    if (!response) {
        console.log(response);
        let passwordRequirements = [
            {
                errorMessage: "Password length must be greater than 8",
                test: password.length > 8,
            },
            {
                errorMessage: "Password must contain at least one uppercase letter",
                test: /[A-Z]+/g.test(password),
            },
            {
                errorMessage: "Password must contain at least one number",
                test: /[0-9]/.test(password),
            },
        ];
        for (const requirement of passwordRequirements) {
            if (!requirement.test) {
                response = requirement.errorMessage;
                break;
            }
        }
    }
    return response;
}

/**
 * Checks email passes validation.
 * @date 21/12/2023 - 11:04:19
 *
 * @export
 * @param {String} email
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function emailCheckFailed(email) {
    let response = stringExists(email, "Email");
    if (!response) {
        let emailRequirements = [
            {
                errorMessage: "Valid email address is required",
                test: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email),
            },
        ];
        for (const requirement of emailRequirements) {
            if (!requirement.test) {
                response = requirement.errorMessage;
                break;
            }
        }
    }
    return response;
}

/**
 * Checks username passes validation.
 * @date 21/12/2023 - 11:04:19
 *
 * @export
 * @param {String} username
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function usernameCheckFailed(username) {
    let response = stringExists(username, "Username");
    if (!response) {
        let usernameRequirements = [
            {
                errorMessage: "Username is required",
                test: username !== (undefined || null || ""),
            },
            {
                errorMessage: "Username can be a max of 16 characters ",
                test: username.length <= 16,
            },
            {
                errorMessage: "Username cannot contain whitespace",
                test: !/\s/g.test(username),
            },
        ];
        for (const requirement of usernameRequirements) {
            if (!requirement.test) {
                response = requirement.errorMessage;
                break;
            }
        }
    }
    return response;
}
