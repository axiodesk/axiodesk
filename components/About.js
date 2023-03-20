import React from "react";
import Link from "next/link";



function About() {
  

  return (
    <div className="pt-32 pb-10 px-5 lg:px-16 2xl:px-80" id="about">
      <div>
        <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
          Hi there!
        </span>
        <div className="flex justify-between items-start flex-col md:flex-row gap-5 md:gap-0 mt-2">
          <div>
            <h1 className="text-2xl md:text-4xl text-gray-800 font-bold w-full md:w-2/3 ">
            Your Partner for Digital Success
            </h1>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-500 mb-5">
            At AxioDesk, we're dedicated to helping businesses like yours thrive in the digital world. With our team of experts and cutting-edge solutions, we're here to help you achieve your business goals and drive results.
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="border border-[#7C0221] py-2 px-6 mt-5 text-[#7C0221] uppercase tracking-widest text-sm font-semibold hover:bg-[#7C0221] hover:text-white transition-all duration-300">
                Read More <span className="ml-3">&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
