import React from "react";
import Link from "next/link";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function About() {
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
    <div className="pt-32 pb-10 px-5 lg:px-16 2xl:px-80" id="about">
      <div>
        <span className="text-[#ee3e38] text-md 2xl:text-2xl font-semibold uppercase">
          Hi there!
        </span>
        <div className="flex justify-between items-start flex-col md:flex-row gap-5 md:gap-0 mt-2">
          <div>
            <h1 className="text-2xl md:text-4xl text-gray-800 font-bold w-full md:w-2/3 ">
              Do you have a product or service to market on the Internet?
            </h1>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-500 mb-5">
              Welcome to the world of endless possibilities! In this digital
              era, Marketing is about more than just reaching out. With the help
              of the Internet, Artificial Intelligence, and web tools, we can do
              so much we could not do yesterday! Yes, every day is a new day for
              Digital Marketing. Reach us out today to learn how a flexible and
              expandable team of digital marketers like ours can change the
              game!
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="border border-[#ee3e38] py-2 px-6 mt-5 text-[#ee3e38] uppercase tracking-widest text-sm font-semibold hover:bg-[#ee3e38] hover:text-white transition-all duration-300">
                Read More <span className="ml-3">&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-48 ">
        <span className="text-[#ee3e38] text-md 2xl:text-2xl font-semibold uppercase">
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
                <h1 className="mt-3 text-lg md:text-xl text-[#ee3e38]">
                  {td.memberName}
                </h1>
                <h3 className="text-lg md:text-xl text-gray-500">
                  {td.designation}
                </h3>
                <div className="flex justify-center items-center gap-5 mt-2">
                  <Link
                    href={`#`}
                    className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#ee3e38] transition-all duration-200 hover:scale-110">
                    <AiFillFacebook />
                  </Link>
                  <Link
                    href={`#`}
                    className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#ee3e38] transition-all duration-200 hover:scale-110">
                    <AiFillTwitterSquare />
                  </Link>
                  <Link
                    href={`#`}
                    className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#ee3e38] transition-all duration-200 hover:scale-110">
                    <AiFillInstagram />
                  </Link>
                  <Link
                    href={`#`}
                    className="text-2xl text-gray-800 hover:animate-pulse hover:text-[#ee3e38] transition-all duration-200 hover:scale-110">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
