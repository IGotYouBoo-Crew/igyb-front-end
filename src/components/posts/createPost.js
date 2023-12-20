async function createPost(title, photo, caption, body) {
    console.log(title, photo, caption, body);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/posts/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                title: title, 
                photo: photo,
                caption: caption, 
                body: body}),
        }
    );

    let post = await result.json();

    console.log(post);

    return post;

}

module.exports = {createPost};