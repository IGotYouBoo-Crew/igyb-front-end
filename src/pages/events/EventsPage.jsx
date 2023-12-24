import React from "react";

import MainLayout from "../../components/MainLayout";
import EventsHero from "./container/EventsHero";
import EventsList from "./container/EventsList";

const EventsPage = () => {
	return (
		<MainLayout>
			<section>
				<EventsHero />
				<EventsList />
			</section>
		</MainLayout>
	);
};

export default EventsPage;
