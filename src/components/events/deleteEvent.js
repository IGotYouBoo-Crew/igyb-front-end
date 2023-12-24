async function deleteEvent(event) {
	let result = await fetch(
		process.env.REACT_APP_BACKEND_URL +
			"/events/" +
			event._id +
			"/" +
			event.author._id,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		}
	);

	let deletedEvent = await result.json();

	return deletedEvent;
}

module.exports = { deleteEvent };
