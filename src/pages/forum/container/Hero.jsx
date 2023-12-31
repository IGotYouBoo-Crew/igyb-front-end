import React from "react";
import { images } from "../../../constants";
import PostFormContainer from "../../../components/posts/PostFormContainer";

const Hero = () => {
    return (
        <section className="relative bg-honey pb-3">
            <img
                className="z-10 relative -mt-6 w-full"
                src={images.ForumImage}
                alt="Forum Header"
            />
            <div className="px-10 bg-honey rounded-t-3xl z-30 lg:px-28 py-10 text-white relative -mt-6 flex flex-col items-center md:flex-row md:items-start md:justify-between">
                <div className="md:w-1/2 flex flex-col text-center md:text-left">
                    <h2 className="md:mt-6 text-base font-bold uppercase">
                        Need Some Advice?
                    </h2>
                    <h1 className="mt-2 font-bold text-3xl md:text-4xl uppercase">
                        Welcome to the Forum
                    </h1>
                    <p className="mt-4 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate.
                    </p>
                </div>
                <PostFormContainer />
            </div>
        </section>
    );
};

export default Hero;
