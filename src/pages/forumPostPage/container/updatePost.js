/**
 * PATCH route for updating an existing post
 *
 * @export
 * @async
 * @param {{title:String, photo:String, caption:String, body:String}}
 * @returns {updatedPost} responseData
 */
async function updatePost(title, caption, body, photo, post) {
  let result = await fetch(
    process.env.REACT_APP_BACKEND_URL +
      "/posts/" +
      post._id +
      "/" +
      post.author._id,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: title,
        caption: caption,
        body: body,
        photo: photo,
      }),
    }
  );

  let updatedPost = await result.json();

  return updatedPost;
}

module.exports = { updatePost };
