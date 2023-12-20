import React, { useContext, useState } from 'react';
import { IoClose } from "react-icons/io5";

import { createPost } from './createPost';
import { NavLink, Navigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';


const PostForm = ({ isVisible, onClose }) => {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [caption, setCaption] = useState("")
    const [body, setBody] = useState("");
    const [route, setRoute] = useState("");
    let { userData } = useContext(UserContext);

    
    const handleClose = (post) => {
        if (post.target.id === 'postForm') onClose();
    };

    const handleSubmit = async (post) => {
        post.preventDefault();
        // Need to add validation for form fields

        try {
            let createdPost = await createPost(title, photo, caption, body);

            setRoute("/forum/" + createdPost._id);

            // Clear the form fields after submission
            setTitle('');
            setPhoto('');
            setCaption('');
            setBody('');

        } catch (error) {
            console.log('Looks like we have a problem:', error);
        }
    };
    
  if (!isVisible) return null;
  return (
    <>
    {userData ? 
        
    
    
    <div 
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
        id="postForm"
        onClick={handleClose}
    >

        <div className="pt-2 px-6 bg-indigo text-white w-3/4 md:w-2/3 mt-16 md:mt-24 lg:mt-16 lg:py-3 lg:px-10 rounded-3xl max-h-[83vh] overflow-y-auto">
            <div className="text-right"> 
                <button 
                    className="text-white text-2xl mt-2 lg:mt-3" 
                    onClick={() => onClose()}
                >
                    <IoClose />
                </button>
            </div>

            <h1 className="mt-2 font-bold text-2xl text-center uppercase">
                Write your post
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col py-2 items-center">

                <div className='w-full lg:flex lg:justify-between lg:gap-x-4'>
                    <input 
                        type="text" 
                        name="titleInput" 
                        id="titleInput" 
                        placeholder="Post Title*"
                        value={title} 
                        onChange={(post) => setTitle(post.target.value)} 
                        className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                        placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-3 lg:mt-5 focus:outline-periwinkle 
                        w-full placeholder:uppercase" 
                    />

                    <input 
                        type="text" 
                        name="photoInput" 
                        id="photoInput" 
                        placeholder="Cover Photo URL*"
                        value={photo} 
                        onChange={(post) => setPhoto(post.target.value)} 
                        className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                        placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-5 focus:outline-periwinkle 
                        w-full placeholder:uppercase" 
                    />
                </div>

                <label></label>
                <input 
                    type="text" 
                    name="captionInput" 
                    id="captionInput" 
                    placeholder="Post Caption*"
                    value={caption} 
                    onChange={(post) => setCaption(post.target.value)} 
                    className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                    placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-5 focus:outline-periwinkle 
                    w-full placeholder:uppercase" 
                />

                <label></label>
                <textarea 
                    id="bodyInput" 
                    rows="5" 
                    type="text" 
                    name="bodyInput" 
                    value={body} 
                    onChange={(post) => setBody(post.target.value)} 
                    className="block placeholder:font-bold text-black text-sm placeholder:text-sm placeholder:text-[#959EAD] rounded-3xl pl-5 pr-3 py-3 mt-5 focus:outline-periwinkle w-full placeholder:uppercase" 
                    placeholder="What would you like to say?*"
                />  

                <button 
                    type="submit"
                    className="border border-white rounded-3xl px-5 py-2 mt-4 mb-2 w-32 text-white text-sm md:text-base uppercase" 
                >
                    Submit
                </button>
                {route ? <Navigate to={route}/> : ""}
            </form>
        </div>
    </div>
    : 
    <NavLink to="/sign-in" className="underline text-center">
            Sign In to create a post
    </NavLink>
    } </>
  );
};

export default PostForm
