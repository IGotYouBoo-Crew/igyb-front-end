async function createEvent(title, host, image, eventDate, start, finish, ticketLink, content) {
    console.log(title, host, image, eventDate, start, finish, ticketLink, content);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/events",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                title: title, 
                host: host, 
                image: image, 
                date: eventDate, 
                start: start,
                finish: finish,
                ticketLink: ticketLink,
                content: content
            }),
        }
    );

    let event = await result.json();

    console.log(event);

    return event;

}

module.exports = {createEvent};
