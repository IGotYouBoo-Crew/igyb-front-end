export default async function updateEvent(updatedEventData, currentEventData) {
	let result = await fetch(
		process.env.REACT_APP_BACKEND_URL +
			"/events/" +
			currentEventData._id +
			"/" +
			currentEventData.author._id,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(updatedEventData),
		}
	);

	let updatedEvent = await result.json();

	return updatedEvent;
}
