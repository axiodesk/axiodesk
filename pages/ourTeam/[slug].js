import React from "react";
import groq from "groq";
import client from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import CustomHead from "@/components/CustomHead";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import {FaResearchgate} from 'react-icons/fa'

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
      <h1 className="text-4xl font-bold pt-10">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold pt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold pt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold pt-4">{children}</h4>
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

function Details({ teamData }) {
  return (
    <>
      <CustomHead pageName={`Profile page`} />
      <Nav />
      <Header title={`Profile`} />

      <main className="py-20 px-5 lg:px-16 2xl:px-80">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-20">
          <div className="about">
            <h2 className="text-2xl font-bold mb-5">About Me</h2>
            <div className="mt-5 w-full text-sm md:text-md 2xl:text-lg">
              <PortableText value={teamData.bio} components={ptComponents} />
            </div>
          </div>
          <div className="img">
            {teamData.image && (
              <div className="w-[300px] h-[300px]">
                <img
                  src={urlFor(teamData.image)}
                  alt="Main Image"
                  className="w-full h-full object-cover md:rounded-full"
                />
              </div>
            )}
          </div>
          <div className="details md:ml-20">
            <h2 className="text-2xl font-bold mb-5">Details</h2>
            <p className="font-light tracking-wider mb-0 w-full inline-block text-base 2xl:text-lg">
              {teamData.name}
            </p>
            <p className="font-light tracking-wider mb-10 w-full inline-block text-sm md:text-md">
              {teamData.designation}
            </p>
            <div className="socialLinks flex gap-5 justify-start items-center">
              <Link href={teamData.twLink ? `${teamData.twLink}` : `#`}>
                <AiFillTwitterSquare className="text-2xl text-gray-500" />
              </Link>
              <Link href={teamData.linkedin ? `${teamData.linkedin}` : `#`}>
                <AiFillLinkedin className="text-2xl text-gray-500" />
              </Link>
              <Link href={teamData.github ? `${teamData.github}` : `#`}>
                <AiFillGithub className="text-2xl text-gray-500" />
              </Link>
              <Link
                href={teamData.researchGate ? `${teamData.researchGate}` : `#`}>
                <FaResearchgate className="text-2xl text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const query = groq`*[_type == "team" && slug.current == $slug][0]`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "team" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const teamData = await client.fetch(query, { slug });

  return {
    props: {
      teamData,
    },
    revalidate: 60,
  };
}

export default Details;
