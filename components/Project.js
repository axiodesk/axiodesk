import React from 'react'
import Link from 'next/link'

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";


function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}


function Project({projects}) {
  console.log(projects)
    const cases = [
      {
        id: 1,
        title: "Detick Watch Product Launching",
        image: "/img/cases/case1.jpg",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        link: "https://www.youtube.com/watch?v=PbevfW_Cgus",
      },
      {
        id: 2,
        title: "Detick Watch Product Launching",
        image: "/img/cases/case1.jpg",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        link: "https://www.youtube.com/watch?v=PbevfW_Cgus",
      },
      {
        id: 3,
        title: "Detick Watch Product Launching",
        image: "/img/cases/case1.jpg",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        link: "https://www.youtube.com/watch?v=PbevfW_Cgus",
      },
      {
        id: 4,
        title: "Detick Watch Product Launching",
        image: "/img/cases/case1.jpg",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        link: "https://www.youtube.com/watch?v=PbevfW_Cgus",
      },
    ];
  return (
    <>
      <main className="pt-5 pb-10 px-5 lg:px-16 2xl:px-80">
        <div>
          <div>
            <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
              Featured works
            </span>
            <h1 className="text-2xl md:text-6xl text-gray-800 font-black w-full">
              Some of our cases
            </h1>
            <p className="mt-5 text-gray-500 w-full  md:w-2/3">
              Id in massa et feugiat non enim non pretium pretium fermentum
              donec neque pellentesque et sociis integer amet venenatis
              dignissim a porta maecenas non.
            </p>
          </div>
          <div className="cases mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {cases.map((c) => (
              <div className="" key={c.id}>
                <img
                  src={`${c.image}`}
                  alt="Case Image"
                  className="w-full sm:w-[400px] sm:h-[300px] md:w-[576px] md:h-[400px] mt-8 rounded-sm hover:shadow-2xl transition-all duration-300"
                />
                <h1 className="my-4 text-xl md:text-2xl 2xl:text-3xl text-gray-800 font-semibold">
                  {c.title}
                </h1>
                <Link
                  href={`${c.link}`}
                  className="mt-2 text-[#7C0221] cursor-pointer rounded-sm">
                  Check on Youtube
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={`/project`}
              className="text-xl md:text-2xl font-semibold text-[#7C0221]">
              View All Works <span className="ml-3">&#8594;</span>
            </Link>
          </div>
        </div>
      </main>
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

export default Project