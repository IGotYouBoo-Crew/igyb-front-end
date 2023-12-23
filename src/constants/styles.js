export const buttonStyle = {
    default:
        "w-fit py-2 px-4 rounded-3xl mx-auto capitalize delay-50 duration-200 transition-all ease-in-out ",
    subtle: "rounded-lg px-4 py-2 mb-4 duration-300 transition-all ease-in-out bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-90 ",
};

export const inputStyle = {
    default:
        "focus:outline text-black placeholder:text-sm md:placeholder:text-base mx-2 rounded-3xl pl-5 pr-3 py-3 mt-2 mb-4 placeholder:uppercase ",
    smaller:
        "focus:outline text-black placeholder:text-sm md:placeholder:text-base mx-2 rounded-3xl pl-4 py-1  md:py-2 mt-2 mb-4 placeholder:uppercase ",
    search: "outline-indigo"
};

export const containerStyle = {
    card: "",
    modal: "",
    account:
        "h-fit p-8 min-h-8/12 w-full min-w-fit rounded-3xl flex flex-col items-center justify-center duration-300 transition-all ease-in-out ",
};

export const imageStyle = {
    profilePicture: "ml-2 h-9 w-9 rounded-full object-cover ",
};

export const disneyStudios = {
    fadeAway: {
        true: " animate-fade-away [&>*]:animate-fade-away ",
        false: "",
    },
    fadeAndGrow: {
        true: "",
        false: ""
    }
};
