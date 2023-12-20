import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../../components/BreadCrumbs'
import { images } from '../../../constants'

const breadCrumbsData = [
  {name: "Home", link: '/'},
  {name: "Forum", link: '/forum'},
  // {name: "Post title", link: '/forum/1'},
]

const backendURL = process.env.REACT_APP_BACKEND;

const PostContainer = () => {

  let [post, setPost] = useState([]);
  let urlPostId = window.location.pathname.split("/")[2]
  console.log(urlPostId)

  useEffect(() => {
      getPost()
  }, []);
  
  async function getPost() {
      let response = await fetch(backendURL + "/posts/" + urlPostId , {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          credentials: "include",
      });
      
      const responseData = await response.json();
  
      console.log(responseData);
      setPost(responseData);
      return responseData;
  }

  return (
    <article className='flex-1 bg-honey rounded-3xl z-40 relative flex flex-col px-6 py-2'>
          <BreadCrumbs data={breadCrumbsData}/>
          <h4 className='text-sm text-white md:px-20 lg:px-12 lg:mt-4'>By {post.author.fullName || "Deleted User"} (@{post.author.username || deleteduser}): {post.date}</h4>
          <div className='lg:flex lg:flex-row-reverse lg:justify-between md:px-20 lg:px-12 lg:pb-10'>
            <img src={post.photo} alt="post title" className='rounded-3xl mt-2 w-full h-auto object-cover lg:w-1/2' />
            <div className='text-white mt-6 text-center lg:text-left'>
              <h1 className='text-2xl font-bold md:text-3xl'>{post.title}</h1>
              <div className='text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3'>
                <p>
                  {post.body}
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end text-white text-xs md:text-base pt-2 pb-10 px-5 md:px-20 lg:px-12'>
              <button className='border-2 border-white rounded-3xl px-7 md:px-10 py-1'>
                NEXT POST
              </button>
            </div>
        </article>
  )
}

export default PostContainer;