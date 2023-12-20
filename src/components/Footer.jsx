import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='-mt-6 bg-background -z-30'>
      <footer>
        <div className='text-sea px-5 md:px-28 lg:px-40 pt-12 pb-8 flex justify-around text-center'>
          <div className='w-32 md:w-40'>
            <h1 className='text-sm font-bold md:text-base uppercase'>Contact us</h1>
            <a href="mailto:admin@igotyouboo.com" target="_blank" rel="noreferrer" className="text-xs mt-1 md:text-sm underline">admin@igotyouboo.com</a>
            <p className="text-xs mt-1 md:text-sm">+61 1234 567 890</p>
          </div>
          <div className='w-32 md:w-40'>
            <h1 className='text-sm font-bold md:text-base uppercase'>Find us</h1>
            <a href="https://maps.app.goo.gl/7yQFAqk4efkZQXZQ8" target="_blank" rel="noreferrer" className="text-xs mt-1 md:text-sm underline">42 Wallaby Way, Sydney</a><br />
            <a href="https://maps.app.goo.gl/7yQFAqk4efkZQXZQ8" target="_blank" rel="noreferrer" className="text-xs mt-1 md:text-sm underline">NSW, Australia</a>
          </div>
        </div>
        <div className='bg-indigo text-white flex justify-between px-3 md:px-6 lg:px-12 py-4 text-sm lg:text-base'>
          <h1>©2023 I Got You, Boo</h1>
          <div className='flex justify-between gap-5 md:gap-10 lg:gap-12'>
            <NavLink to="/terms-and-conditions" >T&C's</NavLink>
            <NavLink to="/privacy-policy" >Privacy Policy</NavLink>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;