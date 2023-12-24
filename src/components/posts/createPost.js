/**
 * POST route for new forum post creation
 * @date 24/12/2023 - 10:54:14
 *
 * @async
 * @param {{title:String, photo:String, caption:String, body:String}}
 * @returns {post}
 */
async function createPost(title, photo, caption, body) {
    let result = await fetch(process.env.REACT_APP_BACKEND_URL + "/posts/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            title: title,
            photo: photo,
            caption: caption,
            body: body,
        }),
    });

    let post = await result.json();

    return post;
}

module.exports = { createPost };
