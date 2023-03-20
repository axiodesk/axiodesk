import React from "react";
import Head from "next/head";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import client from "../../lib/client";

import Nav from "@/components/Nav";
import Header from "@/components/Header";
import CustomHead from "@/components/CustomHead";
import Footer from "@/components/Footer";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-3xl font-bold pt-10">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold pt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold pt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold pt-4">{children}</h4>
    ),
    normal: ({ children }) => <p className="pt-2">{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-[#7C0221] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#7c0221] hover:decoration-black mt-5">
          {children}
        </Link>
      );
    },
  },
};

function Details({ post }) {
  // console.log(post.body)
  const { title = "Missing Title", categories, postImage, body = [] } = post;
  return (
    <>
      <CustomHead pageName={`Blog post`} />
      <Nav />
      <Header title={`Have a look ..`} />
      <main className="px-5 lg:px-16 2xl:px-80 py-5 md:py-16">
        <div className="flex justify-between items-start w-full">
          <div className="Post lg:border-r-[1px]  md:pr-10 w-full lg:w-3/4">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-extrabold mb-10">
              {title}
            </h1>
            {postImage && (
              <div className="w-full h-[500px]">
                <img
                  src={urlFor(postImage)}
                  alt="Main Image"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            )}
            <div className="mt-5 w-full text-sm md:text-md">
              <PortableText value={body} components={ptComponents} />
            </div>
          </div>
          <div className="topics hidden lg:block w-1/5 ml-10">
            <h3 className="text-gray-800 font-semibold mb-3">Categories</h3>
            <div className="flex justify-start items-start flex-wrap gap-2">
              {categories &&
                categories.map((c) => (
                  <span
                    className="py-1 px-3 bg-gray-200 text-gray-700 inline-block rounded-full"
                    id={c}>
                    {c}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Link
            href={`/blog`}
            className="py-2 px-8 border-[1px] border-[#7C0221] text-[#7C0221] hover:text-white hover:bg-[#7C0221] transition-all duration-300 text-sm md:text-md 2xl:text-lg rounded-sm">
            <span className="mr-3">&#8592;</span> Back to all post
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "postImage" : mainImage,
  body
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}

export default Details;
