import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import PostContainer from "./container/PostContainer";
import checkErrorInResponse from "../../components/functions/checkErrorInResponse";
import ErrorMessage from "../../components/ErrorMessage";
import { NavLink } from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_URL;

const ForumPostPage = () => {
    let [post, setPost] = useState("");
    let [error, setError] = useState(
        "hold on, Superstar! We're loading this post..."
    );
    let urlPostId = window.location.pathname.split("/")[2];

    useEffect(() => {
        getPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * GET Post route
     * @date 24/12/2023 - 11:11:39
     *
     * @async
     * @returns {post}
     */
    async function getPost() {
        let response = await fetch(backendURL + "/posts/" + urlPostId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const responseData = await response.json();

        if (checkErrorInResponse(responseData)) {
            setError(responseData.errors);
            return;
        }
        setError(false);
        setPost(responseData);
        return responseData;
    }
    return (
        <MainLayout>
            <section className="">
                {post ? (
                    <PostContainer post={post} />
                ) : (
                    <div className="bg-honey p-3 rounded-2xl relative z-10 flex justify-center text-center mt-2 h-[60vh]">
                        <div className="py-6">
                            <ErrorMessage
                                className="!text-white"
                                error={error}
                            />
                            <NavLink to="/forum">
                                <button className="rounded-3xl px-3 py-2 bg-white text-honey">
                                    Back to Forum
                                </button>
                            </NavLink>
                        </div>
                    </div>
                )}
            </section>
        </MainLayout>
    );
};

export default ForumPostPage;
