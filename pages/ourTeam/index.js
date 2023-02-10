import React from 'react'
import Link from 'next/link'


import CustomHead from '@/components/CustomHead'
import Nav from '@/components/Nav'
import Header from '@/components/Header'

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function index() {
    const teamData = [
      {
        id: 1,
        memberName: "Abu Bakkar Hawladar",
        designation: "CEO",
        image: "/img/profilePicture/abubakkar.png",
      },
      {
        id: 2,
        memberName: "Bidhan",
        designation: "CEO",
        image: "/img/profilePicture/Bidhan.jpeg",
      },
      {
        id: 3,
        memberName: "Omur",
        designation: "CEO",
        image: "/img/profilePicture/Omur.jpg",
      },
      {
        id: 4,
        memberName: "Roaida",
        designation: "CEO",
        image: "/img/profilePicture/Roaida.jpeg",
      },
      {
        id: 5,
        memberName: "Saberul",
        designation: "CEO",
        image: "/img/profilePicture/Saberul.jpeg",
      },
    ];
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
              {teamData.map((td) => (
                <div className="member" key={td.id}>
                  <img
                    src={`${td.image}`}
                    alt="Profile picture"
                    className="w-48 h-48 md:w-72 md:h-72 xl:w-72 xl:h-96 rounded-xl flex justify-center items-center object-cover cursor-pointer hover:scale-105 transition-all duration-200 hover:shadow-2xl"
                  />
                  <h1 className="mt-3 text-lg md:text-xl text-[#7C0221] text-center">
                    {td.memberName}
                  </h1>
                  <h3 className="text-lg md:text-xl text-gray-500 text-center">
                    {td.designation}
                  </h3>
                  <div className="flex justify-center items-center gap-5 mt-2">
                    <Link
                      href={`#`}
                      className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#7C0221] transition-all duration-200 hover:scale-110">
                      <AiFillFacebook />
                    </Link>
                    <Link
                      href={`#`}
                      className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#7C0221] transition-all duration-200 hover:scale-110">
                      <AiFillTwitterSquare />
                    </Link>
                    <Link
                      href={`#`}
                      className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#7C0221] transition-all duration-200 hover:scale-110">
                      <AiFillInstagram />
                    </Link>
                    <Link
                      href={`#`}
                      className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#7C0221] transition-all duration-200 hover:scale-110">
                      <AiFillLinkedin />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default index