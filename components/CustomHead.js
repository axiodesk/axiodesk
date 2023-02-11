import React from "react";
import Head from "next/head";

function CustomHead(props) {
  return (
    <>
      <Head>
        <title>{`Axiodesk - ${props.pageName}`}</title>
        <meta name="description" content={`Axiodesk - ${props.pageName}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./img/favicon.png" />
      </Head>
    </>
  );
}

export default CustomHead;
