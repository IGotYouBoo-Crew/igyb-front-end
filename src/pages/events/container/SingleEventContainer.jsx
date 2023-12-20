import React, { useEffect, useState } from "react";

const backendURL = process.env.REACT_APP_BACKEND_URL;

const SingleEventContainer = () => {
  let [event, setEvent] = useState("");
  let urlEventId = window.location.pathname.split("/")[2];
  console.log(urlEventId);

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

    console.log(responseData);
    setEvent(responseData);
    return responseData;
  }

  return (
    <section className="flex-1 bg-indigo rounded-3xl relative flex flex-col pb-5 px-8 text-center text-white">
      {event ? (
        <>
          <section className="text-center lg:flex-row-reverse lg:justify-between items-center lg:items-start lg:text-left lg:pb-10 lg:px-12">
            <img
            src={event.image}
            alt="event image"
            className="rounded-3xl mt-2 object-cover w-full h-auto lg:w-1/2"/>
            <div className="mt-6 text-center lg:text-left">
              <h1 className="text-3xl font-bold lg:text-4xl pt-10 capitalize">{event.title}</h1>
              <h3 className="text-md text-white uppercase">{event.date}</h3>
              <h3 className="text-md text-white uppercase">{event.start} - {event.finish}</h3>
              <div className="text-white mt-6 text-center lg:text-left">
                <div className="text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3">
                  <p>{event.content}</p>
                  <h4 className="text-sm font-bold text-white opacity-70 md:px-20 lg:px-12 mt-4">Event created by @{event.author.username || " one of our Superstars!"}</h4>
                </div>
              </div>
            </div>
          </section>
          {event.ticketLink ? (
              <a target="_blank"href={event.ticketLink}>
                <button rel="noreferrer" className="bg-white text-indigo font-bold rounded-3xl px-6 py-2 my-5 uppercase">
                    Tickets/RSVP
                </button>
              </a>
          ) : null}
          <div className="flex flex-row justify-between text-white text-xs md:text-base pb-5 ">
            <button className="border-2 border-white font-bold rounded-3xl px-6 py-2 mt-2 uppercase">
              Previous
            </button>
            <button className="border-2 border-white font-bold rounded-3xl px-6 py-2 mt-2 uppercase">
              Next
            </button>
          </div>
        </>
      ) : (
        "We're either busy loading the event, or it doesn't exist... Hang tight, Superstar!"
      )}
    </section>
  );
};

export default SingleEventContainer;
