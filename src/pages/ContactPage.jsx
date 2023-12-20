import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import MainLayout from "../components/MainLayout";
import { images } from "../constants";

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="bg-honey rounded-3xl relative px-20 py-10 md:px-40 lg:px-56 text-center text-white">
        <div>
          <h1 className="text-2xl font-bold uppercase">Contact us</h1>
        </div>
        <section className="py-10 lg:py-20 flex flex-col items-center md:flex-row md:justify-between md:items-start text-center md:text-left">
          <div className="w-60 md:w-100 pb-10">
            <h1 className="text-2xl font-bold uppercase">Get in touch</h1>
            <div className="flex flex-row mt-7">
              <HiOutlineMail className="w-6 h-6 mr-4 place-self-center md:items-left" />
              <a
                href="mailto:admin@igotyouboo.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg underline"
              >
                admin@igotyouboo.com
              </a>
            </div>
            <div className="flex flex-row">
              <HiOutlinePhone className="w-6 h-6 mr-4" />
              <p className="text-lg">+61 1234 567 890</p>
            </div>
          </div>
          <div className="w-60 md:w-100">
            <h1 className="text-2xl font-bold uppercase">Find us</h1>
            <div className="flex flex-row mt-7">
              <HiOutlineLocationMarker className="w-6 h-6 place-self-center md:items-left" />
              <a
                href="https://maps.app.goo.gl/7yQFAqk4efkZQXZQ8"
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-lg underline"
              >
                42 Wallaby Way, Sydney
              </a>
              <br />
            </div>
            <div className="flex flex-row">
              <a
                href="https://maps.app.goo.gl/7yQFAqk4efkZQXZQ8"
                target="_blank"
                rel="noreferrer"
                className="ml-9 text-lg underline"
              >
                NSW, Australia
              </a>
            </div>
          </div>
        </section>
        <img
          className="rounded-3xl"
          src={images.ContactImage}
          alt="Girls whispering"
        />
      </section>
    </MainLayout>
  );
};

export default ContactPage;
