import React from 'react'
import MainLayout from '../../components/MainLayout'
import { images } from '../../constants'

const AboutPage = () => {
  return (
      <MainLayout>
          <section>
              <img className='z-10 relative -mt-4' src={images.AboutImage} alt="Header" />
              <div className='bg-sea rounded-3xl -mt-12 relative z-40 px-20 py-14 md:px-40 lg:px-56 text-center text-background'>
                  <h1 className='text-2xl font-bold'>ABOUT US</h1>
                  <p className='mt-7 text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate 
                  </p>
                  <p className='mt-7 text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate 
                  </p>
                  <p className='mt-7 text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate 
                  </p>
                  <p className='mt-7 text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate 
                  </p>
                  <p className='mt-7 text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate 
                  </p>
              </div>
          </section>
      </MainLayout>
  )
}

export default AboutPage