import React from 'react';

import MainLayout from '../components/MainLayout';
import { images } from '../constants';
import EventsFormContainer from '../components/events/EventsFormContainer';

const EventsPage = () => {
  
    return (
      <MainLayout>
        <section className="relative">
          <img className=' relative -mt-6 w-full' src={images.EventHeader} alt="Header" />
          <div className=' -mt-6 relative bg-indigo text-white rounded-3xl flex flex-col px-10 lg:px-20 py-10 items-center md:flex-row md:items-start md:justify-between'>
              <div className="md:w-1/2 flex flex-col">
                  <h2 className='text-center md:text-left md:mt-6 font-bold'>WHAT'S ON</h2>
                  <h1 className='mt-2 font-bold text-2xl md:text-3xl text-center md:text-left'>UPCOMING EVENTS</h1>
                  <p className='mt-4 text-center md:text-left'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                      irure dolor in reprehenderit in voluptate. 
                  </p>
              </div>
            <EventsFormContainer />
          </div>
        </section>
    </MainLayout>
    );
};

    export default EventsPage;
