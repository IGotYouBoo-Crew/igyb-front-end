import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../../components/BreadCrumbs";
import CommentSection from "./CommentSection";
import { images } from '../../../constants'

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Forum", link: "/forum" },
  // {name: "Post title", link: '/forum/1'},
];

const backendURL = process.env.REACT_APP_BACKEND_URL;

const PostContainer = () => {
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
    <div>
      <article className="flex-1 bg-honey rounded-3xl relative flex flex-col px-6 py-2">
        <BreadCrumbs data={breadCrumbsData} />
        {post ? (
          <>
            <div className="flex items-center md:px-20 lg:px-12 lg:mt-4">
              <img 
                src={post.author.profilePicture || images.ProfileDefault} 
                alt="profile"
                className="rounded-full h-9 mr-1"
              />
              <div className="ml-2">
                <h4 className="text-sm font-bold text-white opacity-70">
                  By @{post.author.username || "deleteduser"}
                </h4>
                <h4 className="text-sm text-white opacity-60 ">
                  created on {post.date}
                </h4>
              </div>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:justify-between md:px-20 lg:px-12 lg:pb-10">
              <img
                src={post.photo}
                alt="post title"
                className="rounded-3xl mt-2 w-full h-auto object-cover lg:w-1/2"
              />
              <div className="text-white mt-6 text-center lg:text-left">
                <h1 className="text-2xl font-bold md:text-3xl capitalize">
                  {post.title}
                </h1>
                <div className="text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3">
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end text-white text-xs md:text-base pt-2 pb-10 px-5 md:px-20 lg:px-12">
              <button className="border-2 border-white rounded-3xl px-7 md:px-10 py-1 uppercase">
                Next post
              </button>
            </div>
            <CommentSection listOfComments={post.comments} />
          </>
        ) : (
          "loading post data"
        )}
      </article>
    </div>
  );
};

export default PostContainer;
