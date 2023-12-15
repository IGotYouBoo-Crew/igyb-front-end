import React from 'react'
import { FiSearch } from "react-icons/fi"
import { images } from '../../../constants'
import PostFormContainer from '../../../components/posts/PostFormContainer'

const Hero = () => {
  return (
    <section className='lg:-mt-5'>
        <img src={images.ForumImage} alt="Forum Header" />
        <div className='bg-honey rounded-t-3xl z-40 p-10 text-white relative -mt-10 lg:-mt-16'>
            <div className='lg:flex md:justify-between'>
                <div className='text-center lg:w-1/2 lg:text-start lg:pl-28'>
                    <h2 className='font-bold text-xs'>NEED SOME ADVICE?</h2>
                    <h1 className='font-bold text-xl mt-2 lg:text-2xl'>WELCOME TO THE FORUM</h1>
                    <p className='text-xs mt-3 md:px-20 lg:px-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                <PostFormContainer />

                {/* <div className='mt-8 lg:mt-0 text-center lg:w-1/2 lg:text-end lg:pr-28'>
                    <h2 className='font-bold text-xs lg:mr-1'>GOT SOMETHING TO SAY?</h2>
                    <button className='font-bold bg-periwinkle rounded-3xl px-5 py-2 mt-2 lg:text-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                        CREATE A POST
                    </button>
                </div> */}
            </div>
            <div className='flex flex-col gap-y-2.5 mt-12 relative md:w-3/4 md:left-[12.5%] lg:w-2/3 lg:left-[16.67%] '>
                <div className='relative'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
                    <input 
                        className='placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-12 pr-3 w-full py-3 focus:outline-non shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' 
                        type="text"
                        placeholder='SEARCH FORUM POSTS' 
                    />
                </div>
                <button className='bg-periwinkle text-white text-sm md:text-base font-bold rounded-r-3xl px-3 md:px-8 absolute right-0 top-1/2 -translate-y-1/2 w-fit py-3 '>
                    SEARCH
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero