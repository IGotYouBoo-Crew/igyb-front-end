import React from "react";
import { NavLink } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

const PostCard = ({ className, postData }) => {
  return (
    <NavLink
      to={"/forum/" + postData._id}
      className={`flex justify-between rounded-3xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white text-honey h-[33vh] lg:h-[45vh] max-[395px]:h-[45vh] ${className}`}
    >
      <div className="py-3 px-5 md:py-5 md:px-7 lg:py-7 lg:px-9 flex flex-col justify-between w-1/2">
        <div>
          <h2 className="font-bold text-lg md:text-2xl lg:text-3xl capitalize">
            {postData.title}
          </h2>
          <p className="text-xs mt-2 md:text-base lg:text-lg">
            {postData.caption}
          </p>
        </div>
        <div className="mt-5 flex justify-between flex-wrap items-center gap-x-4 text-gray-400">
          <div className="flex items-center justify-between">
            <ProfilePicture
              src={postData.author.profilePicture}
              alt="Author Profile Picture"
              className="rounded-full h-8 w-8 object-cover mr-1"
            />

            <h4 className="italic text-xs">
              By @{postData.author.username || "deleteduser"}
            </h4>
          </div>
          <h4 className="italic font-bold text-xs mt-4 md:mt-0">
            Created: {postData.date}
          </h4>
        </div>
      </div>
      <img
        src={postData.photo}
        alt="title"
        className="w-1/2 object-cover h-auto"
      />
    </NavLink>
  );
};

export default PostCard;
