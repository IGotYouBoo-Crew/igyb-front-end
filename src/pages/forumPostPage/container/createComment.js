async function createComment(desc, parentPostId) {

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/comments/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                desc: desc, 
                parentPostId: parentPostId}),
        }
    );

    let post = await result.json();

    return post;

}

module.exports = {createComment};