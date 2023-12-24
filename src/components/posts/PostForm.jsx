import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink, Navigate } from "react-router-dom";

import { createPost } from "./createPost";
import UserContext from "../../contexts/UserContext";
import ErrorMessage from "../ErrorMessage";
import {
    titleCheckFailed,
    photoCheckFailed,
    captionCheckFailed,
} from "./postDataValidation";

const PostForm = ({ isVisible, onClose }) => {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [caption, setCaption] = useState("");
    const [body, setBody] = useState("");
    const [route, setRoute] = useState("");
    let [error, setError] = useState(false);

    let { userData } = useContext(UserContext);

    const handleClose = (post) => {
        if (post.target.id === "postForm") onClose();
    };

    const handleSubmit = async (post) => {
        post.preventDefault();

        let validationError =
            (title && titleCheckFailed(title)) ||
            (photo && photoCheckFailed(photo)) ||
            (caption && captionCheckFailed(caption));

        if (validationError) {
            setError(validationError);
            return;
        } else if (!title) {
            setError("Title is required*");
        } else if (!photo) {
            setError("Photo is required*");
        } else if (!caption) {
            setError("Caption is required*");
        } else if (!body) {
            setError("Body is required*");
        } else {
            let createdPost = await createPost(title, photo, caption, body);
            setRoute("/forum/" + createdPost._id);
        }
    };

    if (!isVisible) return null;
    return (
        <>
            {userData ? (
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
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col py-2 items-center w-full"
                        >
                            <div className="w-full lg:flex lg:justify-between lg:gap-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label></label>
                                    <input
                                        type="text"
                                        name="titleInput"
                                        id="titleInput"
                                        placeholder="Post Title*"
                                        value={title}
                                        onChange={(post) =>
                                            setTitle(post.target.value)
                                        }
                                        className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                            placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-3 lg:mt-5 focus:outline-periwinkle 
                            w-full placeholder:uppercase"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <label></label>
                                    <input
                                        type="text"
                                        name="photoInput"
                                        id="photoInput"
                                        placeholder="Cover Photo URL*"
                                        value={photo}
                                        onChange={(post) =>
                                            setPhoto(post.target.value)
                                        }
                                        className="truncate placeholder:font-bold text-black text-sm placeholder:text-sm 
                            placeholder:text-[#959EAD] rounded-3xl pl-5 py-3 mt-5 focus:outline-periwinkle 
                            w-full placeholder:uppercase"
                                    />
                                </div>
                            </div>

                            <label></label>
                            <input
                                type="text"
                                name="captionInput"
                                id="captionInput"
                                placeholder="Post Caption*"
                                value={caption}
                                onChange={(post) =>
                                    setCaption(post.target.value)
                                }
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

                            <ErrorMessage
                                error={error}
                                className="mt-2 text-lg"
                            />

                            <button
                                type="submit"
                                className="border border-white rounded-3xl px-5 py-2 mt-4 mb-2 w-32 text-white text-sm md:text-base uppercase"
                            >
                                Submit
                            </button>
                            {route ? <Navigate to={route} /> : ""}
                        </form>
                    </div>
                </div>
            ) : (
                <NavLink to="/sign-in" className="underline text-center">
                    Sign In to create a post
                </NavLink>
            )}{" "}
        </>
    );
};

export default PostForm;
