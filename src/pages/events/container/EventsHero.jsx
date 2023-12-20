

import EventsFormContainer from "../../../components/events/EventsFormContainer"
import { images } from "../../../constants"

const EventsHero = () => {
    return (
        <section className="relative">
            <img className=' relative -mt-6 w-full' src={images.EventHeader} alt="Header" />
            <div className=' -mt-6 relative bg-indigo text-white rounded-3xl flex flex-col px-10 lg:px-20 py-10 items-center md:flex-row md:items-start md:justify-between'>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className='text-center md:text-left md:mt-6 font-bold uppercase'>What's on</h2>
                    <h1 className='mt-2 font-bold text-2xl md:text-3xl text-center md:text-left uppercase'>Upcoming Events</h1>
                    <p className='mt-4 text-center md:text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate. 
                    </p>
                </div>
                <EventsFormContainer />
            </div>
            {/* <div className='px-6 md:px-0'>
            <div className='flex flex-col gap-y-2.5 mt-12 relative md:w-3/4 md:left-[12.5%] lg:w-2/3 lg:left-[16.67%]'>
                <div className='relative'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
                    <input 
                        className='placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-12 pr-3 w-full py-3 focus:outline-non shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' 
                        type="text"
                        placeholder='SEARCH FORUM POSTS' 
                    />
                </div>
                
                <button className='bg-periwinkle text-white text-sm md:text-base font-bold rounded-r-3xl px-3 md:px-8 absolute right-0 top-1/2 -translate-y-1/2 w-fit py-3'>
                    SEARCH
                </button>
            </div>
        </div> */}
        </section>
    )}

export default EventsHero;