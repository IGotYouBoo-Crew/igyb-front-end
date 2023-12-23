import { FiSearch } from "react-icons/fi";

export default function SearchBar({
    location = "forum",
    searchTarget = "post",
    onChange = () => {},
    onSearch = () => {},
    searchableValues = {},
    className = "",
}) {
    return (
        <div className={className}>
            <div className="flex flex-row justify-center items-center w-10/12 md:w-3/4 2xl:w-1/2 mx-auto my-auto pt-4  rounded-3xl">
                <FiSearch className="h-6 w-6 -mr-8 z-10 text-[#959EAD] " />
                <input
                    type="search"
                    placeholder={
                        window.innerWidth <= 400
                            ? `Search ${location}`
                            : `Search ${location} for ${searchTarget}s`
                    }
                    className=" h-full w-full px-9 py-3 rounded-3xl text-base focus:outline-indigo capitalize shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
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
        </div>
    );
}
