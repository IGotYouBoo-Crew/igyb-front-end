import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentSection = ({ listOfComments }) => {
    return (
        <div
            id="commentSection"
            className="bg-periwinkle w-full rounded-3xl mb-6 relative z-30 pt-5 px-5 md:px-20 lg:px-32 md:pt-12 md:pb-6"
        >
            <h1 className="text-white text-3xl font-bold mb-1">Comments</h1>
            <CommentForm />

            {listOfComments.map((comment, index) => {
                return <Comment commentData={comment} key={index} />;
            })}
        </div>
    );
};

export default CommentSection;
