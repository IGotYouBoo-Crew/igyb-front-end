/**
 * DELETE route for forum post
 * @date 21/12/2023 - 13:08:29
 *
 * @async
 * @param {post}
 * @returns {JSON message}
 */
async function deletePost(post) {
    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL +
            "/posts/" +
            post._id +
            "/" +
            post.author._id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }
    );

    let deletedPost = await result.json();

    return deletedPost;
}

module.exports = { deletePost };
