import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import CommentsContainer from '../../components/comments/CommentsContainer'

const breadCrumbsData = [
  {name: "Home", link: '/'},
  {name: "Forum", link: '/forum'},
  {name: "Post title", link: '/forum/1'},
]

const ForumPostPage = () => {
  return (
    <MainLayout>
      <section className=''>
        <article className='flex-1 bg-honey rounded-3xl z-40 relative flex flex-col px-6 py-2'>
          <BreadCrumbs data={breadCrumbsData}/>
          <h4 className='text-sm text-white md:px-20 lg:px-12 lg:mt-4'>By John Doe (@johndoe): May 02, 2023</h4>
          <div className='lg:flex lg:flex-row-reverse lg:justify-between md:px-20 lg:px-12 lg:pb-10'>
            <img src={images.Post1Image} alt="post title" className='rounded-3xl mt-2 w-full h-auto object-cover lg:w-1/2' />
            <div className='text-white mt-6 text-center lg:text-left'>
              <h1 className='text-2xl font-bold md:text-3xl'>Forum Post 1</h1>
              <div className='text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea.Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.Lorem ipsum dolor 
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua. Ut enim ad minim ven
                </p>
                <p className='mt-4'>
                  iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Lorem ipsum dolor 
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea.
                </p>
                <p className='my-4'>
                  ea.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-between text-white text-xs md:text-base pt-2 pb-10 px-5 md:px-20 lg:px-12'>
              <button className='border-2 border-white rounded-3xl px-7 md:px-10 py-1'>
                BACK
              </button>
              <button className='border-2 border-white rounded-3xl px-7 md:px-10 py-1'>
                NEXT
              </button>
            </div>
        </article>
        <CommentsContainer className='mt-10' loggedInUserId="a"/>
      </section>
    </MainLayout>
  )
}

export default ForumPostPage