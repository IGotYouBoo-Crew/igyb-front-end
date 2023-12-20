import React, { useState } from 'react';

import { createPost } from './createPost';


const PostForm = ({ isVisible, onClose }) => {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [caption, setCaption] = useState("")
    const [body, setBody] = useState("");
    
    const handleClose = (post) => {
        if (post.target.id === 'postForm') onClose();
    };

    const handleSubmit = async (post) => {
        post.preventDefault();
        // Need to add validation for form fields

        try {
            await createPost(title, photo, caption, body);

            // Clear the form fields after submission
            setTitle('');
            setPhoto('');
            setCaption('');
            setBody('');

            onClose();
        } catch (error) {
            console.log('Looks like we have a problem:', error);
        }
    };
    
  if (!isVisible) return null;
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
        id="postForm"
        onClick={handleClose}
    >

        <div className="pt-2 px-6 bg-indigo text-white w-3/4 md:w-2/3 mt-4 md:mt-14 lg:mt-16 lg:py-3 lg:px-10 rounded-3xl">
            <div className="text-right"> 
                <button 
                    className="text-white text-xl text-bold" 
                    onClick={() => onClose()}
                >
                    x
                </button>
            </div>

            <h1 className="mt-2 font-bold text-2xl md:text-2xl text-center">
                WRITE YOUR POST
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col py-2 items-center">

                <label></label>
                <input 
                    type="text" 
                    name="titleInput" 
                    id="titleInput" 
                    placeholder="POST TITLE*"
                    value={title} 
                    onChange={(post) => setTitle(post.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm 
                    md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-3 focus:outline-periwinkle 
                    w-full" 
                />

                <label></label>
                <input 
                    type="text" 
                    name="photoInput" 
                    id="photoInput" 
                    placeholder="COVER PHOTO URL*"
                    value={photo} 
                    onChange={(post) => setPhoto(post.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm 
                    md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-5 focus:outline-periwinkle 
                    w-full" 
                />

                <label></label>
                <input 
                    type="text" 
                    name="captionInput" 
                    id="captionInput" 
                    placeholder="POST CAPTION*"
                    value={caption} 
                    onChange={(post) => setCaption(post.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm 
                    md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-5 focus:outline-periwinkle 
                    w-full" 
                />

                <label></label>
                <textarea 
                    id="bodyInput" 
                    rows="5" 
                    type="text" 
                    name="bodyInput" 
                    value={body} 
                    onChange={(post) => setBody(post.target.value)} 
                    className="block placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 mt-5 focus:outline-periwinkle w-full" 
                    placeholder="WHAT WOULD YOU LIKE TO SAY?*"
                >    
                </textarea>
                        
                <button 
                    type="submit"
                    className="border border-white rounded-3xl px-5 py-2 mt-4 mb-2 w-32 text-white text-sm md:text-base" 
                >
                    SUBMIT
                </button>
            </form>
        </div>
    </div>
  );
};

export default PostForm
