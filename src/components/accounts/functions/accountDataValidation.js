
/**
 * Description placeholder
 * @date 21/12/2023 - 11:04:19
 *
 * @export
 * @param {String} password
 * @returns {boolean}
 */
export function passwordCheckFailed(password) {
    let response = false;
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
            // setError(requirement.errorMessage);
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}


/**
 * Description placeholder
 * @date 21/12/2023 - 11:04:37
 *
 * @export
 * @param {*} email
 * @returns {boolean}
 */
export function emailCheckFailed(email) {
    let emailRequirements = [
        {
            errorMessage: "Valid email address is required",
            test: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email),
        }
    ];
    let response = false;
    for (const requirement of emailRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}

export function usernameCheckFailed(username){
    
}