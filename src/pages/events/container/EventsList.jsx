import React, { useEffect, useState } from 'react'
import EventCard from '../../../components/events/EventCard';


const backendURL = process.env.REACT_APP_BACKEND_URL;

const EventsList = () => {

  let [listOfEvents, setListOfEvents] = useState([]);

  useEffect(() => {
      getAllEvents()
  }, []);
  
  async function getAllEvents() {
      let response = await fetch(backendURL + "/events/", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          credentials: "include",
      });
      
      const responseData = await response.json();
  
      console.log(responseData);
      setListOfEvents(responseData);
      return responseData;
  }

  return (
    <section className='-mt-1 px-6 md:px-20 lg:px-36 py-10 bg-indigo rounded-b-3xl relative'>
        <div className='flex flex-col gap-y-7 md:gap-y-9 lg:gap-y-12'>
            {
                listOfEvents ?
                listOfEvents.map((event, index) => {
                    return (
                        <EventCard 
                            eventData={event} 
                            key={index} 
                            className='w-full' 
                        />
                    )
                })
                :
                ""
            }
//         </div>
//         <button className='mx-auto flex items-center gap-x-2 font-bold text-white border-2 border-white px-10 py-2 mt-12 mb-3 rounded-3xl uppercase'>
//             Load more
//         </button>

//     </section>
  )
}

export default EventsList;