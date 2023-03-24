import React from 'react'
import Link from 'next/link'
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../lib/client";


import CustomHead from '@/components/CustomHead'
import Nav from '@/components/Nav'
import Header from '@/components/Header'



function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function index({team}) {
  return (
    <>
      <CustomHead pageName="Our Team" />
      <Nav />
      <Header title={`Our Team`} />

      <main className="pb-10 px-5 lg:px-16 2xl:px-80 ">
        <div className="mt-48 ">
          <span className="text-[#7C0221] text-sm md:text-base lg:text-lg font-semibold uppercase">
            About Us
          </span>
          <div className="">
            <div className="">
              <h1 className="text-2xl md:text-4xl text-gray-800 font-bold w-full mt-2">
              Meet Our Team of Experts
              </h1>
              <p className="text-gray-500 w-full md:w-2/3 mt-2 text-sm md:text-base">
              Our team of experienced professionals is dedicated to delivering exceptional solutions that drive results. Get to know our diverse backgrounds and skill sets and see how we can help take your business to the next level.
              </p>
            </div>

            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
              {team.map((td) => (
                <div key={td._id}>
                  <Link href={`/ourTeam/${td.slug.current}`}>
                    <div className="member">
                      <div>
                        {td.image && (
                          <img
                            src={urlFor(td.image)}
                            alt="Profile picture"
                            className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-72 rounded-xl flex justify-center items-center object-cover cursor-pointer hover:scale-105 transition-all duration-200 hover:shadow-2xl"
                          />
                        )}
                      </div>
                      <div className="mt-3 text-[#7C0221] text-left text-sm md:text-base 2xl:text-lg">
                        {td.name}
                      </div>
                      <div className='text-xs md:text-sm 2xl:text-base'>
                        {td.designation}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const team = await client.fetch(groq`
      *[_type == "team"] | order(_createdAt asc){
        _id,
        name,
        slug,
        designation,
        image
      }
    `);
  return {
    props: {
      team,
    },
  };
}

export default index