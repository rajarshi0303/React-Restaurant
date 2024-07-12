import React from "react";

export default function Heading({ url, title }) {
  return (
    <header>
      <div
        class="w-full bg-center bg-cover h-96 lg:h-[32rem]"
        style={{ backgroundImage: `url('${url}')` }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-500/10">
          <div class="text-center mt-10">
            <h1 class="text-xl font-serif italic text-[#B49383] lg:text-2xl">
              The Venue
            </h1>
            <h1 class="text-4xl tracking-tighter text-white lg:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
