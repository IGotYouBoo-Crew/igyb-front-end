import React, { useState } from 'react'
import { images } from '../constants';
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const navItemsInfo = [
    {name: "ABOUT"},
    {name: "FORUM"}, 
    {name: "EVENTS"},
    {name: "CONTACT"},
]

const NavItem = ({name}) => {
    return (
        <li className='relative group'>
            <a href='/' className='px-4 py-2' >
                {name}
            </a>
            <span className='cursor-pointer text-white absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
                /
            </span>
        </li>
    )
}

const Header = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState
        })
    }

    return (
        <section className='sticky top-0 left-0 right-0 z-50'>
            <header className='bg-indigo mx-auto px-5 flex justify-between py-4 items-center'>
                <div>
                    <a href="/">
                        <img className='h-10' src={images.Logo} alt="Logo" />
                    </a>
                </div>
                <div className='z-50 lg:hidden text-white'>
                    {navIsVisible ? (
                        <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} /> 
                    ) : (
                        <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
                    )}
                </div>
                <div className={`${
                    navIsVisible ? "right-0" : "-right-full "
                    } transition-all duration-300 mt-[56px] lg:mt-0 bg-indigo lg:bg-transparent z-49 flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center text-white`}
                >
                    <ul className=' items-center gap-y-5 flex flex-col lg:flex-row gap-x-7 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} name={item.name}/>
                        ))}
                    </ul>
                    <button className='mt-5 lg:mt-0'>
                        <IoPersonSharp size={20}/>
                    </button>
                </div>
            </header>
        </section>
    )
}

export default Header;