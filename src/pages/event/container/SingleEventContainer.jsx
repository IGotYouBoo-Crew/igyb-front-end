import React, { useContext, useState } from "react";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { FiEdit2, FiTrash } from "react-icons/fi";
import UpdateEventForm from "../../../components/events/UpdateEventForm";
import DeleteEventForm from "../../../components/events/DeleteEventForm";
import UserContext from "../../../contexts/UserContext";
import { updateEvent } from "../../../components/events/updateEvent";

const SingleEventContainer = ({ event }) => {
  let { userData } = useContext(UserContext);
  console.log(event.author);
  const eventBelongsToUser = event && userData.username === event.author.username;
  const [affectedEvent, setAffectedEvent] = useState({});

  const isEditing =
    affectedEvent &&
    affectedEvent.type === "editing" &&
    affectedEvent._id === event._id;
  const isDeleting =
    affectedEvent &&
    affectedEvent.type === "deleting" &&
    affectedEvent._id === event._id;

  const handleSubmit = async function (title, host, image, start, finish, ticketLink, content) {
    await updateEvent(title, host, image, start, finish, ticketLink, content);
    setAffectedEvent(null);
  };

  const handleDelete = async function () {
    await deleteEvent(event);
    setAffectedEvent(null);
  };

  const breadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: event.title, link: `/events/${event._id}` },
  ];

  return (
    <div>
      <section className="flex-1 bg-indigo rounded-3xl relative flex flex-col pb-5 px-8 text-center text-white ">
        <BreadCrumbs data={breadCrumbsData} />
        {event ? (
          <>
            <div className="text-white text-lg flex items-center gap-x-5 mt-3 justify-end md:px-20 lg:px-12 relative z-20">
              {eventBelongsToUser && (
                <>
                  <button
                    className="flex items-center space-x-2"
                    onClick={() =>
                      setAffectedEvent({ type: "editing", _id: event._id })
                    }
                  >
                    <FiEdit2 className="w-7 md:w-5 h-auto" />
                    <span className="hidden md:block">Edit</span>
                  </button>
                  <button
                    className="flex items-center space-x-2"
                    onClick={() =>
                      setAffectedEvent({ type: "deleting", _id: event._id })
                    }
                  >
                    <FiTrash className="w-7 md:w-5 h-auto" />
                    <span className="hidden md:block">Delete</span>
                  </button>
                </>
              )}
            </div>

            {!isEditing && !isDeleting && (
              <div className="text-white lg:flex lg:flex-row-reverse lg:justify-between md:px-20 lg:px-12 lg:pb-10 ">
                <img
                  src={event.image}
                  alt="event title"
                  className="rounded-3xl mt-2 w-full h-auto object-cover md:mx-2 lg:w-3/5 "
                />
                <div className="mt-6 text-center lg:text-left ">
                  <h1 className="text-3xl font-bold lg:text-4xl pt-10 lg:pt-0 capitalize ">
                    {event.title}
                  </h1>
                  <h3 className="text-md uppercase ">{event.date}</h3>
                  <h3 className="text-md uppercase ">
                    {event.start} - {event.finish}
                  </h3>
                  <h3 className="text-xs ">
                    {"(pssst: don't forget those times are in 24hr format!)"}
                  </h3>
                  <div className="mt-6 text-center lg:text-left ">
                    <div className="text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3 ">
                      <p>{event.content}</p>
                      <h4 className="text-sm font-bold opacity-70 md:px-20 lg:px-12 mt-4 ">
                        Event created by @
                        {event.author.username || " one of our Superstars!"}
                      </h4>
                    </div>
                  </div>
                </div>
                <div>
                  {event.ticketLink ? (
                    <a target="_blank" href={event.ticketLink} rel="noreferrer">
                      <button className="bg-white text-indigo font-bold rounded-3xl px-6 py-2 my-5 uppercase ">
                        Tickets/RSVP
                      </button>
                    </a>
                  ) : null}
                </div>
              </div>
            )}
            {isEditing && (
              <UpdateEventForm
                formSubmitHandler={(title, host, image, start, finish, ticketLink, content) =>
                  handleSubmit(title, host, image, start, finish, ticketLink, content)}
                formCancelHandler={() => setAffectedEvent(null)}
                event={event}
                titleInitialText={event.title}
                hostInitialText={event.host}
                imageInitialText={event.image}
                startInitialText={event.start}
                finishInitialText={event.finish}
                ticketLinkInitialText={event.ticketLink}
                contentInitialText={event.content}
              />
            )}
            {isDeleting && (
              <DeleteEventForm
                formSubmitHandler={() => handleDelete()}
                formCancelHandler={() => setAffectedEvent(null)}
              />
            )}
          </>
        ) : (
          "We're either busy loading the event, or it doesn't exist... Hang tight, Superstar!"
        )}
      </section>
    </div>
  );
};

//           <section className="text-center lg:flex lg:flex-row-reverse lg:justify-between items-center lg:items-start lg:text-left lg:pb-10 lg:px-12 ">
//             <img
//             src={event.image}
//             alt="event title"
//             className="rounded-3xl mt-2 lg:mt-4 object-cover w-full h-auto lg:w-1/2 items-center "/>
//             <div className="mt-6 text-center lg:text-left ">
//               <h1 className="text-3xl font-bold lg:text-4xl pt-10 lg:pt-0 capitalize ">{event.title}</h1>
//               <h3 className="text-md uppercase ">{event.date}</h3>
//               <h3 className="text-md uppercase ">{event.start} - {event.finish}</h3>
//               <h3 className="text-xs ">{"(pssst: don't forget those times are in 24hr format!)"}</h3>
//               <div className= "mt-6 text-center lg:text-left ">
//                 <div className="text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3 ">
//                   <p>{event.content}</p>
//                   <h4 className="text-sm font-bold opacity-70 md:px-20 lg:px-12 mt-4 ">Event created by @{event.author.username || " one of our Superstars!"}</h4>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {event.ticketLink ? (
//               <a target="_blank" href={event.ticketLink} rel="noreferrer">
//                 <button  className="bg-white text-indigo font-bold rounded-3xl px-6 py-2 my-5 uppercase ">
//                     Tickets/RSVP
//                 </button>
//               </a>
//           ) : null}
//         </>
//       ) : (

//       )}
//     </section>
//   );
// };

export default SingleEventContainer;
