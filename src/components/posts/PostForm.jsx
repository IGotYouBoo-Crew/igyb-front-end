import React, { useState } from 'react';

import { createPost } from './createPost';


const PostForm = ({ isVisible, onClose }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    
    const handleClose = (event) => {
        if (event.target.id === 'postForm') onClose();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Need to add validation for form fields

        try {
            await createPost(title, image, content);

            // Clear the form fields after submission
            setTitle('');
            setImage('');
            setContent('');

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

        <div className="p-6 lg:p-8 bg-indigo text-white rounded-3xl">
            <div className="flex justify-items-end"> 
                <button 
                    className="text-white text-xl text-bold" 
                    onClick={() => onClose()}
                >
                    X
                </button>
            </div>
            <h1 className="mt-2 font-bold text-2xl md:text-3xl text-center ">
                WRITE YOUR POST
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col py-5">

                <label></label>
                <input 
                    type="text" 
                    name="titleInput" 
                    id="titleInput" 
                    placeholder="POST TITLE*"
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline " 
                />

                <label></label>
                <input 
                    type="text" 
                    name="imageInput" 
                    id="imageInput" 
                    placeholder="COVER IMAGE URL"
                    value={image} 
                    onChange={(event) => setImage(event.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline " 
                />

                <label></label>
                <input 
                    type="text" 
                    name="contentInput" 
                    id="contentInput" 
                    placeholder="WHAT WOULD YOU LIKE TO SAY?*"
                    value={content} 
                    onChange={(event) => setContent(event.target.value)} 
                    className="truncate whitespace-pre-line placeholder:font-bold text-black text-sm md:text-base placeholder:text-sm md:placeholder:text-base placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 m-4 focus:outline" 
                />
                        
                <button 
                    type="submit"
                    className="border border-white rounded-3xl px-5 py-2 m-4 w-32 text-white text-sm md:text-base" 
                >
                    SUBMIT
                </button>
            </form>
        </div>
    </div>
  );
};

export default PostForm
