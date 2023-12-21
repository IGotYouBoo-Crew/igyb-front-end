import React from 'react'
import { NavLink } from 'react-router-dom'

import { images } from '../../constants'

const EventCard = ({className, eventData}) => {
  return (
    <NavLink
        to={"/events/" + eventData._id}
        className={`flex justify-between rounded-3xl max-h-[35vh] overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white text-honey ${className}`}
    >
        <div className="flex flex-row justify-center w-full">
        <div className="w-2/5 bg-white py-3 px-5 md:py-5 md:px-7 lg:py-7 lg:px-9 flex flex-col justify-between">
            <div>
                <h2 className="font-bold text-s mt-5 md:mt-3 uppercase">Happening: {eventData.date}</h2>
                <h1 className="font-bold text-l md:text-2xl lg:text-3xl capitalize">{eventData.title}</h1>
            </div>
            <div className="mt-5 flex flex-wrap justify-between items-center gap-x-2 text-gray-400">
                <div className="flex items-center justify-between">
                    <img src={eventData.author.photo || images.PostProfile1} alt="event 1 author" className="rounded-full h-8 mr-1" />
                    <h4 className="italic text-xs">Event created by @{eventData.author.username || " one of our Superstars!"}</h4>
                </div>
            </div>
        </div>
        <img src={eventData.image} alt="title" className="w-3/5 h-auto object-cover bg-honey"/>
        </div>
    </NavLink>
  )
}

export default EventCard