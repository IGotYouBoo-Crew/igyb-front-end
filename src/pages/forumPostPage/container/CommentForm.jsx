import React, { useState } from "react";
import { createComment } from "./createComment";
import { Navigate } from "react-router-dom";

const CommentForm = () => {
  const [desc, setDesc] = useState("");
  const [route, setRoute] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      await createComment(desc, parentPostId);

      setRoute("/forum/" + parentPostId);

      // Clear the form fields after submission
      setDesc('');
    } catch (error) {
      console.log('Looks like we have a problem:', error);
    } 
  }

  let parentPostId = window.location.pathname.split("/")[2];
  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white rounded-3xl items-end p-4 mt-6 mb-4">
      <textarea
        id="descInput"
        name="descInput"
        type="text"
        value={desc}
        onChange={(comment) => setDesc(comment.target.value)}
        className="w-full focus:outline-none bg-transparent"
        rows="2"
        placeholder="Add a comment..."
      />
      <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
        <button
          type="submit"
          className="px-6 py-2.5 rounded-3xl bg-periwinkle border border-periwinkle text-white"
        >
          Submit
        </button>
      </div>
      {route ? <Navigate to={route}/> : ""}
    </form>
  );
};

export default CommentForm;
