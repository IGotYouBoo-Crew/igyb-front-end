import React from 'react'
import MainLayout from '../../components/MainLayout'
import SingleEventContainer from './container/SingleEventContainer'


const SingleEventPage = () => {
  return (
    <MainLayout>
        <section>
            <SingleEventContainer />
        </section>
    </MainLayout>
  )
}

export default SingleEventPage
