import React from 'react'
import PostCard from '../../../components/PostCard'


const Posts = () => {
  return (
    <section className=' px-6 md:px-20 lg:px-36 py-10 bg-honey rounded-b-3xl relative'>
        <div className='flex flex-col gap-y-7 md:gap-y-9 lg:gap-y-12'>
            <PostCard className='w-full' />
            <PostCard className='w-full' />
            <PostCard className='w-full' />
        </div>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-white border-2 border-white px-10 py-2 mt-12 mb-3 rounded-3xl'>
            LOAD MORE
        </button>

    </section>
  )
}

export default Posts