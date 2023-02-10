import React from 'react'
import Link from 'next/link';

import CustomHead from '@/components/CustomHead';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


function project() {
  return (
    <>
      <CustomHead pageName="Project" />

      <Nav />
      <Header title={`Projects`} />

      <main className="px-5 lg:px-16 2xl:px-80 pb-16 md:py-20">
        <div className="space-y-32 mt-20">
          <div className="flex justify-start items-center gap-16 flex-col md:flex-row">
            <div className="img relative bg-cyan-200">
              <img
                src="/img/strippedLine.svg"
                alt="Line"
                className="absolute -top-8 left-0 md:-left-8 -z-10 "
              />
              <img
                src="/img/projects/p1.jpg"
                alt=""
                className="z-10 max-w-full h-auto"
              />
              <img
                src="/img/strippedLine1.svg"
                alt="Line"
                className="absolute -bottom-8 right-0 md:-right-8  -z-10"
              />
            </div>
            <div className="text md:ml-24 flex-1">
              <h1 className="text-xl md:text-3xl font-extrabold text-[#7C0221] mb-4">
                Nyooh Pizza
              </h1>
              <p className="w-full md:w-4/5 md:text-lg text-gray-500 font-light mb-10">
                Consectetur dui massa, at augue maecenas augue suscipit a nec
                praesent orci scelerisque nisi, ac egestas suscipit in enim
                ultricies turpis consequat arcu.
              </p>
              <Link
                href={`/`}
                className="py-3 px-8 border-[1px] border-[#7C0221] text-[#7C0221] hover:text-white hover:bg-[#7C0221] transition-all duration-300 text-lg">
                Watch Video <span className="ml-3">&#8594;</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-start items-center gap-16 flex-col md:flex-row-reverse">
            <div className="img relative bg-cyan-200">
              <img
                src="/img/strippedLine.svg"
                alt="Line"
                className="absolute -top-8 left-0 md:-left-8 -z-10 "
              />
              <img
                src="/img/projects/p2.jpg"
                alt=""
                className="z-10 max-w-full h-auto"
              />
              <img
                src="/img/strippedLine1.svg"
                alt="Line"
                className="absolute -bottom-8 right-0 md:-right-8  -z-10"
              />
            </div>
            <div className="text md:ml-24 flex-1">
              <h1 className="text-xl md:text-3xl font-extrabold text-[#7C0221] mb-4">
                Culeet Skincare
              </h1>
              <p className="w-full md:w-4/5 md:text-lg text-gray-500 font-light mb-10">
                Consectetur dui massa, at augue maecenas augue suscipit a nec
                praesent orci scelerisque nisi, ac egestas suscipit in enim
                ultricies turpis consequat arcu.
              </p>
              <Link
                href={`/`}
                className="py-3 px-8 border-[1px] border-[#7C0221] text-[#7C0221] hover:text-white hover:bg-[#7C0221] transition-all duration-300 text-lg">
                Watch Video <span className="ml-3">&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default project