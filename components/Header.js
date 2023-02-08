import React from "react";

function Header({ title }) {
  return (
    <>
      <div className="bg-[url(/img/bg.svg)] w-full h-48 bg-right-bottom bg-[100vw_auto] bg-no-repeat md:bg-right-top md:h-80 md:bg-[80vw_auto] flex justify-start items-center px-5 lg:px-16 2xl:px-80 mt-16">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl 2xl:text-7xl font-extrabold text-gray-800">
          {title}
        </h1>
      </div>
    </>
  );
}

export default Header;
