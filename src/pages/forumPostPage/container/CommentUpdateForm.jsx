import React, { useState } from "react";
import CommentSection from "./CommentSection";
// import { updateComment } from "./updateComment";

const CommentUpdateForm = ({commentData, initialText = "", formCancelHandler = null, formSubmitHandler, loading = false}) => {
  const [desc, setDesc] = useState(initialText);


  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
    formSubmitHandler(desc);

    // reload page so we can 
      window.location.reload();

    } catch (error) {
      console.log('Looks like we have a problem:', error);
    } 
  }

//   let parentPostId = window.location.pathname.split("/")[2];
  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white rounded-3xl items-end p-4 mt-6 mb-4">
      <textarea
        id="descInput"
        name="descInput"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full focus:outline-none bg-transparent"
        rows="2"
        // initialText={commentData.desc}
      />
      <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
        {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 rounded-3xl border border-red-500 text-red-500"
            >
              Cancel
            </button>
        )}
        <button
            className="px-6 py-2.5 rounded-3xl bg-periwinkle border border-periwinkle text-white"
            type="submit"
            disabled={loading}
            // onClick={}
        >
            Update
        </button>
      </div>
    </form>
  );
};

export default CommentUpdateForm;