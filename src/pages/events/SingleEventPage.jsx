import React from 'react'
import MainLayout from '../../components/MainLayout'
import SingleEventContainer from './container/SingleEventContainer'
import BreadCrumbs from '../../components/BreadCrumbs'


const breadCrumbsData = [
    {name: "Home", link: '/'},
    {name: "Events", link: '/events'}
]

const SingleEventPage = () => {
  return (
    <MainLayout>
        <section>
            <div className="px-6 py-2">
                <BreadCrumbs data={breadCrumbsData} />
            </div>
            <SingleEventContainer />
        </section>
    </MainLayout>
  )
}

export default SingleEventPage
