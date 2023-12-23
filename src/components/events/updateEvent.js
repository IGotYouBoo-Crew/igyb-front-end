async function updateEvent(title, host, image, start, finish, ticketLink, content, event) {
    console.log(title, host, image, start, finish, ticketLink, content, event);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/events/" + event._id + "/" + event.author._id,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                title: title, 
                host: host, 
                image: image, 
                start: start,
                finish: finish,
                ticketLink: ticketLink,
                content: content,
                date: date
            }),
        }
    );

    let updatedEvent = await result.json();

    console.log(updatedEvent);

    return updatedEvent;

}

module.exports = {updateEvent};