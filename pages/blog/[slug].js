import React from 'react'
import Head from 'next/head';
import groq from 'groq';
import imageUrlBuilder from "@sanity/image-url";

import client from '../../client'


import Nav from '@/components/Nav';
import Header from '@/components/Header';


function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Details({post}) {
  return (
    <>
      <Head>
        <title>Axiodesk</title>
        <meta name="description" content="Axiodesk - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./img/logo.png" />
      </Head>
      <Nav />
      <Header title={`${post.title}`} />
      <main>
        <img src={urlFor(post.postImage).width(50)} alt="Main Image" />
      </main>
    </>
  );
}


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "postImage" : mainImage
}`;


export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
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

export default Details