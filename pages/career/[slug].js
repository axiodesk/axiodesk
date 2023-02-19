import React from "react";
import groq from "groq";
import client from "@/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import CustomHead from "@/components/CustomHead";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

import { GoLocation } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";

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

function JobDetails({ jobData }) {
  return (
    <>
      <CustomHead pageName={`Job Details`} />
      <Nav />
      <Header title={`Job Details`} />

      <main className="py-20 px-5 lg:px-16 2xl:px-80">
        <div>
          <h2 className="text-xl md:text-2xl xl:text-4xl text-gray-800 font-extrabold mb-5">
            {jobData.jobTitle}
          </h2>
          <span className="text-gray-800 bg-emerald-200 rounded-sm py-2 px-4 my-5 border-[1px] border-emerald-500">
            {jobData.jobType}
          </span>
          <div className="flex justify-start items-center gap-2 mt-5">
            <GoLocation className="text-xl font-bold text-gray-800" />
            <p className="font-light">{jobData.location}</p>
          </div>
          <div className="flex justify-start items-center gap-2 mt-2">
            <AiOutlineDollarCircle className="text-xl font-bold text-gray-800" />
            <p className="font-light ">{jobData.salary}</p>
          </div>

          <div className="w-full mt-8">
            <PortableText value={jobData.body} components={ptComponents} />
          </div>
        </div>
      </main>
    </>
  );
}

const query = groq`*[_type == "career" && slug.current == $slug][0]`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "career" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const jobData = await client.fetch(query, { slug });

  return {
    props: {
      jobData,
    },
    revalidate: 60,
  };
}

export default JobDetails;
