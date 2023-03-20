import React from "react";

import CustomHead from "@/components/CustomHead";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

import {
  AiOutlineForm,
  AiOutlineMessage,
  AiOutlineSend,
  AiOutlineHistory,
} from "react-icons/ai";


function service() {
  const data = [
    {
      id: 1,
      title: "SEO",
      desc: "Increase online visibility and attract new customers with expert SEO",
      icon: "/img/serviceIcon/seo.svg",
    },
    {
      id: 2,
      title: "SMM",
      desc: "Build brand awareness and connect with your audience through social media.",
      icon: "/img/serviceIcon/smm.svg",
    },
    {
      id: 3,
      title: "LinkedIn Outreach",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/linkedInOut.svg",
    },
    {
      id: 4,
      title: "Facebook Campaign",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/fbCamp.svg",
    },
    {
      id: 5,
      title: "Customer Support",
      desc: "Improve customer experience and drive loyalty with exceptional support.",
      icon: "/img/serviceIcon/cusSup.svg",
    },
    {
      id: 6,
      title: "Digital Marketing Website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/dm.svg",
    },
    {
      id: 7,
      title: "Marketing Blue Print and consultancy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/consultancy.svg",
    },
    {
      id: 8,
      title: "Virtual assistance",
      desc: "Streamline operations and save time with professional virtual assistance.",
      icon: "/img/serviceIcon/va.svg",
    },
    {
      id: 9,
      title: "Affliate Ad marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/affmar.svg",
    },
    {
      id: 10,
      title: "Graphics Design",
      desc: "Stand out from the competition with stunning visual design.",
      icon: "/img/serviceIcon/gd.svg",
    },
    {
      id: 11,
      title: "Web Design",
      desc: "Create a user-friendly website that reflects your brand identity and boosts conversions.",
      icon: "/img/serviceIcon/gd.svg",
    },
  ];
  return (
    <>
      <CustomHead pageName="Service" />
      <main>
        <Nav />
        <Header title={"Service"} />

        <div className="service">
          <div className="bg-[#1f2937] text-gray-50 py-20 px-5 lg:px-16 2xl:px-80">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="w-full md:w-3/4">
                <span className="text-white/80 text-sm md:text-base lg:text-lg font-semibold uppercase">
                  What we do
                </span>
                <h1 className="text-2xl md:text-4xl 2xl:text-5xl text-white font-black w-full mt-4">
                  Advertising Solutions
                </h1>
                <p className="text-white/40 mt-5 w-full md:w-2/3 text-sm md:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  excepturi omnis qui aspernatur ex, sed magnam pariatur quod
                  repellat? Quo beatae vero facere saepe?
                </p>
              </div>
              <div className="w-full md:w-3/4">
                <div className="services w-full mt-10 grid grid-cols-1 md:grid-cols-2  gap-5 ">
                  {data.map((d) => (
                    <div
                      className="w-full border border-gray-400/20 border-dashed rounded-sm p-6"
                      key={d.id}>
                      {d.icon && (
                        <img
                          src={d.icon}
                          alt="Icon"
                          className="w-10 md:w-16 mb-3"
                        />
                      )}
                      <h3 className="font-bold mb-3 text-white text-base md:text-lg uppercase">
                        {d.title}
                      </h3>
                      <p className="text-gray-400 font-light text-sm md:text-base">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps Block */}
          <div className="steps py-20 px-5 lg:px-16 2xl:px-80">
            <div className="w-full md:w-3/4">
              <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
                Our Process
              </span>
              <h1 className="text-2xl md:text-6xl text-gray-800 font-black w-full md:w-2/3 mt-4">
                A process with you in mind
              </h1>
              <p className="text-gray-500 my-5 w-full md:w-2/3 text-sm md:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                excepturi omnis qui aspernatur ex, sed magnam pariatur quod
                repellat? Quo beatae vero facere saepe?
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 p-4">
              <div className="step border-l-2 pl-4 border-gray-800">
                <AiOutlineForm className="text-xl md:text-3xl text-[#7C0221]" />
                <h2 className="text-lg md:text-xl text-gray-800 font-extrabold mt-4">
                  Guided Input
                </h2>
                <p className="font-light text-gray-500 text-sm md:text-base">
                  Pretium accumsan in ipsum convallis pellentesque metus.
                </p>
              </div>

              <div className="step border-l-2 pl-4 border-gray-800">
                <AiOutlineMessage className="text-xl md:text-3xl text-[#7C0221]" />
                <h2 className="text-lg md:text-xl text-gray-800 font-extrabold mt-4">
                  Project Pulse
                </h2>
                <p className="font-light text-gray-500 text-sm md:text-base">
                  Ut ac viverra tortor ut scelerisque tortor senectus.
                </p>
              </div>
              <div className="step border-l-2 pl-4 border-gray-800">
                <AiOutlineSend className="text-xl md:text-3xl text-[#7C0221]" />
                <h2 className="text-lg md:text-xl text-gray-800 font-extrabold mt-4">
                  Deliveries
                </h2>
                <p className="font-light text-gray-500 text-sm md:text-base">
                  Lobortis integer nec neque facilisis lacus amet neque.
                </p>
              </div>
              <div className="step border-l-2 pl-4 border-gray-800">
                <AiOutlineHistory className="text-xl md:text-3xl text-[#7C0221]" />
                <h2 className="text-lg md:text-xl text-gray-800 font-extrabold mt-4">
                  Iteration
                </h2>
                <p className="font-light text-gray-500 text-sm md:text-base">
                  Amet consequat blandit tortor nibh mattis mauris enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default service;
