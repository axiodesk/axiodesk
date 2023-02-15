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
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";

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

function Details({ teamData }) {
  return (
    <>
      <CustomHead pageName={`Individual pages`} />
      <Nav />
      <Header title={`Profile`} />

      <main className="py-20 px-5 lg:px-16 2xl:px-80">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-20">
          <div className="about">
            <h2 className="text-2xl font-bold mb-5">About Me</h2>
            <div className="mt-5 w-full">
              <PortableText value={teamData.bio} components={ptComponents} />
            </div>
          </div>
          <div className="img">
            {teamData.image && (
              <div className="w-[400px] h-[400px]">
                <img
                  src={urlFor(teamData.image)}
                  alt="Main Image"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            )}
          </div>
          <div className="details">
            <h2 className="text-2xl font-bold mb-5">Details</h2>
            <p className="text-2xl font-light tracking-wider mb-5 w-full inline-block">{teamData.name}</p>
            <p className="text-lg font-light tracking-wider mb-5 w-full inline-block">{teamData.designation}</p>
            <div className="socialLinks flex gap-5 justify-center items-center">
              <Link href={teamData.fbLink ? `${teamData.fbLink}` : `#`}>
                <AiFillFacebook className="text-2xl text-gray-500" />
              </Link>
              <Link href={teamData.twLink ? `${teamData.twLink}` : `#`}>
                <AiFillTwitterSquare className="text-2xl text-gray-500" />
              </Link>
              <Link href={teamData.linkedin ? `${teamData.linkedin}` : `#`}>
                <AiFillLinkedin className="text-2xl text-gray-500" />
              </Link>
              <Link href={teamData.github ? `${teamData.github}` : `#`}>
                <AiFillGithub className="text-2xl text-gray-500" />
              </Link>
              <Link href={teamData.github ? `${teamData.github}` : `#`}>
                <AiOutlineLink className="text-2xl text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const query = groq`*[_type == "team" && slug.current == $slug][0]{
  slug,
  name,
  designation,
  bio,
  image
}`;

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
