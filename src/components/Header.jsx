import React, { useContext, useEffect, useState } from "react";
import { images } from "../constants";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import getCookieResponse from "./accounts/functions/getCookieResponse";

const navItemsInfo = [
  { name: "About" },
  { name: "Forum" },
  { name: "Events" },
  { name: "Contact" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <NavLink to={`/${name}`} className="px-4 py-2">
        {name.toUpperCase()}
      </NavLink>
      <span className="cursor-pointer text-white absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  let { userData, setUserData } = useContext(UserContext);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  useEffect(() => {
    checkCookie();
    // eslint-disable-next-line
  }, []);

  async function checkCookie() {
    const responseData = await getCookieResponse();
    if (!responseData.username) {
      setUserData(false);
    } else {
      setUserData(responseData);
    }
    return responseData;
  }

  return (
    <section className="sticky top-0 left-0 right-0 z-40">
      <header className="bg-indigo z-40 mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <NavLink to="/">
            <img className="h-10" src={images.Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="z-40 lg:hidden text-white">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full "
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-indigo lg:bg-transparent flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center text-white`}
        >
          <ul className=" items-center gap-y-5 flex flex-col lg:flex-row gap-x-7 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <NavLink to="/sign-in">
            <button className="mt-5 lg:mt-0 flex flex-col items-center">
              <IoPersonSharp size={20} />
              {userData ? userData.username : ""}
            </button>
          </NavLink>
        </div>
      </header>
    </section>
  );
};

export default Header;
