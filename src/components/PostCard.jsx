import React from 'react'
import { images } from '../constants'

const PostCard = (className) => {
  return (
    <div className={`flex justify-between rounded-3xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white text-honey ${className}`}>
        <div className='py-3 px-5 md:py-5 md:px-7 lg:py-7 lg:px-9 flex flex-col justify-between'>
            <div>
                <h2 className='font-bold text-lg md:text-2xl lg:text-3xl'>Forum Post 1</h2>
                <p className='text-xs mt-2 md:text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div className='mt-5 flex flex-wrap justify-between items-center gap-x-2 text-gray-400'>
                <div className='flex items-center justify-between'>
                    <img src={images.PostProfile1} alt="post 1 author" className='rounded-full h-8 mr-1' />
                    <h4 className='italic text-xs'>By John Doe (@johndoe)</h4>
                </div>
                <h4 className='italic font-bold text-xs mt-4 md:mt-0'>02 May</h4>
            </div>
        </div>
        <img src={images.Post1Image} alt="title" className='w-1/2 object-cover object-center h-auto'/>
    </div>
  )
}

export default PostCard