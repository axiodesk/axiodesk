import React from "react";
import Head from "next/head";
import Link from "next/link";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function index() {
  const data = [
    {
      id: 1,
      title: "6 ChatGPT mind-blowing extensions to use it anywhere",
      desc: "Today, I want to demystify ChatGPT — a fascinating new AI application that has been recently released and is generating a lot of buzz. It is an AI chatbot developed by OpenAI that specializes in dialogue and its main goal is to make AI systems more natural to interact with — and it literally knows everything!",
      image: "/img/blog/b1.webp",
      categories: ["Data Science", "Technology", "Writing"],
    },
    {
      id: 2,
      title: "Hey ChatGPT, Automate These Tasks Using Python",
      desc: "Recently ChatGPT was released. This is an AI chatbot developed by OpenAI that specializes in dialogue. Its goal is to make AI systems more natural to interact with, but it can also help you when writing code.",
      image: "/img/blog/b2.webp",
      categories: ["Data Science", "Technology", "Writing"],
    },
    {
      id: 3,
      title: "Python 3.11: New Features That You Will Truly Enjoy",
      desc: "Python 3.11 was out on October 24, 2022, offering some fascinating improvements for us to tinker with. You can see a full documentation of all PEPs here. In this article, I will bring to you 5, plus a bonus, cool new features that I think you will appreciate.",
      image: "/img/blog/b3.webp",
      categories: ["Data Science", "Technology", "Writing"],
    },
  ];
  return (
    <>
      <Head>
        <title>Axiodesk</title>
        <meta name="description" content="Axiodesk - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./img/logo.png" />
      </Head>
      <Nav />
      <Header title={`Our Story`} />
      <main className="px-5 lg:px-16 2xl:px-80 py-16 md:py-20 border-t-[1px]">
        <div className="flex justify-start items-start gap-10">
          <div className="blog lg:border-r-[1px]  md:pr-10">
            <Link href={`/blog/`}>
              <div className="blog_content flex justify-center items-center gap-10 mb-5 border-b-[1px] border-gray-200 pb-5">
                <div className="w-full md:w-3/4">
                  <h1 className="font-bold md:text-xl lg:text-2xl ">
                    {data[0].title}
                  </h1>
                  <p className="hidden sm:block mt-5 text-gray-500">
                    {data[0].desc}
                  </p>
                </div>
                <div>
                  <img
                    src={`${data[0].image}`}
                    alt="Blog Image"
                    className="w-[200px] h-[100px] md:w-80 md:h-48 object-cover"
                  />
                </div>
              </div>
            </Link>
            <Link href={`/blog/`}>
              <div className="blog_content flex justify-center items-center gap-10 mb-5 border-b-[1px] border-gray-200 pb-5">
                <div className="w-full md:w-3/4">
                  <h1 className="font-bold md:text-xl lg:text-2xl ">
                    {data[1].title}
                  </h1>
                  <p className="hidden sm:block mt-5 text-gray-500">
                    {data[1].desc}
                  </p>
                </div>
                <div>
                  <img
                    src={`${data[1].image}`}
                    alt="Blog Image"
                    className="w-[200px] h-[100px] md:w-80 md:h-48 object-cover"
                  />
                </div>
              </div>
            </Link>
            <Link href={`/blog/`}>
              <div className="blog_content flex justify-center items-center gap-10 mb-5 border-b-[1px] border-gray-200 pb-5">
                <div className="w-full md:w-3/4">
                  <h1 className="font-bold md:text-xl lg:text-2xl ">
                    {data[2].title}
                  </h1>
                  <p className="hidden sm:block mt-5 text-gray-500">
                    {data[2].desc}
                  </p>
                </div>
                <div>
                  <img
                    src={`${data[2].image}`}
                    alt="Blog Image"
                    className="w-[200px] h-[100px] md:w-80 md:h-48 object-cover"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="topics hidden lg:block">
            <h3 className="text-gray-800 font-semibold mb-3">
              Recommended Topics
            </h3>
            <div className="flex justify-start items-start flex-wrap gap-2">
              <span className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full">
                Data Science
              </span>
              <span className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full">
                Technology
              </span>
              <span className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full">
                Writing
              </span>
              <span className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full">
                Self Improvement
              </span>
              <span className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full">
                Mechine Learning
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default index;
