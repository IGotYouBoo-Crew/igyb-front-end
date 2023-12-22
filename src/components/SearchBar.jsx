import { FiSearch } from "react-icons/fi";

export default function SearchBar({ location = "forum", searchTarget = "post", onChange =() => {}, onSearch=() =>{} }) {
    return (
        <div className="flex flex-row justify-center items-center w-10/12 md:w-1/2 lg:w-1/3 ">
            <FiSearch className="h-6 w-6 -mr-8 z-10 text-[#959EAD] " />
            <input
                type="search"
                placeholder={
                    window.innerWidth <= 400
                        ? `Search ${location}`
                        : `Search ${location} for ${searchTarget}s`
                }
                className=" h-full w-full px-9 py-3 rounded-3xl text-base focus:outline-indigo capitalize "
                onChange={onChange}
            />

            <button
                type="submit"
                className={
                    "bg-periwinkle rounded-r-3xl px-2 h-[44px] w-20 -ml-[5.1rem] uppercase text-white hover:bg-periwinkle-dark active:bg-indigo"
                }
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    );
}
