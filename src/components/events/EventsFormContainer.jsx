import React, { useState } from 'react'
import EventForm from './EventForm'

const EventsFormContainer = () => {
  const [showEventForm, setShowEventForm] = useState(false);

    return (
      <div className="flex flex-col ">
        <h2 className='text-center md:text-right mt-10 md:mt-6 font-bold uppercase '>Got an upcoming event?</h2>
        <button 
          className='bg-honey text-white font-bold rounded-3xl px-6 py-2 mt-2 uppercase ' 
          onClick={() => setShowEventForm(true)}>
          Create an Event
        </button>
        <EventForm 
          isVisible={showEventForm}
          onClose={() => setShowEventForm(false)} 
        >
          <div></div>
        </EventForm>
      </div>
      

    )
}

export default EventsFormContainer;