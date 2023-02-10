import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div className="bg-[url(/img/bg.svg)] w-full h-[calc(100vh-64px)] bg-right-bottom bg-no-repeat bg-[80vw_auto] 2xl:bg-auto mt-16">
      <div className="container px-5 lg:px-16 2xl:px-80 h-[calc(90vh-64px)] w-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl xl:text-[80px] w-full 2xl:w-[1000px] font-bold md:mt-10 2xl:mt-0 text-gray-800">
          A leading advertising agency in Wichita Falls
        </h1>
        <p className="my-5 md:text-xl xl:text-2xl text-gray-500">
          Making your brand shine, one campaign at a time.
        </p>
        <div className="cursor-pointer border border-[#7C0221] py-2 px-6 mt-5 text-[#7C0221] uppercase tracking-widest text-sm font-semibold hover:bg-[#7C0221] hover:text-white transition-all duration-300">
          <Link href="#services">
            Learn More <span className="ml-3">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero