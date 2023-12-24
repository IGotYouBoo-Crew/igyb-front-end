import React, { useEffect, useState } from "react";
import PostCard from "../../../components/PostCard";

const backendURL = process.env.REACT_APP_BACKEND_URL;

const Posts = () => {
  let [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  /**
   * GET all posts route
   * @date 24/12/2023 - 11:03:40
   *
   * @async
   * @returns [{listOfPosts}]
   */
  async function getAllPosts() {
    let response = await fetch(backendURL + "/posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const responseData = await response.json();
    setListOfPosts(responseData);
    return responseData;
  }

  return (
    <section className="-mt-1 px-6 md:px-20 lg:px-36 pt-10 bg-honey rounded-b-3xl relative pb-16">
      <div className="flex flex-col gap-y-7 md:gap-y-9 lg:gap-y-12">
        {listOfPosts
          ? listOfPosts.map((post, index) => {
              return (
                <PostCard postData={post} key={index} className="w-full" />
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Posts;
