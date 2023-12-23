/**
 * Description placeholder
 * 
 * @export
 * @async
 * @param {*} desc 
 * @param {*} commentData {Object} 
 * @returns {JSON} responseData
 */
async function updateComment(desc, commentData) {

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/comments/" + commentData._id + "/" + commentData.author._id,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                desc: desc
            }),
        }
    );

    let updatedComment = await result.json();

    return updatedComment;

}

module.exports = {updateComment};