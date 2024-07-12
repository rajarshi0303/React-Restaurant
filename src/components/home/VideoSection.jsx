import React from "react";

export default function VideoSection() {
  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-52 md:h-[24rem]"
        style={{ backgroundImage: "url('images/video.jpg')" }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-500/10">
          <div class="text-center mt-10">
            <h1 class="text-2xl font-serif italic text-[#B49383] lg:text-3xl">
              The Venue Is{" "}
            </h1>
            <h1 class="mt-3 text-3xl text-white lg:text-5xl">
              Food for the soul
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
