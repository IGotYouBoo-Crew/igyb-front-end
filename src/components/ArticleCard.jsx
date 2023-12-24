import React from "react";
import { images } from "../constants";
import { NavLink } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

const ArticleCard = ({ className, postData }) => {
  return (
    <NavLink
      to={"/forum/" + postData._id}
      className={`bg-honey rounded-3xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${className}`}
    >
      <img
        src={postData.photo}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5 text-white">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[28px] capitalize text-center">
            {postData.title}
          </h2>
          <p className="mt-3 md:text-lg text-center">{postData.caption}</p>
        </div>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <ProfilePicture
              src={postData.author.profilePicture || images.ProfileDefault}
              alt="Post Author Profile"
              className="rounded-full object-scale-down h-9 w-9 md:h-10 md:w-10"
            />

            <h4 className="italic text-sm md:text-xs">
              @{postData.author.username || "deleteduser"}
            </h4>
          </div>
          <span className="text-white font-bold italic text-sm md:text-xs">
            {postData.date}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ArticleCard;
