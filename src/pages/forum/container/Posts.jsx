import React, { useEffect, useState } from 'react'
import PostCard from '../../../components/PostCard'

const backendURL = process.env.REACT_APP_BACKEND_URL;

const Posts = () => {

  let [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
      getAllPosts()
  }, []);
  
  async function getAllPosts() {
      let response = await fetch(backendURL + "/posts/", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          credentials: "include",
      });
      
      const responseData = await response.json();
  
      console.log(responseData);
      setListOfPosts(responseData);
      return responseData;
  }

  return (
    <section className='-mt-1 px-6 md:px-20 lg:px-36 py-10 bg-honey rounded-b-3xl relative'>
        <div className='flex flex-col gap-y-7 md:gap-y-9 lg:gap-y-12'>
            {
                listOfPosts ?
                listOfPosts.map((post, index) => {
                    return (
                        <PostCard 
                            postData={post} 
                            key={index} 
                            className='w-full' 
                        />
                    )
                })
                :
                ""
            }
        </div>
        <button className='mx-auto flex items-center gap-x-2 font-bold text-white border-2 border-white px-10 py-2 mt-12 mb-3 rounded-3xl'>
            LOAD MORE
        </button>

    </section>
  )
}

export default Posts