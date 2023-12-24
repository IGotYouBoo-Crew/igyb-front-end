/**
 * DELETE route for comment 
 * @date 21/12/2023 - 13:08:29
 *
 * @async
 * @param {commentData} 
 * @returns {JSON message}
 */
async function deleteComment(commentData) {
  let result = await fetch(
    process.env.REACT_APP_BACKEND_URL +
      "/comments/" +
      commentData._id +
      "/" +
      commentData.author._id,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  let deletedComment = await result.json();

  return deletedComment;
}

module.exports = { deleteComment };
