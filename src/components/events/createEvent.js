async function createEvent(host, image, title, date, start, finish, ticketLink, content) {
    console.log(host, image, title, date, start, finish, ticketLink, content);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/events",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                host: host, 
                image: image, 
                title: title, 
                date: date, 
                start: start,
                finish: finish,
                ticketLink: ticketLink,
                content: content}),
        }
    );

    let event = await result.json();

    console.log(event);

    return event;

}

module.exports = {createEvent};
