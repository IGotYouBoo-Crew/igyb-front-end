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
    <section className="bg-indigo bg-cover bg-center w-screen rounded-3xl relative flex flex-col pb-10 px-10 lg:px-56 text-center text-white justify-center items-center">
      {event ? (
        <>
          <section className="pb-10 lg:pb-20 text-center lg:flex-row-reverse lg:justify-between items-center lg:items-start lg:text-left">
            <div className = "">
              <img
                src={event.image}
                alt="event image"
                className="rounded-3xl mt-2 object-cover w-full h-auto lg:w-1/2"
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full lg:items-start md:px-20 lg:px-12 lg:pb-10">
              <h1 className="text-3xl font-bold lg:text-4xl py-10 capitalize">
                {event.title}
              </h1>
              <h3 className="text-lg text-white uppercase">
                Happening: {event.date}
              </h3>
              <h3 className="text-lg text-white uppercase">
                Start Time: {event.start}
              </h3>
              <h3 className="text-lg text-white uppercase">
                Finish Time: {event.finish}
              </h3>
              <div className="text-white mt-6 text-center lg:text-left">
                <div className="text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3">
                  <p>{event.content}</p>
                  <h4 className="text-sm font-bold text-white opacity-70 md:px-20 lg:px-12 lg:mt-4">
                    Event created by @
                    {event.author.username || " one of our Superstars!"}
                  </h4>
                </div>
              </div>
            </div>
          </section>
          {event.ticketLink ? (
              <a 
                target="_blank"
                href={event.ticketLink}>
              <button
                rel="noreferrer"
                className="bg-white text-indigo font-bold rounded-3xl px-6 py-2 my-10 uppercase"
                >
                Tickets/RSVP
              </button>
            </a>
          ) : null}
          <div className="flex justify-around text-white text-xs md:text-base pb-5 px-5 md:px-20 lg:px-12">
            <button className="border-2 border-white font-bold rounded-3xl px-6 py-2 mt-2 uppercase">
              Previous
            </button>
            <button className="border-2 border-white font-bold rounded-3xl px-6 py-2 mt-2 uppercase">
              Next
            </button>
          </div>
        </>
      ) : (
        "We're either busy loading the event data, or it doesn't exist... Hang tight, Superstar!"
      )}
    </section>
  );
};

export default SingleEventContainer;
