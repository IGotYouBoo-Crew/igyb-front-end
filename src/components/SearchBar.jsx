import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({location="forum", searchTarget="post" }) {
    
    return (
        <div className="flex flex-row justify-center items-center w-1/2 ">
                <FiSearch className="h-6 w-6 -mr-7 z-10 text-[#959EAD] " />
                <input type="search" placeholder={`Search ${location} for ${searchTarget}s`} className="h-full w-full px-8 py-3 rounded-l-3xl text-base focus:outline-indigo " />

            <button className={" bg-periwinkle rounded-r-3xl px-2 h-full uppercase text-white "}>Search</button>
        </div>
    );
}
