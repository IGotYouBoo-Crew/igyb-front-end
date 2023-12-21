/**
 * Description placeholder
 * @date 21/12/2023 - 13:08:29
 *
 * @async
 * @param {*} commentData
 * @returns {JSON}
 */
async function deleteComment(commentData) {
    console.log(commentData);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/comments/" + commentData._id + "/" + commentData.author._id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        }
    );

    let deletedComment = await result.json();

    console.log(deletedComment);

    return deletedComment;

}

module.exports = {deleteComment};