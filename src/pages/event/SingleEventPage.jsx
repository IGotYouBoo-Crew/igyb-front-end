import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import SingleEventContainer from "./container/SingleEventContainer";
import checkErrorInResponse from "../../components/functions/checkErrorInResponse";
import ErrorMessage from "../../components/ErrorMessage";
import { NavLink } from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_URL;

const SingleEventPage = () => {
	let [event, setEvent] = useState("");
	let urlEventId = window.location.pathname.split("/")[2];

	useEffect(() => {
		getEvent();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function getEvent() {
		let response = await fetch(backendURL + "/events/" + urlEventId, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		const responseData = await response.json();

		if (checkErrorInResponse(responseData)) {
			// setError(responseData.errors);
			return;
		}
		setEvent(responseData);
		return responseData;
	}

	return (
		<MainLayout>
			<section>
				{event ? (
					<SingleEventContainer event={event} />
				) : (
					<div className="bg-indigo p-3 rounded-2xl relative z-10 flex justify-center text-center mt-2 h-[60vh] ">
						<div className="py-6 ">
							<ErrorMessage error="We're either busy loading the event, or it doesn't exist..." />
							<NavLink to="/events">
								<button className="rounded-3xl px-3 py-2 bg-white text-indigo">
									Back to Events
								</button>
							</NavLink>
						</div>
					</div>
				)}
			</section>
		</MainLayout>
	);
};

export default SingleEventPage;
