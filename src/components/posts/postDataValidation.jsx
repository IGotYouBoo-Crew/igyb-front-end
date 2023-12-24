import validator from "validator";

/**
 * Checks title exists and is not too long
 * @date 23/12/2023 - 15:04:47
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
 * Checks photo exists and is a valid URL
 * @date 23/12/2023 - 15:04:47
 *
 * @export
 * @param {String} photo
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function photoCheckFailed(photo) {
    let response = false;
    let photoRequirements = [
        {
            errorMessage: "Photo must be a valid URL",
            test: validator.isURL(photo),
        },
    ];
    for (const requirement of photoRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}

/**
 * Checks caption exists and is a valid URL
 * @date 23/12/2023 - 15:04:47
 *
 * @export
 * @param {String} caption
 * @returns {boolean|errorMessage} returns false on pass, string on fail
 */
export function captionCheckFailed(caption) {
    let response = false;
    let captionRequirements = [
        {
            errorMessage: "Caption is too long (max characters: 150)",
            test: caption.length < 150,
        },
    ];
    for (const requirement of captionRequirements) {
        if (!requirement.test) {
            response = requirement.errorMessage;
            break;
        }
    }
    return response;
}
