import React, { useState } from "react";
import PostForm from "./PostForm";

const PostFormContainer = () => {
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-base lg:mr-1 md:text-right mt-10 md:mt-6 font-bold uppercase">
        Got something to say?
      </h2>
      <button
        className="bg-periwinkle text-white font-bold text-2xl rounded-3xl px-6 py-2 mt-2 uppercase"
        onClick={() => setShowPostForm(true)}
      >
        Create a post
      </button>
      <PostForm isVisible={showPostForm} onClose={() => setShowPostForm(false)}>
        <div></div>
      </PostForm>
    </div>
  );
};

export default PostFormContainer;
