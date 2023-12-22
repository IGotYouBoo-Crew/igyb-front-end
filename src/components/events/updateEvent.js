async function updateEvent(host, image, title, date, start, finish, ticketLink, content) {
    console.log(host, image, title, date, start, finish, ticketLink, content);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/events/" + event._id + "/" + event.author._id,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                host: host, 
                image: image, 
                title: title, 
                date: eventDate, 
                start: start,
                finish: finish,
                ticketLink: ticketLink,
                content: content
            }),
        }
    );

    let updatedEvent = await result.json();

    console.log(updatedEvent);

    return updatedEvent;

}

module.exports = {updateEvent};