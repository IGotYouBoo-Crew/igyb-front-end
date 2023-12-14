import React, { useState } from 'react';
import { createEvent } from './createEvent';


const EventForm = ({ isVisible, onClose }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
//     const [host, setHost] = useState("");
//     const [image, setImage] = useState("");
//     const [start, setStart] = useState("");
//     const [finish, setFinish] = useState("");
//     const [ticketLink, setTicketLink] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Need to add validation for form fields

        try {
            await createEvent(title, date, content);

            // Clear the form fields after submission
            setTitle('');
            setDate('');
            setContent('');

            onClose();
        } catch (error) {
            console.log('Looks like we have a problem:', error);
        }
    };
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center">
        <div className="">
            <button 
                className="mt-30 text-honey text-xl text-bold place-self-end" 
                onClick={() => onClose()}
            >
                X
            </button>
        </div>
        <div className="flex flex-wrap mt-50 bg-honey text-white">
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="titleInput" 
                    id="titleInput" 
                    placeholder="EVENT TITLE*"
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />

                <label>Date:</label>
                <input 
                    type="text" 
                    name="dateInput" 
                    id="dateInput" 
                    placeholder="EVENT DATE (DD/MM/YYY)*"
                    value={date} 
                    onChange={(event) => setDate(event.target.value)} 
                />

                <label>Content:</label>
                <input 
                    type="text" 
                    name="contentInput" 
                    id="contentInput" 
                    placeholder="WRITE A SHORT DESCRIPTION OF YOUR EVENT*"
                    value={content} 
                    onChange={(event) => setContent(event.target.value)} 
                />
                        
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    </div>
  );
};

export default EventForm
