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
            <div className="mb-16 text-sm md:text-base space-y-4">
              <p className="">
                Welcome to AxioDesk, your go-to digital marketing agency. We are
                a team of passionate professionals who are dedicated to
                providing top-notch solutions to help you achieve your business
                goals. Our range of services includes SEO, SMM, LinkedIn
                Outreach, Facebook Campaigns, Customer Support, Digital Ad
                Marketing, Virtual Assistance, Marketing Blueprint, Graphics
                Design, and Web Design. With years of experience in the
                industry, we pride ourselves on being the one-stop agency for
                businesses looking to take their marketing efforts to the next
                level.
              </p>
              <p>
                Our team of experts comprises skilled professionals who are
                well-versed in the latest digital marketing trends and
                techniques. We are committed to providing customized solutions
                that cater to your specific business needs. We work closely with
                our clients to ensure that we understand their goals and
                objectives before we propose any solutions. Our approach is
                simple - we believe in providing top-notch services that exceed
                our clients' expectations.
              </p>
              <p>
                At AxioDesk, we understand that digital marketing is a
                constantly evolving landscape. That's why we are committed to
                staying up-to-date with the latest trends and techniques to
                ensure that our clients always receive the best possible
                service. Our team comprises skilled professionals who are always
                eager to learn and grow, and we take pride in providing a
                supportive environment that encourages creativity and
                innovation.
              </p>
              <p>
                Whether you're looking to improve your SEO rankings, drive
                traffic to your website, or design eye-catching graphics for
                your social media channels, we've got you covered. Trust us to
                provide you with the guidance and expertise you need to succeed
                in today's competitive digital landscape.
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
                At AxioDesk, our vision is to simplify the overwhelming digital
                marketing landscape for businesses, and become their go-to
                agency for innovative solutions. We believe in trust,
                transparency, and collaboration, and strive to provide
                customized solutions that cater to our clients' unique needs.
                Our team of experts is passionate about staying up-to-date with
                the latest digital marketing trends and techniques, and we
                encourage creativity and innovation. Our mission is to exceed
                our clients' expectations by delivering exceptional services,
                helping them achieve their business goals, and taking their
                business to the next level.
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
              <div className="space-y-4">
                <p className="">
                  At AxioDesk, our mission is to help businesses succeed in the
                  ever-changing digital landscape. We believe that every
                  business deserves the opportunity to grow and thrive, and
                  we're committed to providing top-notch solutions that exceed
                  our clients' expectations.
                </p>
                <p>
                  Our mission is to simplify the overwhelming digital marketing
                  process by providing customized solutions that cater to our
                  clients' unique needs. We believe in building strong
                  relationships with our clients based on trust, transparency,
                  and collaboration. Our team of experts is passionate about
                  staying up-to-date with the latest digital marketing trends
                  and techniques to ensure that we provide the best possible
                  service to our clients.
                </p>
                <p>
                  Our mission is to be the go-to digital agency for businesses
                  looking to take their marketing efforts to the next level.
                  Whether you're looking to improve your SEO rankings, drive
                  traffic to your website, or design eye-catching graphics for
                  your social media channels, we've got you covered. Trust us to
                  be your digital partner, and together, we'll achieve your
                  business goals.
                </p>
              </div>

              {/* May be have to remove */}
              {/* <ul className="mt-5">
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
              </ul> */}
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
