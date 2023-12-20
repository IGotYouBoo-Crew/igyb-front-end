import React from 'react';

import MainLayout from '../../components/MainLayout';
import EventsHero from './container/EventsHero';

const EventsPage = () => {
  
    return (
      <MainLayout>
        <section>
          <EventsHero />
        </section>
      </MainLayout>
    );
};

    export default EventsPage;
