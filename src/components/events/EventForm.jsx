import React, { useState } from 'react'
import { createEvent } from './createEvent';

const EventForm = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
//     const [host, setHost] = useState("");
//     const [image, setImage] = useState("");
//     const [start, setStart] = useState("");
//     const [finish, setFinish] = useState("");
//     const [ticketLink, setTicketLink] = useState("");
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="Event text-sea">
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
                
        <button onClick={() => {createEvent(title, date, content)}}>
            SUBMIT
        </button>
      </div>
    </form>
  );
};

export default EventForm
