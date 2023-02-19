import React from "react";
import Link from "next/link";
import groq from "groq";

import client from "../../lib/client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CustomHead from "@/components/CustomHead";

import { MdOutlineWorkOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";

function index({ jobs }) {
  // console.log(jobs);
  return (
    <>
      <CustomHead pageName={`Career`} />
      <Nav />
      <Header title={`Recent Jobs`} />

      <main className="px-5 lg:px-16 2xl:px-80 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {jobs.map((j) => (
            <div key={j._id}>
              <Link
                className="jobContent flex justify-start items-center bg-gray-100/50 p-3 rounded-sm"
                href={`/career/${j.slug.current}`}>
                <div className="p-3 xl:p-5 bg-gray-200 mr-2 md:mr-5 xl:mr-10">
                  <MdOutlineWorkOutline className="text-2xl xl:text-4xl text-gray-600" />
                </div>
                <div>
                  <h4 className="xl:text-2xl font-bold text-gray-800">
                    {j.jobTitle}
                  </h4>
                  <div className="flex items-center gap-3 xl:gap-10 mt-2">
                    <div className="flex justify-start items-center gap-2">
                      <GoLocation className="text-xl font-bold text-gray-800" />
                      <p className="font-light">{j.location}</p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <AiOutlineDollarCircle className="text-xl font-bold text-gray-800" />
                      <p className="font-light">{j.salary}</p>
                    </div>
                  </div>
                </div>
                <div className="ml-auto py-1 px-2 md:py-2 md:px-4 bg-emerald-200 rounded-sm border-[1px] border-emerald-500">
                  <p className="text-gray-800">{j.jobType}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const jobs = await client.fetch(groq`
      *[_type == "career" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      jobs,
    },
  };
}

export default index;
