import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { IoClose } from "react-icons/io5";
import { NavLink, Navigate } from 'react-router-dom';

import { createEvent } from "./createEvent";
import UserContext from "../../contexts/UserContext";
import ErrorMessage from '../ErrorMessage';
import { titleCheckFailed, hostCheckFailed, imageCheckFailed, ticketLinkCheckFailed } from "./EventDataValidation";


const EventForm = ({ isVisible, onClose }) => {
  const [title, setTitle] = useState("");
  const [host, setHost] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [ticketLink, setTicketLink] = useState("");
  const [content, setContent] = useState("");

  const [route, setRoute] = useState("");
  let { userData } = useContext(UserContext);
  let [error, setError] = useState(false);


  const handleClose = (event) => {
    if (event.target.id === "eventForm") onClose();
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    let validationError =
        titleCheckFailed(title) ||
        hostCheckFailed(host) ||
        imageCheckFailed(image) ||
        date ||
        start ||
        finish ||
        ticketLinkCheckFailed(ticketLink) ||
        content;

    if (validationError) {
        setError(validationError);
        return;
    } else if (!title) {
        setError("Title is required*")
    } else if (!host) {
        setError("a Host is required*")
    } else if (!image) {
        setError("Image is required*")
    } else if (!date) {
        setError("We need a date for this event!")
    } else if (!start) {
        setError("What time is it starting?")
    } else if (!finish) {
        setError("What time should it finish up?")
    } else if (!content) {
        setError("Please give us some more deets about this in content!")
    } else {

    try {
      let eventDate = date.startDate;

      let createdEvent =
      await createEvent(
        title,
        host,
        image,
        eventDate,
        start,
        finish,
        ticketLink,
        content
      );

      setRoute("/forum/" + createdEvent._id);

      // Clear the form fields after submission
      setTitle("");
      setHost("");
      setImage("");
      setDate("");
      setStart("");
      setFinish("");
      setTicketLink("");
      setContent("");

      onClose();
        } catch (error) {
        console.log("Looks like we have a problem:", error);
        }
    };
    };

  if (!isVisible) return null;
  return (
    <>
    {userData ? 

    <div
      className="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center "
      id="eventForm"
      onClick={handleClose}
    >
        <div className="pt-2 px-6 bg-honey text-white w-3/4 md:w-2/3 mt-16 md:mt-24 lg:mt-16 lg:py-3 lg:px-10 rounded-3xl max-h-[83vh] overflow-y-auto">
        <div className="text-right ">
          <button
            className="text-white text-2xl mt-2 lg:mt-3 "
            onClick={() => onClose()}
          >
                <IoClose />
          </button>
        </div>
        <h1 className="mt-2 font-bold text-2xl md:text-3xl text-center uppercase ">
          Enter your event details
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col py-2 items-center ">

        <div className='w-full lg:flex lg:justify-between lg:gap-x-4'>
          <input
            type="text"
            name="titleInput" 
            id="titleInput" 
            placeholder="Event title*"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="formInputHalf "
          />

          <input
            type="text"
            name="hostInput"
            id="hostInput"
            placeholder="Host/business name*"
            value={host}
            onChange={(event) => setHost(event.target.value)}
            className="formInputHalf "
          />
          </div>

          <div className='w-full lg:flex lg:justify-between lg:gap-x-4'>
          <input
            type="text"
            name="startInput"
            id="startInput"
            placeholder="Start time (HH:MM, 24hr)*"
            value={start}
            onChange={(event) => setStart(event.target.value)}
            className="formInputHalf "
          />

          <input
            type="text"
            name="finishInput"
            id="finishInput"
            placeholder="Finish time (HH:MM, 24hr)*"
            value={finish}
            onChange={(event) => setFinish(event.target.value)}
            className="formInputHalf "
          />
          </div>

          <input
            type="text"
            name="imageInput"
            id="imageInput"
            placeholder="Cover image url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="formInput "
          />


          <input
            type="text"
            name="ticketLinkInput"
            id="ticketLinkInput"
            placeholder="Tickets/RSVP link"
            value={ticketLink}
            onChange={(event) => setTicketLink(event.target.value)}
            className="formInput "
          />

          <textarea
            type="text"
            name="contentInput"
            id="contentInput"
            rows="5"
            placeholder="Write a short description of your event*"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="formContentInput "
          />

          <div className="">
            <Datepicker
              primaryColor={"amber"}
              asSingle={true}
              readOnly={true}
              placeholder={"EVENT DATE*"}
              value={date}
              onChange={(chosenDate) => {
                setDate(chosenDate);
              }}
            />
            <h1 className="my-2 font-bold text-base md:text-lg text-center uppercase ">
                careful: You won't be able to edit this date later!
            </h1>
        
          </div>

          <ErrorMessage error={error} 
            className="mt-2 text-lg"
          />

          <button type="submit" className="buttonSubmit ">
            Submit
          </button>
          {route ? <Navigate to={route}/> : ""}
        </form>
      </div>
    </div>
    :
    <NavLink to="/sign-in" className="underline text-center uppercase mt-2 font-bold ">
        Please sign in for this
    </NavLink>
    } </>
  );
};

export default EventForm;
