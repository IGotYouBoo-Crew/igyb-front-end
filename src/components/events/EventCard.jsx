import React from 'react'
import { NavLink } from 'react-router-dom'

import { images } from '../../constants'

const EventCard = ({className, eventData}) => {
  return (
    <NavLink
        to={"/events/" + eventData._id}
        className={`flex justify-between rounded-3xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white text-honey ${className}`}
    >
        <div className='py-3 px-5 md:py-5 md:px-7 lg:py-7 lg:px-9 flex flex-col justify-between'>
            <div>
                <h2 className='font-bold text-lg md:text-2xl lg:text-3xl'>{eventData.title}</h2>
                <p className='text-xs mt-2 md:text-base lg:text-lg'>
                    {eventData.caption}
                </p>
            </div>
            <div className='mt-5 flex flex-wrap justify-between items-center gap-x-2 text-gray-400'>
                <div className='flex items-center justify-between'>
                    <img src={images.PostProfile1} alt="event 1 author" className='rounded-full h-8 mr-1' />
                    <h4 className='italic text-xs'>By {eventData.title || "Placeholder Event"} (@{eventData.author.username || "placeholderUser"})</h4>
                </div>
                <h4 className='italic font-bold text-xs mt-4 md:mt-0'>{eventData.date}</h4>
            </div>
        </div>
        <img src={eventData.photo} alt="title" className='w-1/2 object-cover h-auto'/>
    </NavLink>
  )
}

export default EventCard