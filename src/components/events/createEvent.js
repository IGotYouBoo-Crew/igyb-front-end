async function createEvent(title, date, content) {
    console.log(title, date, content);

    let result = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/events/newEvent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title: title, date: date, content: content}),
        }
    );

    let event = await result.json();

    console.log(event);

    return event;

}

module.exports = {createEvent};