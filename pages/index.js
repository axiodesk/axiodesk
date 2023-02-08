import Head from "next/head";

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from "@/components/Service";
import Project from "@/components/Project";
import Testimony from "@/components/Testimony";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Axiodesk</title>
        <meta name="description" content="Axiodesk - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="./img/logo.png" />
      </Head>
      <main>
        {/* Nav */}
        <Nav />

        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Services */}
        <Service />
        {/* Projects */}
        <Project />
        {/* Testimony */}
        <Testimony />
        {/* Blog */}
        {/* Contact */}
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
