import React, { useState } from 'react';
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { createEvent } from './createEvent';


const EventForm = ({ isVisible, onClose }) => {
    const [host, setHost] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [start, setStart] = useState("");
    const [finish, setFinish] = useState("");
    const [ticketLink, setTicketLink] = useState("");
    const [content, setContent] = useState("");
    
    const handleClose = (event) => {
        if (event.target.id === 'eventForm') onClose();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Need to add validation for form fields

        try {
            await createEvent(host, image, title, date, start, finish, ticketLink, content);

            // Clear the form fields after submission
            setHost('');
            setImage('');
            setTitle('');
            setDate('');
            setStart('');
            setFinish('');
            setTicketLink('');
            setContent('');

            onClose();
        } catch (error) {
            console.log('Looks like we have a problem:', error);
        }
    };
    
  if (!isVisible) return null;
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
        id="eventForm"
        onClick={handleClose}
    >
        <div className="max-h-[83vh] mt-20 overflow-y-auto pt-2 px-6 lg:p-8 w-3/4 md:w-2/3 md:mt-14 lg:mt-16 lg:py-3 lg:px-10 bg-honey text-white rounded-3xl">
            <div className="text-right"> 
                <button 
                    className="text-white text-xl text-bold" 
                    onClick={() => onClose()}
                >
                    X
                </button>
            </div>
            <h1 className="mt-2 font-bold text-2xl md:text-3xl text-center uppercase">
                Enter your event details
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col py-2 items-center">
                <label></label>
                <input 
                    type="text" 
                    name="hostInput" 
                    placeholder="Host/business name*"
                    value={host} 
                    onChange={(event) => setHost(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />

                <label></label>
                <input 
                    type="text" 
                    name="imageInput" 
                    id="imageInput" 
                    placeholder="Cover image url"
                    value={image} 
                    onChange={(event) => setImage(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />

                <label></label>
                <input 
                    type="text" 
                    placeholder="Event title*"
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />

                <label></label>
                <input 
                    type="text" 
                    name="dateInput" 
                    id="dateInput" 
                    placeholder="Event Date (YYYY/MM/DD)*"
                    value={date} 
                    onChange={(event) => setDate(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />

{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker 
    label="EVENT DATE (MM/DD/YYY)*"
    className="bg-white label:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline" 
    />
</LocalizationProvider> */}

                <label></label>
                <input 
                    type="text" 
                    name="startInput" 
                    id="startInput" 
                    placeholder="Start time (HH:MM, 24hr)*"
                    value={start} 
                    onChange={(event) => setStart(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />    

                <label></label>
                <input 
                    type="text" 
                    name="finishInput" 
                    id="finishInput" 
                    placeholder="Finish time (HH:MM, 24hr)*"
                    value={finish} 
                    onChange={(event) => setFinish(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />    

                <label></label>
                <input 
                    type="text" 
                    name="ticketLinkInput" 
                    id="ticketLinkInput" 
                    placeholder="Tickets/RSVP link"
                    value={ticketLink} 
                    onChange={(event) => setTicketLink(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />    

                <label></label>
                <textarea 
                    type="text" 
                    name="contentInput" 
                    id="contentInput" 
                    rows="5"
                    placeholder="Write a short description of your event*"
                    value={content} 
                    onChange={(event) => setContent(event.target.value)} 
                    className="block placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-background w-full uppercase" 
                />
                        
                <button 
                    type="submit"
                    className="border border-white rounded-3xl px-5 py-2 m-4 w-32 text-white text-sm md:text-base uppercase" 
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
};

export default EventForm
