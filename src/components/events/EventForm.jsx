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

        <div className="p-6 lg:p-8 bg-honey text-white rounded-3xl">
            <div className="flex justify-items-end"> 
                <button 
                    className="text-white text-xl text-bold" 
                    onClick={() => onClose()}
                >
                    X
                </button>
            </div>
            <h1 className="mt-2 font-bold text-2xl md:text-3xl text-center ">
                ENTER YOUR EVENT DETAILS
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col py-5">
                <label></label>
                <input 
                    type="text" 
                    name="titleInput" 
                    id="titleInput" 
                    placeholder="EVENT TITLE*"
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                    className="placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" 
                />

                <label></label>
                <input 
                    type="text" 
                    name="dateInput" 
                    id="dateInput" 
                    placeholder="EVENT DATE (DD/MM/YYY)*"
                    value={date} 
                    onChange={(event) => setDate(event.target.value)} 
                    className="placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" 
                />

                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                    label="EVENT DATE (MM/DD/YYY)*"
                    className="bg-white label:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" 
                    />
                </LocalizationProvider> */}

                <label></label>
                <input 
                    type="text" 
                    name="contentInput" 
                    id="contentInput" 
                    placeholder="WRITE A SHORT DESCRIPTION OF YOUR EVENT*"
                    value={content} 
                    onChange={(event) => setContent(event.target.value)} 
                    className="placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" 

                />
                        
                <button 
                    type="submit"
                    className="border border-white rounded-3xl px-5 py-2 text-white text-sm md:text-base" 
                >
                    SUBMIT
                </button>
            </form>
        </div>
    </div>
  );
};

export default EventForm
