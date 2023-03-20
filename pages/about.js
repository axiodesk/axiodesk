import React from "react";


import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomHead from "@/components/CustomHead";


function about() {
  return (
    <>
      <CustomHead pageName="About" />
      <Nav />
      <Header title={`About`} />

      <main className="px-5 lg:px-16 2xl:px-80 py-5 md:py-16">
        <div className="flex justify-between items-start flex-col md:flex-row gap-5 md:gap-0 mt-2">
          <div>
            <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
              Our story
            </span>
          </div>
          <div className="w-full md:w-2/3 text-gray-500 mb-5 space-y-5">
            <div className="w-20 h-[2px] bg-[#7C0221]"></div>
            <div className="mb-16 text-sm md:text-base">
              <p className="">
                Id in massa et feugiat non enim non pretium pretium fermentum
                donec neque pellentesque et sociis integer amet venenatis
                dignissim a porta maecenas non.
              </p>
              <p>
                Placerat aliquet eu, sollicitudin interdum leo suspendisse
                aliquam imperdiet gravida mauris quis sit fusce in purus leo eu
                sapien amet, arcu, lacus in enim vulputate cras tortor posuere
                elementum pulvinar netus morbi nulla etiam amet dictum tortor
                purus malesuada sed maecenas tincidunt elementum id in placerat
                ut semper.
              </p>
              <p>
                Rhoncus sed elementum amet enim ornare hac posuere lectus neque
                est neque, vestibulum, quis ipsum potenti dui nibh ac
                suspendisse vulputate magna urna est ipsum arcu accumsan, tempor
                nisl magnis at habitant et, egestas arcu senectus at lectus
                ullamcorper varius eget risus, hac eget ipsum faucibus gravida
                tellus
              </p>
            </div>

            <div className="imgGallery grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
              <img
                src="/img/aboutImg/about1.jpg"
                alt="About Img"
                className="w-full h-96 xl:col-span-2 object-cover rounded-sm"
              />
              <img
                src="/img/aboutImg/about2.jpg"
                alt="About Img"
                className="w-full h-96 object-cover rounded-sm"
              />
              <img
                src="/img/aboutImg/about3.jpg"
                alt="About Img"
                className="w-full h-96 object-cover rounded-sm"
              />
              <img
                src="/img/aboutImg/about4.jpg"
                alt="About Img"
                className="w-full h-96 xl:col-span-2 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="flex justify-between items-start flex-col md:flex-row gap-5 md:gap-0 mt-10">
          <div>
            <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
              Our Vision
            </span>
          </div>
          <div className="w-full md:w-2/3 text-gray-500 mb-5 space-y-5">
            <div className="w-20 h-[2px] bg-[#7C0221]"></div>
            <div className="mb-16 text-sm md:text-base">
              <p className="">
                Faucibus volutpat pellentesque turpis lacus pharetra massa
                tellus vulputate ornare erat at sed enim, elementum purus arcu
                ut nunc fusce gravida et a, velit, egestas etiam arcu ornare
                elit nibh quis venenatis.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="flex justify-between items-start flex-col md:flex-row gap-5 md:gap-0 mt-10">
          <div>
            <span className="text-[#7C0221] text-md 2xl:text-2xl font-semibold uppercase">
              Our Mission
            </span>
          </div>
          <div className="w-full md:w-2/3 text-gray-500 mb-5 space-y-5">
            <div className="w-20 h-[2px] bg-[#7C0221]"></div>
            <div className="mb-16 text-sm md:text-base">
              <p className="">
                Elit egestas nisl, pellentesque ante aliquam gravida ultrices
                blandit ipsum ac felis egestas eget in facilisis varius risus,
                nunc ac at ut nunc euismod.
              </p>

              <ul className="mt-5">
                <li>
                  <span className="mr-3 text-[#7C0221] font-extrabold">
                    &#8594;
                  </span>{" "}
                  Ullamcorper id nibh ac egestas
                </li>
                <li>
                  <span className="mr-3 text-[#7C0221] font-extrabold">
                    &#8594;
                  </span>{" "}
                  Consequat parturient venenatis elementum
                </li>
                <li>
                  <span className="mr-3 text-[#7C0221] font-extrabold">
                    &#8594;
                  </span>{" "}
                  In pulvinar molestie quis aliquet
                </li>
                <li>
                  <span className="mr-3 text-[#7C0221] font-extrabold">
                    &#8594;
                  </span>{" "}
                  Nunc sed sem nec curabitur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default about;
