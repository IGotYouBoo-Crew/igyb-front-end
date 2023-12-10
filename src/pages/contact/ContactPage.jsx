import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="bg-honey rounded-3xl relative px-20 py-10 md:px-40 lg:px-56 text-center text-white">
        <div>
          <h1 className="text-2xl font-bold">CONTACT US</h1>
        </div>
        <section className="py-10 lg:py-20 flex flex-col md:flex-row justify-around text-center md:text-left">
          <div className="w-60 md:w-100 pb-10">
            <h1 className="text-2xl font-bold ">GET IN TOUCH</h1>
            <div className="">
              <HiOutlineMail className="w-6 h-6 place-self-center md:items-left" />
              <a href="mailto:admin@igotyouboo.com" target="_blank" rel="noopener" className="mt-7 text-lg underline">admin@igotyouboo.com</a>
              <HiOutlinePhone className="w-6 h-6" />
              <p className="text-lg">+61 1234 567 890</p>
            </div>
		  </div> 
          <div className="w-60 md:w-100">
              <h1 className="text-2xl font-bold ">FIND US</h1>
              <div className="">
                <HiOutlineLocationMarker className="w-6 h-6" />
                <a href="https://maps.app.goo.gl/7yQFAqk4efkZQXZQ8" target="_blank" rel="noopener" className=" mt-7 text-lg underline">42 Wallaby Way</a><br />
                <a href="https://maps.app.goo.gl/7yQFAqk4efkZQXZQ8" target="_blank" rel="noopener" className=" mt-7 text-lg underline">Sydney, Australia</a>
              </div>
          </div>
        </section>
		<img className= 'rounded-3xl' src={images.ContactImage} alt="Girls whispering" />
      </section>
    </MainLayout>
  );
};

export default ContactPage;

/*
{
   <div className="md:h-160 -mt-6 w-screen bg-cover bg-center flex flex-col justify-center items-center md:flex-row-reverse">
	<img
		className="md:w-1/2 md:h-full md:object-cover"
		src={images.EventsHero}
		alt="Girls laughing"
	/>
	<div className="h-full bg-background  text-sea flex flex-col px-10 lg:px-20 py-12 justify-center items-center md:items-start">
		<h2 className="text-center md:text-left md:mt-6 font-bold ">
		WANTING TO MEET LIKE-MINDED PEOPLE?
		</h2>
		<h1 className="mt-2 font-bold text-2xl md:text-3xl text-center md:text-left">
		COME TO ONE OF OUR MEET UP EVENTS
		</h1>
		<p className="mt-4 text-center md:text-left">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
		enim ad minim veniam, quis nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur
		adipiscing elit, sed do eiusmod tempor incididunt ut labore et
		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
		exercitation ullamco laboris nisi ut aliquip ex ea
		</p>
		
	</div>
</div> 
}*/
