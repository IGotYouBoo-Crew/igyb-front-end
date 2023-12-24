import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
    return (
        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap uppercase ">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="text-white opacity-70 hover:underline text-xs"
                >
                    <Link to={item.link}>{item.name}</Link>
                    {index !== data.length - 1 && (
                        <span className="px-3">/</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumbs;
