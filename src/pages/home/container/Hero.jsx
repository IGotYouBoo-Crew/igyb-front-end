import React from 'react';
import { images } from '../../../constants';

const Hero = () => {
  return (
    <section className='relative'>
        <img src={images.HomeHeader} alt="Header" />
        <div className='bg-indigo text-background rounded-3xl flex flex-col px-10 lg:px-20 py-7 justify-center items-center'>
            <h1 className='font-bold text-2xl md:text-3xl text-center '>WELCOME TO THE CLUB</h1>
            <p className='mt-4 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate. 
            </p>
            <div className='mt-5 flex gap-x-6'>
                <button className='border border-background rounded-3xl px-5 py-2' >
                    Sign Up
                </button>
                <button className='bg-background text-indigo rounded-3xl px-6 py-2'>
                    Log In
                </button>
            </div>
        </div>
        <div>
            <div>
                <h2>NEED SOME ADVICE?</h2>
                <h1>COME TO ONE OF OUR MEET UP EVENTS</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                </p>
                <button>
                    EVENTS
                </button>
            </div>
            <img src="" alt="" />
        </div>
        <div>

        </div>
    </section>
  )
}

export default Hero