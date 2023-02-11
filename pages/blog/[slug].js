import React from "react";
import Head from "next/head";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import client from "../../lib/client";

import Nav from "@/components/Nav";
import Header from "@/components/Header";

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
};

function Details({ post }) {
  // console.log(post.body)
  const { title = "Missing Title", categories, postImage, body = [] } = post;
  return (
    <>
      <Head>
        <title>Axiodesk</title>
        <meta name="description" content="Axiodesk - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./img/logo.png" />
      </Head>
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
            <div className="mt-5 w-full">
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
            href={`/`}
            className="py-3 px-8 border-[1px] border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 text-lg">
            <span className="mr-3">&#8592;</span> Back to all post
          </Link>
        </div>
      </main>
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
