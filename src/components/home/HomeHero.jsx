import React from "react";

export default function HomeHero() {
  return (
    <>
      <div
        className="w-full bg-center bg-cover h-svh"
        style={{ backgroundImage: "url('/public/images/home.jpg')" }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-500/10">
          <div className="text-center mt-10">
            <h1 className="text-4xl font-serif italic text-[#B49383] lg:text-5xl">
              The Venue Is{" "}
            </h1>
            <h1 className="mt-1 md:mt-3 text-xl tracking-tighter text-white lg:text-6xl">
              An Extraordinary Experience
            </h1>
            <p className="mt-3 md:mt-5 text-white max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
