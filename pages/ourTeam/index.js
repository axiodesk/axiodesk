import React from 'react'
import Link from 'next/link'
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../lib/client";


import CustomHead from '@/components/CustomHead'
import Nav from '@/components/Nav'
import Header from '@/components/Header'

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";


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
          <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
            About Us
          </span>
          <div className="">
            <div className="">
              <h1 className="text-2xl md:text-4xl text-gray-800 font-bold w-full mt-2">
                Our Staff
              </h1>
              <p className="text-gray-500 w-full md:w-1/3 mt-2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
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
                            className="w-48 h-48 md:w-72 md:h-72 xl:w-72 xl:h-96 rounded-xl flex justify-center items-center object-cover cursor-pointer hover:scale-105 transition-all duration-200 hover:shadow-2xl"
                          />
                        )}
                      </div>
                      <div className="mt-3 text-lg md:text-xl text-[#7C0221] text-center">
                        {td.name}
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