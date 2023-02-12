import Head from "next/head";

// Total Components
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from "@/components/Service";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

// For sanity
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";

// for slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function Home({testimonials}) {
  console.log(testimonials[0].text)
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
        <div className="py-20 px-5 lg:px-16 2xl:px-80">
          <div className="testimony">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{ clickable: true }}
              pagination={{ clickable: true, dynamicBullets: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              loop
              autoplay={{ delay: 2000 }}>
              {testimonials &&
                testimonials.map((t) => (
                  <SwiperSlide key={t._id}>
                    <div className="flex justify-center items-center flex-col">
                      <img
                        src={`${urlFor(t.image)}`}
                        alt="Client Image"
                        className="w-[150px] h-[150px] md:w-48 md:h-48 object-cover rounded-full p-2"
                      />
                      <div className="uppercase tracking-widest text-xl md:text-2xl ">{t.name}</div>
                      <div className="w-2/3 text-center py-12 text-gray-500 md:text-xl leading-7">{t.text}</div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const testimonials = await client.fetch(groq`
      *[_type == "testimonial"]
    `);
  return {
    props: {
      testimonials,
    },
  };
}
