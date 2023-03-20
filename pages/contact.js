import React from "react";
import Link from "next/link";

import CustomHead from "@/components/CustomHead";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function contact() {
  return (
    <>
      <CustomHead pageName="Contact" />

      <Nav />
      <Header title={`Contact`} />
      <main className="px-5 lg:px-16 2xl:px-80 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
          <div>
            <div>
              <h1 className="text-2xl md:text-3xl 2xl:text-4xl text-gray-800 font-black w-full">
              Ready to take your business to the next level?
              </h1>
              <p className="mt-5 text-gray-500 w-full  md:w-2/3 text-sm md:text-md">
              Contact us today for a free consultation and see how AxioDesk can help you achieve your goals.
              </p>
            </div>
            <div className="social mt-10">
              <div className="mb-3">
                <p className="text-xl md:text-2xl font-black text-[#7C0221] underline decoration-wavy">
                  Follow Us
                </p>
              </div>
              <div className="flex justify-start items-center gap-5">
                <Link href={``}>
                  <AiFillFacebook className="text-2xl md:text-3xl text-gray-600 hover:text-[#7C0221] transition duration-300" />
                </Link>
                <Link href={``}>
                  <AiFillLinkedin className="text-2xl md:text-3xl text-gray-600 hover:text-[#7C0221] transition duration-300" />
                </Link>
                <Link href={``}>
                  <AiFillTwitterSquare className="text-2xl md:text-3xl text-gray-600 hover:text-[#7C0221] transition duration-300" />
                </Link>
                <Link href={``}>
                  <AiFillInstagram className="text-2xl md:text-3xl text-gray-600 hover:text-[#7C0221] transition duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[500px] mt-10 md:mt-0">
            <form>
              <div className="group">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  className="p-3 bg-white border-[1px] border-gray-500 w-full sm:w-[500px]  rounded-sm mb-5 placeholder:text-xs md:placeholder:text-sm"
                />
              </div>
              <div className="group">
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="p-3 bg-white border-[1px] border-gray-500 w-full sm:w-[500px] rounded-sm mb-5 placeholder:text-xs md:placeholder:text-sm"
                />
              </div>
              <div className="group">
                <input
                  type="text"
                  placeholder="Subject *"
                  required
                  className="p-3 bg-white border-[1px] border-gray-500 w-full sm:w-[500px] rounded-sm mb-5 placeholder:text-xs md:placeholder:text-sm"
                />
              </div>
              <div className="group">
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Message *"
                  required
                  className="p-3 bg-white border-[1px] border-gray-500 w-full sm:w-[500px] rounded-sm mb-6 placeholder:text-xs md:placeholder:text-sm"></textarea>
              </div>
              <div className="btn">
                <button className="text-[#7C0221] py-2 px-8 border-[1px] border-[#7C0221] hover:bg-[#7C0221] hover:text-white transition-all duration-300 md:text-lg rounded-sm">
                  Submit <span className="ml-3">&#8594;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default contact;
