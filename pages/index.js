import Head from "next/head";

// Total Components
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from "@/components/Service";
import Footer from "@/components/Footer";

// For sanity
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";

// for slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CustomHead from "@/components/CustomHead";
import Link from "next/link";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function Home({testimonials, projects}) {
  return (
    <div>
      <CustomHead pageName={`Home`} />
      <main>
        {/* Nav */}
        <Nav />

        {/* Hero */}
        <Hero />
        {/* About */}
        <About />

        {/* Testimony */}
        <div className="py-20 px-5 lg:px-16 2xl:px-80">
          <div className="testimony">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{ clickable: true }}
              pagination={{ clickable: true, dynamicBullets: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 5000 }}
              loop={true}>
              {testimonials &&
                testimonials.map((t) => (
                  <SwiperSlide key={t._id}>
                    <div className="flex justify-center items-center flex-col">
                      <img
                        src={`${urlFor(t.image)}`}
                        alt="Client Image"
                        className="w-[150px] h-[150px] md:w-48 md:h-48 object-cover rounded-full p-2"
                      />
                      <div className="uppercase tracking-widest text-base md:text-xl ">
                        {t.name}
                      </div>
                      <div className="w-2/3 text-center py-12 text-gray-500 text-sm md:text-base leading-7">
                        {t.text}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        {/* Services */}
        <Service />
        
        {/* Projects */}
        <div className="pt-5 pb-10 px-5 lg:px-16 2xl:px-80">
          <div>
            <div>
              <span className="text-[#7C0221] text-sm md:text-base lg:text-lg font-semibold uppercase">
                Featured works
              </span>
              <h1 className="text-2xl md:text-4xl 2xl:text-5xl text-gray-800 font-black w-full">
              See Our Success Stories
              </h1>
              <p className="mt-5 text-gray-500 w-full md:w-2/3 text-sm md:text-base">
              We're proud of the results we've achieved for our clients. Take a look at our recent projects and see how our solutions have helped businesses like yours thrive in the digital world
              </p>
            </div>
            <div className="cases mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projects.map((c) => (
                <div className="" key={c._id}>
                  <img
                    src={`${urlFor(c.image)}`}
                    alt="Case Image"
                    className="w-full sm:w-[400px] sm:h-[300px] md:w-[576px] md:h-[400px] mt-8 rounded-sm hover:shadow-2xl transition-all duration-300"
                  />
                  <h1 className="my-4 text-lg md:text-xl 2xl:text-2xl text-gray-800 font-semibold">
                    {c.title}
                  </h1>
                  <Link
                    href={`${c.link}`}
                    className="mt-2 text-[#7C0221] cursor-pointer rounded-sm text-sm md:text-base">
                    Check on Youtube
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href={`/project`}
                className="text-lg md:text-xl 2xl:text-2xl font-semibold text-[#7C0221]">
                View All Works <span className="ml-3">&#8594;</span>
              </Link>
            </div>
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
  const projects = await client.fetch(groq`
      *[_type == "projects"] | order(_createdAt asc)
    `);
  return {
    props: {
      testimonials,
      projects
    },
  };
}
