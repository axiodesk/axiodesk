import React from "react";
import Link from "next/link";

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";
import { PortableText } from "@portabletext/react";

import CustomHead from "@/components/CustomHead";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function project({ projects }) {
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

  return (
    <>
      <CustomHead pageName="Project" />

      <Nav />
      <Header title={`Projects`} />

      <main className="px-5 lg:px-16 2xl:px-80 pb-16 md:py-20">
        <div className="space-y-32 mt-20">
          {projects.map((p) => (
            <div
              className="flex justify-start items-center gap-16 flex-col md:flex-row"
              key={p._id}>
              <div className="img relative bg-cyan-200">
                <img
                  src="/img/strippedLine.svg"
                  alt="Line"
                  className="absolute -top-8 left-0 md:-left-8 -z-10 "
                />
                <img
                  src={urlFor(p.image)}
                  alt="Project Image"
                  className="z-10 max-w-full h-auto"
                />
                <img
                  src="/img/strippedLine1.svg"
                  alt="Line"
                  className="absolute -bottom-8 right-0 md:-right-8  -z-10"
                />
              </div>
              <div className="text md:ml-24 flex-1">
                <h1 className="text-xl md:text-2xl font-extrabold text-[#7C0221] mb-4">
                  {p.title}
                </h1>
                <div className="w-full md:w-4/5 text-sm md:text-base text-gray-500 font-light mb-10">
                  <PortableText value={p.body} components={ptComponents} />
                </div>
                <Link
                  href={`${p.youtubeLink}`}
                  className="text-sm md:text-base py-3 px-8 border-[1px] border-[#7C0221] text-[#7C0221] hover:text-white hover:bg-[#7C0221] transition-all duration-300">
                  Watch Video <span className="ml-3">&#8594;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
          
      {/* Footer */}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(groq`
      *[_type == "projects"] | order(_createdAt asc)
    `);
  return {
    props: {
      projects,
    },
  };
}

export default project;
