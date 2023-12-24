/**
 * POST route for new comment creation
 * @date 24/12/2023 - 11:06:21
 *
 * @async
 * @param {{desc:String, parentPostId}}
 * @returns {comment}
 */
async function createComment(desc, parentPostId) {
    let result = await fetch(process.env.REACT_APP_BACKEND_URL + "/comments/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            desc: desc,
            parentPostId: parentPostId,
        }),
    });

    let post = await result.json();

    return post;
}

module.exports = { createComment };
