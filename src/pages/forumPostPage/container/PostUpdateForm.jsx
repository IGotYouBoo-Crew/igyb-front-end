import React, { useState } from "react";
// import { updateComment } from "./updateComment";

const PostUpdateForm = ({post, titleInitialText = "", captionInitialText = "", bodyInitialText = "", photoInitialText = "", formCancelHandler = null, formSubmitHandler, loading = false}) => {
  const [title, setTitle] = useState(titleInitialText);
  const [caption, setCaption] = useState(captionInitialText);
  const [body, setBody] = useState(bodyInitialText);
  const [photo, setPhoto] = useState(photoInitialText);


  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
    formSubmitHandler(title, caption, body, photo);

    // reload page so we can 
      window.location.reload();

    } catch (error) {
      console.log('Looks like we have a problem:', error);
    } 
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="pt-2 px-6 bg-indigo text-white w-3/4  mt-5 mb-8 py-3 lg:px-10 rounded-3xl">
            <h1 className="mt-2 font-bold text-2xl text-center uppercase mb-4">
                Update your post
            </h1>
            <div className='w-full lg:flex lg:justify-between lg:gap-x-6'>
                <div className="w-full">
                    <label
                        for="titleInput"
                        className="w-full"
                    >
                        Title
                    </label>
                    <input
                        id="titleInput"
                        name="titleInput"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                        placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mb-5 mt-2 focus:outline-periwinkle 
                        w-full placeholder:uppercase"
                        rows="2"
                    />
                </div>
                <div className="w-full">
                    <label
                        for="photoInput"
                        className="w-full"
                    >
                        Image URL
                    </label>
                    <input
                        id="photoInput"
                        name="photoInput"
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                        placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mb-5 mt-2 focus:outline-periwinkle 
                        w-full placeholder:uppercase"
                        rows="2"
                    />
                </div>
            </div>
            <label
                for="captionInput"
            >
                Caption
            </label>
            <input
                id="captionInput"
                name="captionInput"
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                    placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mb-5 mt-2 focus:outline-periwinkle 
                    w-full placeholder:uppercase"
                rows="2"
            />
            <label
                for="bodyInput"
            >
                Body
            </label>
            <textarea
                id="bodyInput"
                name="bodyInput"
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="block placeholder:font-bold text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 mb-5 mt-2 focus:outline-periwinkle w-full placeholder:uppercase"
                rows="5"
            />
            <div className="flex flex-col-reverse gap-y-2 items-center gap-x-4 pt-2 min-[420px]:flex-row min-[420px]:justify-center">
                {formCancelHandler && (
                    <button
                    onClick={formCancelHandler}
                    className="px-6 py-2.5 rounded-3xl border-2 border-red-500 bg-white font-bold text-red-500"
                    >
                    Cancel
                    </button>
                )}
                <button
                    className="px-6 py-2.5 rounded-3xl bg-white border-2 border-periwinkle font-bold text-periwinkle"
                    type="submit"
                    disabled={loading}
                >
                    Update
                </button>
            </div>
        </div>
    </form>
  );
};

export default PostUpdateForm;