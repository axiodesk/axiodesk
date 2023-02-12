import React from "react";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";

import client from "../../lib/client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CustomHead from "@/components/CustomHead";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function index({ posts, categories }) {
  console.log("Posts, ", posts)
  console.log("Categoires, ", categories)

  return (
    <>
      <CustomHead pageName="Blog" />
      <Nav />
      <Header title={`Our Story`} />
      <main className="px-5 lg:px-16 2xl:px-80 py-16 md:py-20 border-t-[1px]">
        {/* <h2>{router.query.slug}</h2> */}
        <div className="flex justify-start items-start gap-10">
          <div className="blog lg:border-r-[1px]  md:pr-10">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug.current}`} key={post._id}>
                <div className="blog_content flex justify-between items-center gap-10 mb-5 border-b-[1px] border-gray-200 pb-5">
                  <div className="w-full">
                    <h1 className="font-bold md:text-xl lg:text-3xl ">
                      {post.title}
                    </h1>
                    {/* <p className="hidden sm:block mt-5 text-gray-500">
                    </p> */}
                  </div>
                  <div>
                    <img
                      src={`${urlFor(post.mainImage)}`}
                      alt="Blog Image"
                      className="w-[200px] h-[100px] md:w-80 md:h-32 object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="topics hidden lg:block w-1/3">
            <h3 className="text-gray-800 font-semibold mb-3">
              Recommended Topics
            </h3>
            <div className="flex justify-start items-start flex-wrap gap-2">
              {categories &&
                categories.map((c) => (
                  <span className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full" key={c._id}>
                    {c.title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  const categories = await client.fetch(groq`
      *[_type == "category"]
    `);
  return {
    props: {
      posts,
      categories,
    },
  };
}

export default index;
