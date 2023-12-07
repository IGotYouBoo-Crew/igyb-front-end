import React from 'react'
import { images } from '../constants';
import { IoPersonSharp } from "react-icons/io5";


const Header = () => {
  return (
    <section>
        <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
            <div>
                <img src={images.Logo} alt="Logo" />
            </div>
            <div className='flex gap-x-9 items-center'>
                <ul className='flex gap-x-9 font-semibold'>
                    <li>
                        <a href='/' >About</a>
                    </li>
                    <li>
                        <a href='/' >Forum</a>
                    </li>
                    <li>
                        <a href='/' >Events</a>
                    </li>
                    <li>
                        <a href='/' >Contact</a>
                    </li>
                </ul>
                <button>
                    <IoPersonSharp size={20}/>
                </button>
            </div>
        </header>
    </section>
  )
}

export default Header;