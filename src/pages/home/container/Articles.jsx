import React, { useEffect, useState } from 'react'
import ArticleCard from '../../../components/ArticleCard'
import {FaArrowRight} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const backendURL = process.env.REACT_APP_BACKEND_URL;

const Articles = () => {

let [listOfPosts, setListOfPosts] = useState([]);

useEffect(() => {
    getAllPosts()
}, []);

async function getAllPosts() {
    let response = await fetch(backendURL + "/posts/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    
    const responseData = await response.json();

    console.log(responseData);
    setListOfPosts(responseData);
    return responseData;
}

  return (
    <section className='-mt-6 md:-mt-12 relative bg-sea rounded-3xl'>
        <div className='text-background text-center md:text-left px-10 lg:px-20 py-7'>
            <h2 className=' md:mt-6 font-bold uppercase'>Need some advice?</h2>
            <h1 className='mt-2 font-bold text-2xl md:text-3xl uppercase'>Check out the forum</h1>
        </div>
        <div className='flex flex-col container mx-auto px-5 py-10 lg:px-0'>
            <div className='flex flex-wrap justify-between md:gap-x-6 gap-y-8 pb-10 px-5'>
                {
                    listOfPosts ?
                    listOfPosts.slice(0,3).map((post, index) => {
                        return (
                            <ArticleCard 
                                postData={post} 
                                key={index} 
                                className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' 
                            />
                        )
                    })
                    :
                    ""
                }
            </div>
            <NavLink to="/forum">
                <button className='mx-auto flex items-center gap-x-2 font-bold text-background border-2 border-background px-12 py-3 rounded-3xl uppercase'>
                    <span>View more</span>
                    <FaArrowRight className='w-4 h-4'/>
                </button>
            </NavLink>
        </div>
    </section>
  );
}

export default Articles