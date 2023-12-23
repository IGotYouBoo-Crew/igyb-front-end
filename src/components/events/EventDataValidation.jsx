import validator from 'validator'

/**
 * Checks title exists and is not too long
 * @date 24/12/2023 - 08:55:47
 *
 * @export
 * @param {String} title
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function titleCheckFailed(title) {
    let response = false;
    let titleRequirements = [
        {
            errorMessage: "Title is too long (max characters: 50)",
            test: title.length < 50,
        },
    ];
    for (const requirement of titleRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}

/**
 * Checks host exists and is not too long
 * @date 24/12/2023 - 08:55:47
 *
 * @export
 * @param {String} host
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function hostCheckFailed(host) {
    let response = false;
    let hostRequirements = [
        {
            errorMessage: "Host name is too long (max characters: 50)",
            test: host.length < 50,
        },
    ];
    for (const requirement of hostRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}

/**
 * Checks image exists and is a valid URL
 * @date 24/12/2023 - 08:55:47
 *
 * @export
 * @param {String} image
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function imageCheckFailed(image) {
    let response = false;
    let imageRequirements = [
        {
            errorMessage: "image must be a valid URL",
            test: validator.isURL(image)
        },
    ];
    for (const requirement of imageRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}


/**
 * Checks ticketLink exists and is a valid URL
 * @date 24/12/2023 - 08:55:47
 *
 * @export
 * @param {String} ticketLink
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function ticketLinkCheckFailed(ticketLink) {
    let response = false;
    let ticketLinkRequirements = [
        {
            errorMessage: "ticketLink must be a valid URL",
            test: validator.isURL(ticketLink)
        },
    ];
    for (const requirement of ticketLinkRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}
