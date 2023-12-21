import BreadCrumbs from "../../../components/BreadCrumbs";
import {FiEdit2, FiTrash} from 'react-icons/fi'
import CommentSection from "./CommentSection";
import { images } from '../../../constants'
import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { updatePost } from "./updatePost";
import PostUpdateForm from "./PostUpdateForm";
import { deletePost } from "./deletePost";
import PostDeleteForm from "./PostDeleteForm";

const PostContainer = ({post}) => {
  let { userData } = useContext(UserContext);
  console.log(post.author)
  const postBelongsToUser = post && userData.username === post.author.username; 
  const [affectedPost, setAffectedPost] = useState({});

  const isEditing = affectedPost && affectedPost.type === 'editing' && affectedPost._id === post._id;
  const isDeleting = affectedPost && affectedPost.type === 'deleting' && affectedPost._id === post._id;

  const handleSubmit = async function (title, caption, body, photo) {
    await updatePost(title, caption, body, photo, post);
    setAffectedPost(null);
  }

  const handleDelete = async function () {
    await deletePost(post);
    setAffectedPost(null);
  }

  const breadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "Forum", link: "/forum" },
    {name: post.title, link: `/forum/${post._id}`},
  ];

  return (
    <div>
      <article className="flex-1 bg-honey rounded-3xl relative flex flex-col px-6 py-1">
        <BreadCrumbs data={breadCrumbsData} 
          className="capitalize"
        />
        {post ? (
          <>
            <div className='text-white text-lg flex items-center gap-x-5 mt-3 justify-end md:px-20 lg:px-12 relative z-20'>
                {postBelongsToUser && (
                    <>
                        <button 
                            className='flex items-center space-x-2'
                            onClick={() => setAffectedPost({type: 'editing', _id: post._id})}
                        >
                            <FiEdit2 className='w-7 md:w-5 h-auto' />
                            <span className="hidden md:block">Edit</span>
                        </button>
                        <button 
                            className='flex items-center space-x-2' 
                            onClick={() => setAffectedPost({type: 'deleting', _id: post._id})}
                        >
                            <FiTrash className='w-7 md:w-5 h-auto' />
                            <span className="hidden md:block">Delete</span>
                        </button>
                    </>
                )}
            </div>
            
            <div className="flex items-center md:px-20 lg:px-12 pb-3 pt-5 -mt-7">
              <img 
                src={post.author.profilePicture || images.ProfileDefault} 
                alt="profile"
                className="rounded-full h-9 mr-1"
              />
              <div className="ml-2">
                <h4 className="text-sm font-bold text-white opacity-70">
                  By @{post.author.username || "deleteduser"}
                </h4>
                <h4 className="text-sm text-white opacity-60 ">
                  created on {post.date}
                </h4>
              </div>
            </div>
            
            {!isEditing && !isDeleting && (  
              <div className="lg:flex lg:flex-row-reverse lg:justify-between md:px-20 lg:px-12 lg:pb-10">
                <img
                  src={post.photo}
                  alt="post title"
                  className="rounded-3xl mt-2 w-full h-auto object-cover lg:w-1/2"
                />
                <div className="text-white mt-6 text-center lg:text-left">
                  <h1 className="text-2xl font-bold md:text-3xl capitalize">
                    {post.title}
                  </h1>
                  <div className="text-sm md:text-base px-4 md:px-0 lg:pl-0 lg:pr-16 py-3">
                    <p className="mb-4 lg:mb-0">{post.body}</p>
                  </div>
                </div>
              </div>
            )}
            {isEditing && (
              <PostUpdateForm 
                formSubmitHandler={(title, caption, body, photo) => handleSubmit(title, caption, body, photo)}
                formCancelHandler={() => setAffectedPost(null)}
                post={post}
                titleInitialText={post.title}
                captionInitialText={post.caption}
                bodyInitialText={post.body}
                photoInitialText={post.photo}
              /> 
            )}
            {isDeleting && (
              <PostDeleteForm 
                formSubmitHandler={() => handleDelete()}
                formCancelHandler={() => setAffectedPost(null)}
              /> 
            )}

            <CommentSection listOfComments={post.comments} />
          </>
        ) : (
          "loading post data"
        )}
      </article>
    </div>
  );
};

export default PostContainer;
