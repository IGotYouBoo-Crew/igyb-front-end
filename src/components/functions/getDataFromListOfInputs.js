/**
 * Description placeholder
 * @date 20/12/2023 - 23:09:21
 *
 * @export
 * @param {List} inputNames
 * @returns Object: key=inputName value=document.getElementByName[0].value
 */
export default function getDataFromListOfInputs(inputNames) {

    // inputNames.forEach((inputName) => {
    //     formData[inputName] = document.getElementsByName(inputName)[0].value;
    // });
    let formData = {};
        inputNames.forEach((inputName) => {
            let checkValue = document.getElementsByName(inputName);
            if (checkValue.length > 0 && checkValue[0].value) {
                formData[inputName] = checkValue[0].value;
            }
        });
    return formData
}
