import React, { useState } from 'react'
import EventForm from './EventForm'

const EventsFormContainer = () => {
  const [showEventForm, setShowEventForm] = useState(false);

    return (
      <div className="flex flex-col">
        <h2 className='text-center md:text-right mt-10 md:mt-6 font-bold'>GOT AN UPCOMING EVENT?</h2>
        <button 
          className='bg-honey text-white rounded-3xl px-6 py-2 mt-2' 
          onClick={() => setShowEventForm(true)}>
          CREATE AN EVENT
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