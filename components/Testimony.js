import React from "react";
import groq from "groq";
import client from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";





export default function Testimony({ posts }) {
  console.log("testimonials", posts);
  return (
    <>
      
    </>
  );
}



export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "testimonial"]
    `);
  return {
    props: {
      posts,
    },
  };
}