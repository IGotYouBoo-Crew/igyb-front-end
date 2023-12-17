import React from 'react'
import { FiSearch } from "react-icons/fi"
import { images } from '../../../constants'
import PostFormContainer from '../../../components/posts/PostFormContainer'

const Hero = () => {
  return (
    <section className="relative bg-honey pb-10">
        <img className='z-10 relative -mt-6 w-full' src={images.ForumImage} alt="Forum Header" />
        <div className='px-10 bg-honey rounded-t-3xl z-30 lg:px-20 py-10 text-white relative -mt-6 flex flex-col items-center md:flex-row md:items-start md:justify-between'>
            <div className="md:w-1/2 flex flex-col text-center md:text-left">
                <h2 className='md:mt-6 text-sm font-bold'>NEED SOME ADVICE?</h2>
                <h1 className='mt-2 font-bold text-2xl md:text-3xl '>WELCOME TO THE FORUM</h1>
                <p className='mt-4 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate. 
                </p>
            </div>
            <PostFormContainer />
        </div>
        <div className='px-6 md:px-0'>
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
        </div>
    </section>
  )
}

export default Hero