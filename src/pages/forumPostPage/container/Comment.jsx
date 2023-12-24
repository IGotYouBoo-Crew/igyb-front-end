import React, { useContext, useState } from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { images } from "../../../constants";
import UserContext from "../../../contexts/UserContext";
import CommentUpdateForm from "./CommentUpdateForm";
import { updateComment } from "./updateComment";
import { deleteComment } from "./deleteComment";
import CommentDeleteForm from "./CommentDeleteForm";

const Comment = ({ commentData }) => {
    let { userData } = useContext(UserContext);
    const commentBelongsToUser =
        userData.username === commentData.author.username;
    const [affectedComment, setAffectedComment] = useState({});

    const isEditing =
        affectedComment &&
        affectedComment.type === "editing" &&
        affectedComment._id === commentData._id;
    const isDeleting =
        affectedComment &&
        affectedComment.type === "deleting" &&
        affectedComment._id === commentData._id;

    const handleSubmit = async function (desc) {
        await updateComment(desc, commentData);
        setAffectedComment(null);
    };

    const handleDelete = async function () {
        await deleteComment(commentData);
        setAffectedComment(null);
    };

    return (
        <div className="flex flex-nowrap items-start gap-x-3 p-3 rounded-lg">
            <img
                src={commentData.author.profilePicture || images.ProfileDefault}
                alt="user profile"
                className="w-9 h-9 object-cover rounded-full"
            />
            <div className="flex-1 flex flex-col">
                <h5 className="font-bold text-white opacity-80 text-xs lg:text-sm">
                    @{commentData.author.username || "Deleted User"}
                </h5>
                <span className="text-xs text-white opacity-60">
                    {commentData.date}
                </span>
                {!isEditing && !isDeleting && (
                    <p className="text-white mt-[5px]">{commentData.desc}</p>
                )}
                {isEditing && (
                    <CommentUpdateForm
                        formSubmitHandler={(desc) => handleSubmit(desc)}
                        formCancelHandler={() => setAffectedComment(null)}
                        commentData={commentData}
                        initialText={commentData.desc}
                    />
                )}
                {isDeleting && (
                    <CommentDeleteForm
                        formSubmitHandler={() => handleDelete()}
                        formCancelHandler={() => setAffectedComment(null)}
                    />
                )}
                <div className="text-white flex items-center gap-x-3 text-sm mt-3 mb-3">
                    {commentBelongsToUser && (
                        <>
                            <button
                                className="flex items-center space-x-2"
                                onClick={() =>
                                    setAffectedComment({
                                        type: "editing",
                                        _id: commentData._id,
                                    })
                                }
                            >
                                <FiEdit2 className="w-4 h-auto" />
                                <span>Edit</span>
                            </button>
                            <button
                                className="flex items-center space-x-2"
                                onClick={() =>
                                    setAffectedComment({
                                        type: "deleting",
                                        _id: commentData._id,
                                    })
                                }
                            >
                                <FiTrash className="w-4 h-auto" />
                                <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comment;
