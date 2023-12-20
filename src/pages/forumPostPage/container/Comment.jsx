import React from 'react'
// import {FiMessageSquare, FiEdit2, FiTrash} from 'react-icons/fi'
import {images} from "../../../constants"


const Comment = ({commentData}) => {
  return (
    <div className='flex flex-nowrap items-start gap-x-3 p-3 rounded-lg'>
        <img 
            src={commentData.author.photo || images.PostProfile1} 
            alt="user profile" 
            className='w-9 h-9 object-cover rounded-full' 
        />
        <div className='flex-1 flex flex-col'>
            <h5 className='font-bold text-white opacity-80 text-xs lg:text-sm'>
                @{commentData.username || "Deleted User"}
            </h5>
            <span className='text-xs text-white opacity-60'>
                {commentData.date}
            </span>
            {/* {!isEditing && (  */}
                <p className='text-white mt-[5px]'>
                    {commentData.desc}
                </p>
            {/* )} */}
            {/* {isEditing && (
                <CommentForm 
                    btnLabel="Update" 
                    formSubmitHandler={(value) => updateComment(value, comment._id)} 
                    formCancelHandler={() => setAffectedComment(null)}
                    initialText={comment.desc}
                />   
            )} */}
            <div className='text-white flex items-center gap-x-3 text-sm mt-3 mb-3'>
                {/* {commentBelongsToUser && (
                    <>
                        <button 
                            className='flex items-center space-x-2'
                            onClick={() => setAffectedComment({type: 'editing', _id: comment._id})}
                        >
                            <FiEdit2 className='w-4 h-auto' />
                            <span>Edit</span>
                        </button>
                        <button 
                            className='flex items-center space-x-2' 
                            onClick={() => deleteComment(comment._id)}
                        >
                            <FiTrash className='w-4 h-auto' />
                            <span>Delete</span>
                        </button>
                    </>
                )} */}
            </div>
        </div>
    </div>
  )
}

export default Comment