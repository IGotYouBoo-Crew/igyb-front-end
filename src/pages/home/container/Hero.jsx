import React from 'react';
import { images } from '../../../constants';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative'>
        <img className='relative -mt-6' src={images.HomeHeader} alt="Header" />
        <div className='-mt-6 relative  bg-indigo text-background rounded-3xl flex flex-col px-10 lg:px-20 py-10 justify-center items-center'>
            <h1 className='font-bold text-2xl md:text-3xl text-center'>WELCOME TO THE CLUB</h1>
            <p className='mt-4 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate. 
            </p>
            <NavLink to="/sign-in">
                <button className='mt-5 border border-background rounded-3xl px-5 py-2' >
                    Log In / Sign Up
                </button>
            </NavLink>
        </div>
        <div className='md:h-160 -mt-6 w-screen bg-cover bg-center flex flex-col justify-center items-center md:flex-row-reverse'>
            <img className= 'md:w-1/2 md:h-full md:object-cover' src={images.EventsHero} alt="Girls laughing" />
            <div className='h-full bg-background  text-sea flex flex-col px-10 lg:px-20 py-12 justify-center items-center md:items-start'>
                <h2 className='text-center md:text-left md:mt-6 font-bold '>WANTING TO MEET LIKE-MINDED PEOPLE?</h2>
                <h1 className='mt-2 font-bold text-2xl md:text-3xl text-center md:text-left'>COME TO ONE OF OUR MEET UP EVENTS</h1>
                <p className='mt-4 text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                </p>
                <NavLink to="/events">
                    <button className='mt-4 border-2 font-bold border-sea rounded-3xl px-5 py-2'>
                        EVENTS
                    </button>
                </NavLink>
                
            </div>
        </div>
        <div>

        </div>
    </section>
  )
}

export default Hero