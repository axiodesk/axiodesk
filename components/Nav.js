import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineBars } from 'react-icons/ai'


const Nav = () => {
  const [open, setOpen] = useState(false)
  const toggle= () =>{
    return setOpen(!open)
  }
  return (
    <nav
      className={`h-16 px-5 lg:px-16 2xl:px-80 w-full bg-white flex justify-between items-center fixed top-0 left-0 z-50 shadow-xl`}>
      <div className="logo cursor-pointer flex justify-center items-center gap-2">
        <img src="/img/logo.png" alt="Logo" className="w-7" />
        <img
          src="/img/logo_text.png"
          alt="Logo"
          className="hidden md:block w-32"
        />
      </div>
      <div className={open ? `links lg:hidden` : `hidden lg:block`}>
        <ul
          className={
            open
              ? `absolute top-16 left-1/2 -translate-x-1/2 flex justify-center items-center py-8 gap-5 flex-col bg-white w-[90%] rounded-sm shadow-xl`
              : `relative flex gap-8`
          }>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/service">Services</Link>
          </li>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/project">Projects</Link>
          </li>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/">Testimony</Link>
          </li>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/blog/">Blog</Link>
          </li>
          <li className="hover:text-[#ee3e38] transition-all duration-300">
            <Link href="/contact">Contact</Link>
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

export default Nav