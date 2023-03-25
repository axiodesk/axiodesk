import React from "react";

function Service() {
  const data = [
    {
      id: 1,
      title: "SEO",
      desc: "Increase online visibility and attract new customers with expert SEO",
      icon: "/img/serviceIcon/seo.png",
    },
    {
      id: 2,
      title: "SMM",
      desc: "Build brand awareness and connect with your audience through social media.",
      icon: "/img/serviceIcon/smm.png",
    },
    {
      id: 3,
      title: "LinkedIn Outreach",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/linkedIn.png",
    },
    {
      id: 4,
      title: "Facebook Campaign",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/fb.png",
    },
    {
      id: 5,
      title: "Customer Support",
      desc: "Improve customer experience and drive loyalty with exceptional support.",
      icon: "/img/serviceIcon/cus.png",
    },
    {
      id: 6,
      title: "Digital Marketing Website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/dm.png",
    },
    {
      id: 7,
      title: "Marketing Blue Print and consultancy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/bp.png",
    },
    {
      id: 8,
      title: "Virtual assistance",
      desc: "Streamline operations and save time with professional virtual assistance.",
      icon: "/img/serviceIcon/va.png",
    },
    {
      id: 9,
      title: "Affliate Ad marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaequidem error deleniti?",
      icon: "/img/serviceIcon/afm.png",
    },
    {
      id: 10,
      title: "Graphics Design",
      desc: "Stand out from the competition with stunning visual design.",
      icon: "/img/serviceIcon/gd.png",
    },
    {
      id: 11,
      title: "Web Design",
      desc: "Create a user-friendly website that reflects your brand identity and boosts conversions.",
      icon: "/img/serviceIcon/wd.png",
    },
  ];

  return (
    <div className="w-ful" id="services">
      {/* Top wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2937"
          //   fill-opacity="1"
          d="M0,224L21.8,229.3C43.6,235,87,245,131,240C174.5,235,218,213,262,170.7C305.5,128,349,64,393,69.3C436.4,75,480,149,524,192C567.3,235,611,245,655,250.7C698.2,256,742,256,785,229.3C829.1,203,873,149,916,154.7C960,160,1004,224,1047,234.7C1090.9,245,1135,203,1178,192C1221.8,181,1265,203,1309,213.3C1352.7,224,1396,224,1418,224L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
      </svg>

      {/* Main content */}
      <div className="bg-[#1f2937] text-gray-50 py-5 px-5 lg:px-16 2xl:px-80">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <span className="text-[#ee3e38] text-sm md:text-base lg:text-lg font-semibold uppercase">
            What we do
          </span>
          <div className="w-full md:w-3/4">
            <h1 className="text-2xl md:text-4xl 2xl:text-5xl text-white font-black w-full">
            Services that Drive Results
            </h1>
            <p className="text-white/40 mt-5 text-sm md:text-base">
            Partner with AxioDesk and leverage our comprehensive digital services to achieve your business goals
            </p>
            <div className="services w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2lx:grid-cols-4 gap-5 ">
              {data.map((d) => (
                <div
                  className="w-full border border-gray-400/20 border-dashed rounded-sm p-6"
                  key={d.id}>
                    {d.icon && (
                      <div className="w-12 h-12 md:w-16 md:h-16 mb-3">
                      <img
                      src={d.icon}
                      alt="Icon"
                      className="w-full"
                    />
                    </div>
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

      {/* Bottom wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2937"
          //   fill-opacity="1"
          d="M0,96L21.8,101.3C43.6,107,87,117,131,144C174.5,171,218,213,262,229.3C305.5,245,349,235,393,218.7C436.4,203,480,181,524,181.3C567.3,181,611,203,655,186.7C698.2,171,742,117,785,117.3C829.1,117,873,171,916,165.3C960,160,1004,96,1047,96C1090.9,96,1135,160,1178,202.7C1221.8,245,1265,267,1309,240C1352.7,213,1396,139,1418,101.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
      </svg>
    </div>
  );
}

export default Service;
