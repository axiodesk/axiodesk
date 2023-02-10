import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="bg-[#1f2937] text-gray-300 pt-20 px-5 lg:px-16 2xl:px-80">
        <div className="footer text-center sm:text-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="logo flex justify-center sm:justify-between items-center sm:items-start flex-col gap-5">
            <img src="/img/axioLogoLight.png" alt="Logo" className="w-32 md:w-48" />
          </div>
          <div className="links">
            <h2 className="text-[#7C0221] md:text-xl 2xl:text-2xl font-bold">
              Useful Links
            </h2>
            <div className="mt-2 uppercase text-gray-300 text-sm space-y-3">
              <div>
                <Link href={``}>About</Link>
              </div>
              <div>
                <Link href={``}>Services</Link>
              </div>
              <div>
                <Link href={``}>Projects</Link>
              </div>
              <div>
                <Link href={``}>Blog</Link>
              </div>
            </div>
          </div>
          <div className="contact">
            <h2 className="text-[#7C0221] font-bold md:text-xl 2xl:text-2xl">
              Keep in touch
            </h2>
            <div className="mt-2 space-y-3">
              <p>123 Demo St, San Fransisco, CA 45678, United States.</p>
              <p>+1 123-456-7890</p>
              <p>mail@example.com</p>
            </div>
          </div>
        </div>

        <p className="py-2 mt-14 uppercase text-center text-gray-500/100">&copy; Axiodesk, {new Date().getFullYear()} </p>
      </div>
    </>
  );
}

export default Footer;
