
async function deleteEvent(event) {
    console.log(event);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/events/" + event._id + "/" + event.author._id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        }
    );

    let deletedEvent = await result.json();

    console.log(deletedEvent);

    return deletedEvent;

}

module.exports = {deleteEvent};