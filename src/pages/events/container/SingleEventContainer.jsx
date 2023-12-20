import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../../components/BreadCrumbs';


const breadCrumbsData = [
    {name: "Home", link: '/'},
    {name: "Events", link: '/events'}
]

const backendURL = process.env.REACT_APP_BACKEND_URL;

const SingleEventContainer = () => {

    let [event, setEvent] = useState("");
    let urlEventId = window.location.pathname.split("/")[2]
    console.log(urlEventId)
  
    useEffect(() => {
        getEvent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getEvent() {
        let response = await fetch(backendURL + "/events/" + urlEventId , {
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
        <section className='flex-1 bg-indigo rounded-3xl relative flex flex-col px-6 py-2'>
              <BreadCrumbs data={breadCrumbsData}/>
              {event ?
              <>
              <div className='lg:flex lg:flex-row-reverse lg:justify-between md:px-20 lg:px-12 lg:pb-10'>
              <h4 className='text-sm font-bold text-white opacity-70 md:px-20 lg:px-12 lg:mt-4'>Event created by @{event.author.username || " one of our Superstars!"}</h4>
              <h4 className='text-sm text-white opacity-70 md:px-20 lg:px-12 '>Happening: {event.date}</h4>
                <img src={event.image} alt="event title" className='rounded-3xl mt-2 w-full h-auto object-cover lg:w-1/2' />
                <div className='text-white mt-6 text-center lg:text-left'>
                  <h1 className='text-2xl font-bold md:text-3xl capitalize'>{event.title}</h1>
                  <div className='text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3'>
                    <p>
                      {event.content}
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-end text-white text-xs md:text-base pt-2 pb-10 px-5 md:px-20 lg:px-12'>
                  <button className='border-2 border-white rounded-3xl px-7 md:px-10 py-1 uppercase'>
                    Next event
                  </button>
              </div>
              </>
              : "We're either busy loading the event data, or it doesn't exist... Hang tight!"}
            </section>
      )
}

export default SingleEventContainer;