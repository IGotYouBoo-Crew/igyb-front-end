async function createPost(title, image, content) {
    console.log(title, image, content);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/posts/newPost",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title, 
                image: image, 
                content: content}),
        }
    );

    let post = await result.json();

    console.log(post);

    return post;

}

module.exports = {createPost};