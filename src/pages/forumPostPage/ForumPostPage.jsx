import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import PostContainer from './container/PostContainer'

const backendURL = process.env.REACT_APP_BACKEND_URL;

const ForumPostPage = () => {
  let [post, setPost] = useState("");
  let urlPostId = window.location.pathname.split("/")[2];
  console.log(urlPostId);

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPost() {
    let response = await fetch(backendURL + "/posts/" + urlPostId, {
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
    <MainLayout>
      <section className=''>
        <PostContainer 
          post = {post}
        />
      </section>
    </MainLayout>
  )
}

export default ForumPostPage