import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineBars } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    return setOpen(!open);
  };
  return (
    <nav
      className={`h-16 px-5 lg:px-16 2xl:px-80 w-full bg-white flex justify-between items-center fixed top-0 left-0 z-50 shadow-xl`}>
      <Link href={`/`} className="logo cursor-pointer">
        <img
          src="/img/axioLogo.png"
          alt="Logo"
          className="w-32 hidden md:block"
        />
        <img src="/img/favicon.png" alt="Logo" className="w-8 md:hidden" />
      </Link>
      <div className={open ? `links lg:hidden` : `hidden lg:block lg:`}>
        <ul
          className={
            open
              ? `absolute top-16 left-1/2 -translate-x-1/2 flex justify-center items-center py-8 gap-5 flex-col bg-white w-[90%] rounded-sm shadow-xl`
              : `relative flex gap-8`
          }>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/ourTeam">Our Team</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/service">Services</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/project">Projects</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/blog/">Blog</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/career">Career</Link>
          </li>
          <li className="hover:text-[#7C0221] transition-all duration-300">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <div className="social flex justify-center items-center gap-5 text-gray-500">
              <div>
                <Link href={``}>
                  <AiFillFacebook className="text-2xl hover:text-[#7C0221] transition duration-300" />
                </Link>
              </div>
              <div>
                <Link href={``}>
                  <AiFillTwitterSquare className="text-2xl hover:text-[#7C0221] transition duration-300" />
                </Link>
              </div>
              <div>
                <Link href={``}>
                  <AiFillInstagram className="text-2xl hover:text-[#7C0221] transition duration-300" />
                </Link>
              </div>
              <div>
                <Link href={``}>
                  <AiFillLinkedin className="text-2xl hover:text-[#7C0221] transition duration-300" />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="ham cursor-pointer flex justify-center items-center gap-2 text-2xl lg:hidden"
        onClick={toggle}>
        <AiOutlineBars className="text-lg" />
        <span className="text-sm md:text-lg">MENU</span>
      </div>
    </nav>
  );
};

export default Nav;
